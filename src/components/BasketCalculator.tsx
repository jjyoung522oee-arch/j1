import React, { useState, useMemo } from 'react';
import { BASKET_PRESETS } from '../data/rattanData';
import { calculateRattanRequirements } from '../utils/calculator';
import { BasketShape, BasketPreset } from '../types';
import { 
  Calculator, Copy, Check, Sparkles, Sliders, Info, ShieldCheck, 
  Layers, BookOpen, ArrowRight, RefreshCw, Heart 
} from 'lucide-react';
import { MascotBunny } from './CuteCharacters';

interface BasketCalculatorProps {
  onStartGuide: () => void;
  presetOverride?: { diameter: number; height: number } | null;
}

export const BasketCalculator: React.FC<BasketCalculatorProps> = ({ 
  onStartGuide,
  presetOverride,
}) => {
  const [selectedShape, setSelectedShape] = useState<BasketShape>('bowl_m');
  const [diameter, setDiameter] = useState<number>(presetOverride?.diameter || 21);
  const [height, setHeight] = useState<number>(presetOverride?.height || 6.5);
  const [thickness, setThickness] = useState<number>(2.0);
  const [finishStyle, setFinishStyle] = useState<'coiled' | 'feather' | 'braided'>('coiled');
  const [copied, setCopied] = useState<boolean>(false);

  // Apply preset default values
  const handlePresetSelect = (preset: BasketPreset) => {
    setSelectedShape(preset.id);
    setDiameter(preset.defaultDiameter);
    setHeight(preset.defaultHeight);
    setThickness(preset.defaultThickness);
  };

  const results = useMemo(() => {
    return calculateRattanRequirements(diameter, height, thickness, finishStyle);
  }, [diameter, height, thickness, finishStyle]);

  const copyToClipboard = () => {
    const text = `[라탄 만들기] 원형 라탄 보울 재단 계산서
- 형태: ${BASKET_PRESETS.find(p => p.id === selectedShape)?.koreanName || '맞춤 원형 보울'}
- 입구 지름: ${diameter}cm | 보울 깊이: ${height}cm (환심 ${thickness}mm)
- 완만 사발 경사각: 약 ${results.flareAngle}° (네스팅 최적 비율)
- 날대(기둥): 총 ${results.totalStakes}가닥 (재단길이 각 ${results.stakeCutLengthCm}cm)
- 사릿대(엮음줄): 약 ${results.weaverLengthM}미터 (예상 중량 ${results.approxWeightGrams}g)
- 불림 시간: 미온수 ${results.soakTimeMinutes}분
- 추천 테크닉: ${results.recommendedTechnique}`;

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <section id="basket-calculator-section" className="py-12 sm:py-16 bg-[#F4F9FD] border-y border-[#E2E8F0] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title with MascotBunny */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-xs font-bold text-[#0284C7] mb-3 shadow-2xs whitespace-nowrap">
            <Calculator className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
            <span>📐 실패 없는 황금 비율 날대 계산기</span>
          </div>
          
          <div className="flex items-center justify-center gap-3">
            <MascotBunny size={52} className="hidden sm:block animate-pulse" />
            <h2 className="font-cute text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F243E] tracking-wide break-keep">
              원하는 크기만 쏙! 🐰 날대 재단 자동 계산기
            </h2>
          </div>
          
          <p className="text-xs sm:text-base text-[#475569] mt-2 leading-relaxed break-keep font-medium">
            만들고 싶은 입구 지름과 깊이를 조절하면, 귀여운 롤 테두리에 필요한 날대 길이와 환심 소요량을 1초 만에 척척 알려줘요!
          </p>
        </div>

        {/* Preset Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {BASKET_PRESETS.map((preset) => {
            const isSelected = selectedShape === preset.id;
            return (
              <button
                key={preset.id}
                id={`calc-preset-${preset.id}`}
                onClick={() => handlePresetSelect(preset)}
                className={`p-3.5 rounded-3xl border-2 text-left transition cursor-pointer active:scale-98 ${
                  isSelected
                    ? 'bg-[#EFF6FF] text-[#0F243E] border-[#0284C7] shadow-sm ring-1 ring-[#0284C7]/20'
                    : 'bg-white text-[#475569] border-[#E2E8F0] hover:bg-[#F8FAFD] hover:border-[#93C5FD]'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-cute text-sm sm:text-base font-bold text-[#0F243E]">{preset.name}</span>
                  {isSelected && <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" />}
                </div>
                <div className="text-[11px] text-[#64748B] font-medium">
                  지름 {preset.defaultDiameter}cm × 깊이 {preset.defaultHeight}cm
                </div>
              </button>
            );
          })}
        </div>

        {/* Main 2-Column Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Controls Column (6 cols) */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-7 rounded-3xl border-2 border-[#BFDBFE] shadow-xs space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-[#0284C7]" />
                <h3 className="font-cute text-base sm:text-lg font-bold text-[#0F243E]">
                  보울 치수 슬라이더 조절 📏
                </h3>
              </div>
              <span className="text-xs text-[#0284C7] font-semibold">실시간 자동 연산 중 ✨</span>
            </div>

            {/* Slider 1: Top Rim Diameter */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-[#0F243E]">상단 입구 지름 (Rim Diameter)</span>
                <span className="font-mono font-bold text-[#0284C7] bg-[#EFF6FF] px-2.5 py-0.5 rounded-lg border border-[#BFDBFE]">
                  {diameter} cm
                </span>
              </div>
              <input
                type="range"
                min="12"
                max="36"
                step="1"
                value={diameter}
                onChange={(e) => setDiameter(Number(e.target.value))}
                className="w-full h-2 bg-[#E2E8F0] rounded-lg appearance-none cursor-pointer accent-[#0284C7]"
              />
              <div className="flex justify-between text-[10px] text-[#64748B]">
                <span>12cm (소담한 티푸드)</span>
                <span>21cm (사진 속 빵 볼)</span>
                <span>36cm (대형 센터피스)</span>
              </div>
            </div>

            {/* Slider 2: Height (Bowl Depth) */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-[#0F243E]">보울 깊이 / 높이 (Depth)</span>
                <span className="font-mono font-bold text-[#0284C7] bg-[#EFF6FF] px-2.5 py-0.5 rounded-lg border border-[#BFDBFE]">
                  {height} cm
                </span>
              </div>
              <input
                type="range"
                min="3.5"
                max="14"
                step="0.5"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full h-2 bg-[#E2E8F0] rounded-lg appearance-none cursor-pointer accent-[#0284C7]"
              />
              <div className="flex justify-between text-[10px] text-[#64748B]">
                <span>3.5cm (얕은 채반형)</span>
                <span>6.5cm (클래식 사발형)</span>
                <span>14cm (깊은 과일함)</span>
              </div>
            </div>

            {/* Thickness Select */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#0F243E] block">
                사용할 환심 두께 규격
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { mm: 1.5, label: '1.5mm (섬세함)' },
                  { mm: 2.0, label: '2.0mm (표준 권장)' },
                  { mm: 2.5, label: '2.5mm (두툼함)' }
                ].map((item) => (
                  <button
                    key={item.mm}
                    onClick={() => setThickness(item.mm)}
                    className={`py-2 px-2.5 rounded-xl border text-xs font-medium transition cursor-pointer ${
                      thickness === item.mm
                        ? 'bg-[#0284C7] text-white border-[#0284C7] font-bold shadow-2xs'
                        : 'bg-[#F8FAFD] text-[#475569] border-[#E2E8F0] hover:bg-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Finish Style Select */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#0F243E] block">
                상단 테두리 마무르기 기법
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'coiled', name: '사진 속 롤 테두리', desc: 'Coiled Rim (추천)' },
                  { id: 'feather', name: '비녀마무르기', desc: '단정한 림' },
                  { id: 'braided', name: '땋아마무르기', desc: '볼륨 꽈배기' }
                ].map((style) => (
                  <button
                    key={style.id}
                    onClick={() => setFinishStyle(style.id as any)}
                    className={`p-2 rounded-xl border text-left transition cursor-pointer ${
                      finishStyle === style.id
                        ? 'bg-[#EFF6FF] border-[#0284C7] text-[#0284C7]'
                        : 'bg-[#F8FAFD] border-[#E2E8F0] text-[#475569] hover:bg-white'
                    }`}
                  >
                    <div className="font-bold text-[11px]">{style.name}</div>
                    <div className="text-[10px] opacity-75">{style.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Geometric summary */}
            <div className="p-3.5 rounded-2xl bg-[#F8FAFD] border border-[#E2E8F0] text-xs text-[#475569] space-y-1">
              <div className="flex justify-between">
                <span>예상 바닥 지름 (Base Diameter):</span>
                <span className="font-mono font-bold text-[#0F243E]">{Math.round(diameter * 0.62)} cm</span>
              </div>
              <div className="flex justify-between">
                <span>보울 사발 곡선 경사각 (Flare Angle):</span>
                <span className="font-mono font-bold text-[#0284C7]">약 {results.flareAngle}° (포개짐 최적화)</span>
              </div>
            </div>

          </div>

          {/* Right Calculation Results Column (6 cols) */}
          <div className="lg:col-span-6 space-y-5">
            
            <div className="bg-white p-6 sm:p-7 rounded-3xl border border-[#E2E8F0] shadow-2xs space-y-5">
              
              {/* Header with copy button */}
              <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
                <div>
                  <span className="text-[11px] text-[#0284C7] font-bold tracking-wide uppercase">
                    RATTAN CUTTING SHEET
                  </span>
                  <h4 className="font-cute text-base font-bold text-[#0F243E]">
                    재단 규격 산출표
                  </h4>
                </div>

                <button
                  id="calc-copy-btn"
                  onClick={copyToClipboard}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[#BFDBFE] bg-[#EFF6FF] hover:bg-white text-xs font-semibold text-[#0284C7] transition cursor-pointer whitespace-nowrap"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#059669] shrink-0" />
                      <span className="text-[#059669] whitespace-nowrap">복사 완료!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 shrink-0" />
                      <span className="whitespace-nowrap">계산서 복사</span>
                    </>
                  )}
                </button>
              </div>

              {/* Primary Metric: Stake Cut Length */}
              <div className="p-4 rounded-2xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#64748B] block">기둥이 되는 날대 재단 길이 (1줄당)</span>
                  <div className="font-cute text-2xl sm:text-3xl font-bold text-[#0284C7]">
                    각 <span className="font-mono">{results.stakeCutLengthCm}</span> cm
                  </div>
                  <span className="text-[11px] text-[#475569] mt-0.5 block">
                    바닥({results.breakdown.baseAllowance}cm) + 옆면 곡선({results.breakdown.heightAllowance}cm) + 롤 테두리 여유({results.breakdown.borderAllowance}cm)
                  </span>
                </div>
                <div className="text-right font-mono text-xs bg-white px-3 py-2 rounded-xl border border-[#BFDBFE]">
                  <span className="text-[#64748B] block text-[10px]">필요 가닥수</span>
                  <strong className="text-sm text-[#0F243E]">{results.totalStakes} 가닥</strong>
                </div>
              </div>

              {/* Secondary Metrics Grid */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3.5 rounded-2xl bg-[#F8FAFD] border border-[#E2E8F0] text-center">
                  <span className="text-[11px] text-[#64748B] block mb-1">엮음 사릿대</span>
                  <span className="font-mono text-base font-bold text-[#0F243E]">
                    약 {results.weaverLengthM} m
                  </span>
                  <span className="text-[10px] text-[#94A3B8] block mt-0.5">텐션 18% 포함</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#F8FAFD] border border-[#E2E8F0] text-center">
                  <span className="text-[11px] text-[#64748B] block mb-1">예상 환심 중량</span>
                  <span className="font-mono text-base font-bold text-[#0F243E]">
                    약 {results.approxWeightGrams} g
                  </span>
                  <span className="text-[10px] text-[#94A3B8] block mt-0.5">소모 환심 총량</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#F8FAFD] border border-[#E2E8F0] text-center">
                  <span className="text-[11px] text-[#64748B] block mb-1">미온수 불림</span>
                  <span className="font-mono text-base font-bold text-[#0284C7]">
                    {results.soakTimeMinutes} 분
                  </span>
                  <span className="text-[10px] text-[#94A3B8] block mt-0.5">35~40℃ 침수</span>
                </div>
              </div>

              {/* Dynamic SVG Visual Preview of the Bowl */}
              <div className="p-4 rounded-2xl bg-[#F8FAFD] border border-[#E2E8F0] flex flex-col items-center justify-center">
                <span className="text-[11px] text-[#64748B] mb-2 font-medium">
                  설정 치수 기반 보울 곡률 렌더링 (단면 비례)
                </span>
                
                <svg viewBox="0 0 240 100" className="w-52 h-24 drop-shadow-2xs">
                  {/* Flared bowl cross section */}
                  <ellipse cx="120" cy="88" rx="65" ry="8" fill="#000000" fillOpacity="0.05" />
                  <path
                    d={`M ${120 - diameter * 2.6} 20 Q ${120 - diameter * 1.8} 80 85 82 L 155 82 Q ${120 + diameter * 1.8} 80 ${120 + diameter * 2.6} 20 Z`}
                    fill="#E0F2FE"
                    stroke="#0284C7"
                    strokeWidth="2"
                  />
                  {/* Rolled rim ellipse */}
                  <ellipse
                    cx="120"
                    cy="20"
                    rx={diameter * 2.6}
                    ry={8}
                    fill="#BAE6FD"
                    stroke="#0284C7"
                    strokeWidth="2.5"
                  />
                  {/* Dimension indicator lines */}
                  <line x1={120 - diameter * 2.6} y1="10" x2={120 + diameter * 2.6} y2="10" stroke="#0284C7" strokeWidth="1" strokeDasharray="2 2" />
                  <text x="120" y="8" textAnchor="middle" fontSize="8" fill="#0284C7" fontWeight="bold">
                    지름 {diameter}cm
                  </text>
                </svg>
              </div>

              {/* Action Button: Start Guide CTA */}
              <button
                id="calc-start-guide-btn"
                onClick={onStartGuide}
                className="w-full flex items-center justify-center gap-2 bg-[#0284C7] hover:bg-[#0369A1] text-white py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm transition cursor-pointer shadow-sm active:scale-99"
              >
                <BookOpen className="w-4 h-4 text-white" />
                <span>이 계산 규격으로 1단계 바구니 제작 시작하기</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
