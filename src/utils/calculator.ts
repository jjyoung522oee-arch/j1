import { CalculationResult } from '../types';

export function calculateRattanRequirements(
  diameterCm: number,
  heightCm: number,
  thicknessMm: number,
  weaveStyle: 'coiled' | 'feather' | 'braided' = 'coiled'
): CalculationResult {
  // Border allowance per end based on finishing style (coiled needs generous 16cm for rolled volume)
  const borderPerSide = weaveStyle === 'coiled' ? 16 : weaveStyle === 'feather' ? 14 : 20;
  
  // Base diameter for round bowl is naturally ~60-65% of top rim diameter
  const baseDiameterCm = Math.round(diameterCm * 0.62);

  // Target spoke spacing at rim is ~2.0 - 2.4cm
  const rimCircumference = Math.PI * diameterCm;
  let targetTotalStakes = Math.round(rimCircumference / 2.2);
  
  if (targetTotalStakes % 2 !== 0) {
    targetTotalStakes += 1;
  }
  targetTotalStakes = Math.max(16, Math.min(64, targetTotalStakes));

  // Base spokes cross
  const baseStakesCount = Math.floor(targetTotalStakes / 2);
  const insertedStakesCount = targetTotalStakes - baseStakesCount;

  // Slope side wall length (hypotenuse)
  const radiusDiff = (diameterCm - baseDiameterCm) / 2;
  const slantHeight = Math.sqrt(heightCm * heightCm + radiusDiff * radiusDiff);

  // Single stake cut length = Base diameter + (2 * slantHeight) + (2 * Border Allowance)
  const stakeCutLengthCm = Math.round(baseDiameterCm + (2 * slantHeight) + (2 * borderPerSide));
  
  // Total stake length in meters
  const totalStakeLengthM = Math.round(((baseStakesCount * stakeCutLengthCm) + (insertedStakesCount * (slantHeight + borderPerSide + 4))) / 100);

  // Rows of weaving needed for the curved side
  const rowHeightCm = (thicknessMm * 0.95) / 10;
  const sideRows = Math.round(slantHeight / rowHeightCm);
  const baseRows = Math.round((baseDiameterCm / 2) / rowHeightCm);
  const totalRounds = sideRows + baseRows;

  // Average circumference for bowl
  const avgDiameter = (diameterCm + baseDiameterCm) / 2;
  const avgCircumferenceM = (Math.PI * avgDiameter) / 100;
  const weaverLengthM = Math.round(avgCircumferenceM * totalRounds * 1.18);

  // Weight estimation: 2.0mm ~ 3.1g/m, 2.5mm ~ 4.8g/m
  const weightPerMeter = thicknessMm <= 2.0 ? 3.1 : thicknessMm <= 2.5 ? 4.8 : 7.0;
  const approxWeightGrams = Math.round((weaverLengthM + totalStakeLengthM) * weightPerMeter * 1.08);

  // Soaking time
  const soakTimeMinutes = thicknessMm <= 2.0 ? 10 : thicknessMm <= 2.5 ? 15 : 22;

  // Flare angle from horizontal base: e.g. 58~65 degrees
  const flareAngle = Math.round(Math.atan2(heightCm, Math.max(1, radiusDiff)) * (180 / Math.PI));

  let recommendedTechnique = '십자 바닥짜기 + 완만한 60도 날대올리기 + 도톰한 롤 테두리 마무르기';
  if (weaveStyle === 'braided') {
    recommendedTechnique = '십자 바닥짜기 + 나선형 막엮기 + 3줄 땋아마무르기';
  } else if (weaveStyle === 'feather') {
    recommendedTechnique = '십자 바닥짜기 + 2줄 꼬아엮기 + 콤팩트 비녀마무르기';
  }

  return {
    baseStakes: baseStakesCount,
    insertedStakes: insertedStakesCount,
    totalStakes: targetTotalStakes,
    stakeCutLengthCm,
    totalStakeLengthM,
    weaverLengthM,
    approxWeightGrams,
    soakTimeMinutes,
    recommendedTechnique,
    flareAngle,
    breakdown: {
      baseAllowance: baseDiameterCm,
      heightAllowance: Math.round(slantHeight * 2),
      borderAllowance: borderPerSide * 2
    }
  };
}
