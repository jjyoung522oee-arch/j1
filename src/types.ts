export type CraftStepId = 
  | 'prep'
  | 'base'
  | 'stake'
  | 'body'
  | 'border'
  | 'finish';

export interface CraftStep {
  id: CraftStepId;
  stepNumber: number;
  title: string;
  subtitle: string;
  durationMinutes: number;
  difficulty: '초급' | '중급' | '고급';
  summary: string;
  keyAction: string;
  materials: string[];
  tools: string[];
  instructions: {
    title: string;
    description: string;
    tip?: string;
  }[];
  proTips: string[];
  commonMistakes: string[];
  weaveType: string;
}

export type BasketShape = 'bowl_m' | 'bowl_nesting' | 'bowl_mini' | 'bowl_tray';

export interface BasketPreset {
  id: BasketShape;
  name: string;
  koreanName: string;
  defaultDiameter: number; // Top Rim Diameter (cm)
  defaultBaseDiameter: number; // Base Diameter (cm)
  defaultHeight: number; // Height (cm)
  defaultThickness: number; // in mm, e.g. 2.0
  description: string;
  iconName: string;
  suggestedFinish: string;
}

export interface CalculationResult {
  baseStakes: number;
  insertedStakes: number;
  totalStakes: number;
  stakeCutLengthCm: number;
  totalStakeLengthM: number;
  weaverLengthM: number;
  approxWeightGrams: number;
  soakTimeMinutes: number;
  recommendedTechnique: string;
  flareAngle: number;
  breakdown: {
    baseAllowance: number;
    heightAllowance: number;
    borderAllowance: number;
  };
}

export interface KitProduct {
  id: string;
  name: string;
  category: 'kit' | 'material' | 'tool' | 'finish';
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  badge?: string;
  difficulty?: '★☆☆ (입문)' | '★★☆ (중급)' | '★★★ (숙련)';
  timeRequired?: string;
  image: string;
  description: string;
  includes: string[];
  features: string[];
}

export interface CartItem {
  product: KitProduct;
  quantity: number;
}

export interface WorkshopClass {
  id: string;
  title: string;
  subtitle: string;
  category: 'oneday' | 'regular' | 'master';
  level: string;
  duration: string;
  price: number;
  capacity: number;
  location: string;
  image: string;
  highlights: string[];
  curriculum: string[];
  availableDates: string[];
  timeSlots: string[];
}

export interface BookingRequest {
  classId: string;
  date: string;
  timeSlot: string;
  attendees: number;
  name: string;
  phone: string;
  email: string;
  requests?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  date: string;
  rating: number;
  productOrClassName: string;
  comment: string;
  likes: number;
  tag: string;
  avatar: string;
  image?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: '기초' | '엮기테크닉' | '트러블슈팅' | '관리보관';
  keywords: string[];
}
