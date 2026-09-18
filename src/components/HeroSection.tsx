import React, { useState } from 'react';
import { 
  ArrowRight, Calculator, BookOpen, Sparkles, 
  CheckCircle2, ShieldCheck, Layers, Coffee, Wrench, Eye, MapPin, Heart, Smile
} from 'lucide-react';
import { MascotBear, MascotKitten, MascotBunny } from './CuteCharacters';

interface HeroSectionProps {
  onStartGuide: () => void;
  onOpenCalculator: () => void;
  onExploreTools: () => void;
  onViewNestingShowcase: () => void;
  onOpenLocation?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartGuide,
  onOpenCalculator,
  onExploreTools,
  onViewNestingShowcase,
  onOpenLocation,
}) => {
  const [activeFeaturePoint, setActiveFeaturePoint] = useState<number>(1);

  // Core craft anatomy points
  const craftAnatomyPoints = [
    {
      id: 1,
      title: '기초 십자(+) 바닥짜기와 매화매듭',
      desc: '가로 3줄, 세로 3줄을 십자로 맞물려 사릿대로 2바퀴 묶어준 뒤, 날대를 1줄씩 부챗살처럼 균일하게 벌려 견고한 원형 기초를 완성합니다.',
      tag: 'STEP 02 핵심 공법',
      emoji: '🌸'
    },
    {
      id: 2,
      title: '완만한 60° 사발 곡선 올리기',
      desc: '가방처럼 90도 수직으로 꺾지 않고, 날대 밑동에 미온수를 분무하며 손바닥으로 완만하게 눕혀 올려 사진 속 4단 보울이 쏙쏙 포개어지는 최적의 곡률을 만듭니다.',
      tag: 'STEP 03 핵심 공법',
      emoji: '🥣'
    },
    {
      id: 3,
      title: '촘촘한 상하 막엮기 & 밀도 다지기',
      desc: '사릿대를 앞뒤로 교차하며 매 바퀴마다 엄지손가락으로 꾹꾹 눌러 다져, 빵 부스러기가 빠져나가지 않는 매끄럽고 틈새 없는 표면 밀도를 만듭니다.',
      tag: 'STEP 04 핵심 공법',
      emoji: '✨'
    },
    {
      id: 4,
      title: '도톰한 둥근 롤 테두리 마무르기',
      desc: '사진 속 바구니의 시그니처 귀여운 디테일! 날대를 13cm 남겨 바깥으로 둥글게 굴려 말아 넣음으로써 포근한 그립감과 튼튼함을 동시에 완성합니다.',
      tag: 'STEP 05 핵심 공법',
      emoji: '🥐'
    },
    {
      id: 5,
      title: '100% 식기용 천연 호두오일 코팅',
      desc: '화학 바니시 없이 순수 냉압착 호두오일로 마감하여, 빵과 과일이 직접 닿아도 안심! 시간이 지날수록 감성 가득한 황금빛 허니 브라운으로 곱게 태닝됩니다.',
      tag: 'STEP 06 핵심 공법',
      emoji: '🍯'
    }
  ];

  return (
    <section className="relative overflow-hidden pt-6 pb-14 sm:pt-10 sm:pb-20 bg-[#FFFDF9] border-b border-[#F2E8DA]">
      {/* Soft warm pastel glow bubbles */}
      <div className="absolute top-0 right-10 w-96 h-96 rounded-full bg-[#FFEEDD] blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute bottom-0 left-5 w-80 h-80 rounded-full bg-[#FFF0E6] blur-3xl opacity-80 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text & Mascot Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Mascot Greeting Speech Bubble */}
            <div className="flex items-center gap-3 p-3 sm:p-3.5 rounded-3xl bg-white border-2 border-[#FBD38D] shadow-sm max-w-xl">
              <MascotBear size={52} className="shrink-0 animate-bounce" />
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="font-cute text-sm sm:text-base text-[#B45309] font-bold">
                    공방장 곰돌이의 초대장 🧸
                  </span>
                  <span className="text-[10px] bg-[#FEF3C7] text-[#92400E] px-2 py-0.5 rounded-full font-bold">
                    생초보 100% 완성 보장
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#5C4538] font-medium leading-tight break-keep">
                  "안녕! 물에 퐁당 담근 환심을 손끝으로 돌돌 엮으면, 오늘 하루 나만의 감성 듬뿍 바구니가 탄생해요!"
                </p>
              </div>
            </div>

            {/* Cute Headline with playful badges */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF4E6] border border-[#FED7AA] text-xs font-bold text-[#C05621] whitespace-nowrap shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
                <span>동글동글 원형 라탄 바구니 • 4단 네스팅 보울</span>
              </div>

              <h1 className="font-cute text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-tight text-[#3E291C] leading-[1.25] break-keep">
                손끝으로 조물조물 엮는<br className="hidden sm:inline" />
                <span className="text-[#C05621] relative inline-block">
                  포근하고 귀여운 라탄 바구니 🧺
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-[#FED7AA]/60 -z-10 rounded-full" />
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#665343] leading-relaxed max-w-2xl break-keep font-medium">
              가방처럼 딱딱하지 않고 동글동글 사발 곡선과 도톰한 롤 테두리가 사랑스러운 4단 라탄 보울이에요.
              환심 물 불리기부터 바닥짜기, 곡선 세우기, 천연 호두오일 바르기까지 곰돌이와 함께 뚝딱 완성해봐요!
            </p>

            {/* Cute Feature Process Highlights */}
            <div className="flex flex-wrap gap-2 pt-1 text-xs">
              <span className="px-3 py-1.5 rounded-full bg-white border border-[#F2E4D0] text-[#78614E] font-bold flex items-center gap-1.5 shadow-2xs">
                <BookOpen className="w-3.5 h-3.5 text-[#C05621] shrink-0" /> 6단계 찰떡 쉬운 도해
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white border border-[#F2E4D0] text-[#78614E] font-bold flex items-center gap-1.5 shadow-2xs">
                <Layers className="w-3.5 h-3.5 text-[#C05621] shrink-0" /> 쏙쏙 포개지는 4단 세트
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white border border-[#F2E4D0] text-[#78614E] font-bold flex items-center gap-1.5 shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#486B28] shrink-0" /> 먹을 수 있는 100% 호두오일
              </span>
            </div>

            {/* Action Buttons - Cute Bubbly Style */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2">
              <button
                id="hero-start-guide-btn"
                onClick={onStartGuide}
                className="flex items-center gap-2 bg-[#FF8E72] hover:bg-[#FF7A59] text-white px-5 py-3.5 rounded-full text-xs sm:text-sm font-bold shadow-md transition active:scale-95 cursor-pointer whitespace-nowrap"
              >
                <BookOpen className="w-4 h-4 shrink-0" />
                <span className="font-cute text-sm sm:text-base">1단계부터 바로 만들기 시작!</span>
                <ArrowRight className="w-4 h-4 ml-0.5 shrink-0" />
              </button>

              <button
                id="hero-tools-guide-btn"
                onClick={onExploreTools}
                className="flex items-center gap-2 bg-white hover:bg-[#FFF8EE] text-[#8C5A32] border-2 border-[#FED7AA] px-4 py-3 rounded-full text-xs sm:text-sm font-bold shadow-2xs transition active:scale-95 cursor-pointer whitespace-nowrap"
              >
                <Wrench className="w-4 h-4 text-[#C05621] shrink-0" />
                <span>✂️ 준비물 &amp; 재료 챙기기</span>
              </button>

              <button
                id="hero-calculator-btn"
                onClick={onOpenCalculator}
                className="flex items-center gap-1.5 bg-[#FFF4E6] hover:bg-[#FFE8CC] text-[#9A5B32] border border-[#FBD38D] px-3.5 py-3 rounded-full font-bold text-xs sm:text-sm transition cursor-pointer whitespace-nowrap"
              >
                <Calculator className="w-4 h-4 text-[#C05621] shrink-0" />
                <span>📐 날대 규격 계산기</span>
              </button>

              {onOpenLocation && (
                <button
                  id="hero-location-btn"
                  onClick={onOpenLocation}
                  className="flex items-center gap-1.5 text-[#8C5A32] hover:text-[#5C3B1E] px-3 py-3 font-bold text-xs sm:text-sm transition cursor-pointer whitespace-nowrap"
                >
                  <MapPin className="w-4 h-4 text-[#C05621] shrink-0" />
                  <span>📍 아산 공방 위치 &amp; 구글맵</span>
                </button>
              )}

              <a
                id="hero-youtube-video-btn"
                href="https://youtu.be/fbtLFvUjJdE?si=mL3VQczcEtoc6NQu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-[#FFF0F0] hover:bg-[#FFE5E5] text-[#E50914] border-2 border-[#FFC5C5] px-3.5 py-3 rounded-full text-xs sm:text-sm font-bold shadow-2xs transition active:scale-95 cursor-pointer whitespace-nowrap"
              >
                <span className="w-4 h-4 rounded-full bg-[#E50914] text-white flex items-center justify-center text-[9px] font-bold">▶</span>
                <span>유튜브 제작 영상</span>
              </a>
            </div>

            {/* Cute Key Craft Indicators */}
            <div className="pt-4 grid grid-cols-3 gap-2.5 sm:gap-3 border-t border-[#F2E8DA] text-[#665343]">
              <div className="space-y-0.5 bg-white p-2.5 rounded-2xl border border-[#F5EAD9]">
                <div className="text-xs font-bold text-[#3E291C] flex items-center gap-1 whitespace-nowrap">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#486B28] shrink-0" /> 6단계 쏙쏙 도해
                </div>
                <p className="text-[11px] text-[#9C7A5E] whitespace-nowrap">사진 보고 따라하기</p>
              </div>

              <div className="space-y-0.5 bg-white p-2.5 rounded-2xl border border-[#F5EAD9]">
                <div className="text-xs font-bold text-[#3E291C] flex items-center gap-1 whitespace-nowrap">
                  <Heart className="w-3.5 h-3.5 text-[#FF758F] fill-[#FF758F] shrink-0" /> 약 2시간 힐링
                </div>
                <p className="text-[11px] text-[#9C7A5E] whitespace-nowrap">초보자도 당일 완성</p>
              </div>

              <div className="space-y-0.5 bg-white p-2.5 rounded-2xl border border-[#F5EAD9]">
                <div className="text-xs font-bold text-[#3E291C] flex items-center gap-1 whitespace-nowrap">
                  <Smile className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" /> 4단 쏙 포개짐
                </div>
                <p className="text-[11px] text-[#9C7A5E] whitespace-nowrap">공간 활용 만점</p>
              </div>
            </div>

          </div>

          {/* Right Visual Image Card with Cute Mascots & Real Crafts */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Card with interactive hotspots */}
              <div className="relative rounded-3xl overflow-hidden bg-white border-2 border-[#F5E2CC] shadow-[0_12px_36px_rgba(140,90,50,0.08)] group">
                <div className="aspect-4/3 sm:aspect-1/1 overflow-hidden relative">
                  {/* Real beautiful handcrafted round rattan basket photo */}
                  <img
                    src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80"
                    alt="사진 속 둥근 원형 라탄 보울 바구니 제작과정"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Hotspots indicating the key parts of the basket */}
                  <div className="absolute inset-0 p-4 pointer-events-none">
                    <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/30 flex items-center gap-1.5">
                      <span>🧺 사진 속 바구니 핵심 비밀</span>
                    </span>
                    <a
                      href="https://youtu.be/fbtLFvUjJdE?si=mL3VQczcEtoc6NQu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-4 right-4 bg-[#FF4B4B] hover:bg-[#E03A3A] text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/20 flex items-center gap-1.5 shadow-md transition pointer-events-auto"
                    >
                      <span className="w-3.5 h-3.5 rounded-full bg-white text-[#FF4B4B] flex items-center justify-center text-[8px] font-black">▶</span>
                      <span>제작 영상</span>
                    </a>
                  </div>
                </div>

                {/* Bottom cute interactive explanation box */}
                <div className="p-5 sm:p-6 bg-white text-left space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-cute text-[#C05621] font-bold uppercase tracking-wider bg-[#FFF4E6] px-2.5 py-0.5 rounded-full border border-[#FED7AA]">
                      {craftAnatomyPoints[activeFeaturePoint - 1].emoji} {craftAnatomyPoints[activeFeaturePoint - 1].tag}
                    </span>
                    <div className="flex items-center gap-1">
                      {craftAnatomyPoints.map((pt) => (
                        <button
                          key={pt.id}
                          onClick={() => setActiveFeaturePoint(pt.id)}
                          className={`w-7 h-7 rounded-full text-xs font-bold transition cursor-pointer ${
                            activeFeaturePoint === pt.id
                              ? 'bg-[#FF8E72] text-white shadow-xs scale-105'
                              : 'bg-[#FFF8EE] text-[#78614E] hover:bg-[#FFEEDD] border border-[#F2E4D0]'
                          }`}
                          title={pt.title}
                        >
                          {pt.id}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-cute text-lg font-bold text-[#3E291C] flex items-center gap-1.5">
                      <span>{craftAnatomyPoints[activeFeaturePoint - 1].emoji}</span>
                      <span>{craftAnatomyPoints[activeFeaturePoint - 1].title}</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-[#665343] mt-1.5 leading-relaxed break-keep font-medium">
                      {craftAnatomyPoints[activeFeaturePoint - 1].desc}
                    </p>
                  </div>

                  <div className="pt-2.5 border-t border-[#F5EAD9] flex items-center justify-between text-[11px]">
                    <span className="text-[#9C7A5E]">번호를 누르면 부위별 기법이 쏙쏙 나와요!</span>
                    <button
                      onClick={onStartGuide}
                      className="text-[#C05621] font-bold hover:underline cursor-pointer flex items-center gap-1 font-cute text-xs"
                    >
                      <span>6단계 만들기 보기</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Cute Floating Mascot Card 1: Bunny with Tape */}
              <div className="absolute -bottom-5 -left-3 sm:-left-6 bg-white/95 backdrop-blur-md p-3 rounded-3xl border-2 border-[#FED7AA] shadow-lg text-left hidden sm:flex items-center gap-2.5 z-20">
                <MascotBunny size={46} />
                <div>
                  <div className="font-cute text-sm font-bold text-[#4A3525]">4단 쏙쏙 네스팅! 🥣</div>
                  <div className="text-[10px] text-[#9C7A5E] font-medium">지름 14 • 17 • 21 • 25cm 규격</div>
                </div>
              </div>

              {/* Cute Floating Mascot Card 2: Kitten in Basket */}
              <div className="absolute -top-6 -right-3 sm:-right-6 bg-white/95 backdrop-blur-md p-2.5 rounded-3xl border-2 border-[#FBD38D] shadow-lg text-left hidden sm:flex items-center gap-2 z-20">
                <MascotKitten size={44} />
                <div className="pr-1">
                  <div className="font-cute text-xs text-[#E76F51] font-bold">폭신폭신 그립감 ♥</div>
                  <div className="text-[10px] text-[#8C6B52]">도톰한 롤 테두리 마감</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
