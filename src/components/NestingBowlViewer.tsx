import React, { useState } from 'react';
import { NESTING_SIZES_INFO } from '../data/rattanData';
import { 
  Sparkles, Layers, CheckCircle2, BookOpen, 
  ArrowRight, ShieldCheck, Eye, RefreshCw, Heart 
} from 'lucide-react';
import { MascotKitten } from './CuteCharacters';

interface NestingBowlViewerProps {
  onStartCrafting: () => void;
  onOpenCalculatorWithPreset: (diameter: number, height: number) => void;
}

export const NestingBowlViewer: React.FC<NestingBowlViewerProps> = ({
  onStartCrafting,
  onOpenCalculatorWithPreset,
}) => {
  const [activeTier, setActiveTier] = useState<string>('all'); // 'all' or 'XS', 'S', 'M', 'L'
  const [viewMode, setViewMode] = useState<'stack' | 'unfolded'>('stack');

  const selectedSize = NESTING_SIZES_INFO.find((s) => s.tier === activeTier);

  return (
    <section id="nesting-bowl-showcase" className="py-12 sm:py-16 bg-[#FFFDF9] border-y border-[#F2E8DA] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF4E6] border border-[#FED7AA] text-xs font-bold text-[#C05621] mb-3 whitespace-nowrap">
              <Sparkles className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
              <span>🥣 차곡차곡 포개지는 4단 보울</span>
            </div>
            
            <div className="flex items-center gap-3">
              <MascotKitten size={46} className="hidden sm:block" />
              <h2 className="font-cute text-2xl sm:text-3xl lg:text-4xl font-bold text-[#3E291C] tracking-wide break-keep">
                쏙쏙 포개어지는 4단 네스팅 라탄 보울 🧺
              </h2>
            </div>
            
            <p className="text-sm sm:text-base text-[#665343] mt-2 leading-relaxed break-keep font-medium">
              가방 형태가 아닌, 완만한 사발 곡선과 도톰한 롤 테두리를 지닌 감성 테이블웨어예요.<br className="hidden sm:inline" />
              사용하지 않을 땐 4개가 하나로 쏙 겹쳐져 보관도 깔끔하고, 빵과 과일을 담아두면 카페 분위기가 물씬나요!
            </p>
          </div>

          {/* View mode toggle */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-[#FFF4E6] border border-[#FED7AA] self-start md:self-auto text-xs font-bold">
            <button
              onClick={() => { setViewMode('stack'); setActiveTier('all'); }}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full transition cursor-pointer whitespace-nowrap active:scale-95 ${
                viewMode === 'stack'
                  ? 'bg-[#FF8E72] text-white shadow-2xs font-bold'
                  : 'text-[#8C5A32] hover:text-[#3E291C]'
              }`}
            >
              <Layers className="w-3.5 h-3.5 shrink-0" />
              <span>4단 쏙 중첩 뷰</span>
            </button>
            <button
              onClick={() => { setViewMode('unfolded'); if (activeTier === 'all') setActiveTier('M'); }}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full transition cursor-pointer whitespace-nowrap active:scale-95 ${
                viewMode === 'unfolded'
                  ? 'bg-[#FF8E72] text-white shadow-2xs font-bold'
                  : 'text-[#8C5A32] hover:text-[#3E291C]'
              }`}
            >
              <Eye className="w-3.5 h-3.5 shrink-0" />
              <span>사이즈별 단품 뷰</span>
            </button>
          </div>
        </div>

        {/* Main Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Visual Interactive Canvas (SVG rendering the stacked / nested bowls like in the user's photo!) */}
          <div className="lg:col-span-7">
            <div className="relative bg-white rounded-3xl p-6 sm:p-10 border border-[#EDE5DA] shadow-[0_4px_24px_rgba(0,0,0,0.03)] overflow-hidden">
              
              {/* Subtle top indicator */}
              <div className="flex items-center justify-between text-xs text-[#8C7B6E] mb-4 pb-3 border-b border-[#F5EFE6]">
                <div className="flex items-center gap-1.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#B8875D]" />
                  <span>인도네시아 수마트라 AA등급 천연 환심 직조 모델링</span>
                </div>
                <span className="font-mono text-[11px] text-[#A69282]">
                  {viewMode === 'stack' ? '4-TIER STACKED NESTING' : `INDIVIDUAL TIER: ${activeTier}`}
                </span>
              </div>

              {/* Graphical SVG representation matching the user's exact photo of 4 stacked rattan bowls */}
              <div className="relative w-full aspect-4/3 flex items-center justify-center py-4">
                <svg
                  viewBox="0 0 500 380"
                  className="w-full h-full max-h-[340px] drop-shadow-md select-none transition-all duration-500"
                >
                  <defs>
                    {/* Natural Honey Rattan Texture Gradients */}
                    <linearGradient id="rattanGradientLight" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#DFC39D" />
                      <stop offset="50%" stopColor="#C8A67B" />
                      <stop offset="100%" stopColor="#A88256" />
                    </linearGradient>

                    <linearGradient id="rattanGradientDark" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#C4A175" />
                      <stop offset="100%" stopColor="#8A653C" />
                    </linearGradient>

                    <linearGradient id="rimGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#9C7549" />
                      <stop offset="30%" stopColor="#D9BA90" />
                      <stop offset="70%" stopColor="#C9A372" />
                      <stop offset="100%" stopColor="#875E33" />
                    </linearGradient>

                    {/* Weave Pattern Filter */}
                    <pattern id="basketWeavePat" width="8" height="6" patternUnits="userSpaceOnUse">
                      <line x1="0" y1="3" x2="8" y2="3" stroke="#8A643A" strokeWidth="1.2" strokeOpacity="0.6" />
                      <line x1="4" y1="0" x2="4" y2="6" stroke="#FAF3EA" strokeWidth="0.8" strokeOpacity="0.5" />
                      <line x1="0" y1="0" x2="8" y2="6" stroke="#684724" strokeWidth="0.6" strokeOpacity="0.3" />
                    </pattern>
                  </defs>

                  {/* Soft Table Surface Shadow */}
                  <ellipse cx="250" cy="340" rx="160" ry="24" fill="#000000" fillOpacity="0.06" filter="blur(6px)" />
                  <ellipse cx="250" cy="335" rx="110" ry="14" fill="#604020" fillOpacity="0.12" filter="blur(4px)" />

                  {viewMode === 'stack' ? (
                    /* The 4 Nested Bowls stacked identically to the user's photo */
                    <g className="transition-all duration-700">
                      {/* 1. Bottom Largest Bowl (L: 25cm) */}
                      <g 
                        className="cursor-pointer group"
                        onClick={() => { setViewMode('unfolded'); setActiveTier('L'); }}
                      >
                        {/* Outer bowl body */}
                        <path
                          d="M 100 240 Q 95 325 180 330 L 320 330 Q 405 325 400 240 Z"
                          fill="url(#rattanGradientDark)"
                        />
                        <path
                          d="M 100 240 Q 95 325 180 330 L 320 330 Q 405 325 400 240 Z"
                          fill="url(#basketWeavePat)"
                        />
                        {/* Characteristic curved woven ribs on bowl exterior */}
                        {[...Array(14)].map((_, i) => (
                          <path
                            key={`rib-l-${i}`}
                            d={`M ${110 + i * 20} 242 Q ${130 + i * 17} 300 ${185 + i * 9} 328`}
                            stroke="#5C3F1E"
                            strokeWidth="1.5"
                            strokeOpacity="0.4"
                            fill="none"
                          />
                        ))}
                        {/* Rolled Cord Rim */}
                        <ellipse cx="250" cy="240" rx="150" ry="26" fill="url(#rimGradient)" stroke="#6E4C24" strokeWidth="2.5" />
                        <ellipse cx="250" cy="240" rx="146" ry="22" fill="#583B1A" fillOpacity="0.5" />
                      </g>

                      {/* 2. Middle Bowl (M: 21cm - The main one in the photo) */}
                      <g 
                        className="cursor-pointer group"
                        onClick={() => { setViewMode('unfolded'); setActiveTier('M'); }}
                      >
                        <path
                          d="M 120 185 Q 115 265 190 270 L 310 270 Q 385 265 380 185 Z"
                          fill="url(#rattanGradientLight)"
                        />
                        <path
                          d="M 120 185 Q 115 265 190 270 L 310 270 Q 385 265 380 185 Z"
                          fill="url(#basketWeavePat)"
                        />
                        {[...Array(12)].map((_, i) => (
                          <path
                            key={`rib-m-${i}`}
                            d={`M ${130 + i * 20} 187 Q ${150 + i * 16} 240 ${195 + i * 9} 268`}
                            stroke="#684620"
                            strokeWidth="1.5"
                            strokeOpacity="0.45"
                            fill="none"
                          />
                        ))}
                        {/* Rolled Cord Rim */}
                        <ellipse cx="250" cy="185" rx="130" ry="24" fill="url(#rimGradient)" stroke="#6E4C24" strokeWidth="2.5" />
                        <ellipse cx="250" cy="185" rx="126" ry="20" fill="#583B1A" fillOpacity="0.5" />
                      </g>

                      {/* 3. Small Bowl (S: 17cm) */}
                      <g 
                        className="cursor-pointer group"
                        onClick={() => { setViewMode('unfolded'); setActiveTier('S'); }}
                      >
                        <path
                          d="M 140 135 Q 138 210 200 215 L 300 215 Q 362 210 360 135 Z"
                          fill="url(#rattanGradientDark)"
                        />
                        <path
                          d="M 140 135 Q 138 210 200 215 L 300 215 Q 362 210 360 135 Z"
                          fill="url(#basketWeavePat)"
                        />
                        {[...Array(10)].map((_, i) => (
                          <path
                            key={`rib-s-${i}`}
                            d={`M ${150 + i * 20} 137 Q ${170 + i * 15} 185 ${205 + i * 9} 213`}
                            stroke="#523516"
                            strokeWidth="1.4"
                            strokeOpacity="0.4"
                            fill="none"
                          />
                        ))}
                        {/* Rolled Cord Rim */}
                        <ellipse cx="250" cy="135" rx="110" ry="21" fill="url(#rimGradient)" stroke="#6E4C24" strokeWidth="2.5" />
                        <ellipse cx="250" cy="135" rx="106" ry="17" fill="#472C12" fillOpacity="0.5" />
                      </g>

                      {/* 4. Top Bowl (XS: 14cm) - clearly visible inside! */}
                      <g 
                        className="cursor-pointer group"
                        onClick={() => { setViewMode('unfolded'); setActiveTier('XS'); }}
                      >
                        <path
                          d="M 160 85 Q 158 155 210 160 L 290 160 Q 342 155 340 85 Z"
                          fill="url(#rattanGradientLight)"
                        />
                        <path
                          d="M 160 85 Q 158 155 210 160 L 290 160 Q 342 155 340 85 Z"
                          fill="url(#basketWeavePat)"
                        />
                        {/* Inner Woven Bowl Floor visible inside the top bowl */}
                        <ellipse cx="250" cy="85" rx="90" ry="20" fill="#996E40" />
                        <ellipse cx="250" cy="85" rx="90" ry="20" fill="url(#basketWeavePat)" />
                        
                        {/* Concentric spiral center weave */}
                        <circle cx="250" cy="85" r="18" fill="#583A19" fillOpacity="0.4" />
                        <circle cx="250" cy="85" r="9" fill="#3D250E" fillOpacity="0.6" />
                        <circle cx="250" cy="85" r="3" fill="#E8D1B0" />

                        {/* Top Bowl Rolled Rim */}
                        <ellipse cx="250" cy="85" rx="90" ry="19" fill="none" stroke="url(#rimGradient)" strokeWidth="5" />
                        <ellipse cx="250" cy="85" rx="90" ry="19" fill="none" stroke="#523516" strokeWidth="1" strokeDasharray="3 2" />
                      </g>
                    </g>
                  ) : (
                    /* Single Selected Bowl View */
                    <g className="transition-all duration-700">
                      <path
                        d="M 110 140 Q 105 285 200 295 L 300 295 Q 395 285 390 140 Z"
                        fill="url(#rattanGradientLight)"
                      />
                      <path
                        d="M 110 140 Q 105 285 200 295 L 300 295 Q 395 285 390 140 Z"
                        fill="url(#basketWeavePat)"
                      />
                      {/* Ribs */}
                      {[...Array(14)].map((_, i) => (
                        <path
                          key={`single-rib-${i}`}
                          d={`M ${125 + i * 18} 142 Q ${155 + i * 14} 240 ${205 + i * 7} 293`}
                          stroke="#664420"
                          strokeWidth="1.8"
                          strokeOpacity="0.5"
                          fill="none"
                        />
                      ))}
                      {/* Inside base */}
                      <ellipse cx="250" cy="140" rx="140" ry="32" fill="#8C653C" />
                      <ellipse cx="250" cy="140" rx="140" ry="32" fill="url(#basketWeavePat)" />
                      <circle cx="250" cy="140" r="28" fill="#5A3E20" fillOpacity="0.4" />
                      <circle cx="250" cy="140" r="14" fill="#3B2612" fillOpacity="0.6" />
                      {/* Rolled Cord Rim */}
                      <ellipse cx="250" cy="140" rx="140" ry="32" fill="none" stroke="url(#rimGradient)" strokeWidth="7" />
                      <ellipse cx="250" cy="140" rx="140" ry="32" fill="none" stroke="#4F3316" strokeWidth="1.5" strokeDasharray="4 2" />
                    </g>
                  )}
                </svg>

                {/* Floating highlight tag */}
                <div className="absolute bottom-3 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#E8DFD3] text-[11px] text-[#5C4F44] shadow-xs">
                  ✨ <strong>사진 상품 동일 규격:</strong> 4단 중첩 롤 테두리 보울
                </div>
              </div>

              {/* Tier Quick Select Pills */}
              <div className="mt-4 pt-4 border-t border-[#F5EFE6] flex items-center justify-between flex-wrap gap-2">
                <span className="text-xs text-[#8C7B6E] font-medium">크기별 스펙 선택:</span>
                <div className="flex gap-1.5 flex-wrap">
                  <button
                    onClick={() => { setViewMode('stack'); setActiveTier('all'); }}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium transition cursor-pointer ${
                      activeTier === 'all' && viewMode === 'stack'
                        ? 'bg-[#8C5A32] text-white shadow-xs'
                        : 'bg-[#F7F3ED] text-[#665B52] hover:bg-[#EDE5DA]'
                    }`}
                  >
                    4단 전체 세트
                  </button>
                  {NESTING_SIZES_INFO.map((item) => (
                    <button
                      key={item.tier}
                      onClick={() => { setViewMode('unfolded'); setActiveTier(item.tier); }}
                      className={`px-2.5 py-1 rounded-lg text-xs font-medium transition cursor-pointer ${
                        activeTier === item.tier && viewMode === 'unfolded'
                          ? 'bg-[#8C5A32] text-white shadow-xs'
                          : 'bg-[#F7F3ED] text-[#665B52] hover:bg-[#EDE5DA]'
                      }`}
                    >
                      {item.tier} ({item.diameter}cm)
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right Information & Action Panel */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 text-xs text-[#8C5A32] font-semibold tracking-wide uppercase">
                <ShieldCheck className="w-4 h-4 text-[#7A8B63]" />
                <span>100% 핸드메이드 • 친환경 식기 안전 코팅</span>
              </div>
              
              <h3 className="font-serif-kr text-xl sm:text-2xl font-bold text-[#1F1A17]">
                {activeTier === 'all'
                  ? '사진 속 4단 네스팅 라탄 볼 풀 마스터 컬렉션'
                  : `${selectedSize?.name} (${selectedSize?.diameter}cm)`}
              </h3>

              <p className="text-xs sm:text-sm text-[#665B52] leading-relaxed">
                {activeTier === 'all'
                  ? '소형(14cm)부터 대형(25cm)까지 4개의 라탄 볼이 마치 하나의 바구니처럼 쏙 겹쳐지는 네스팅 구조입니다. 갓 구운 브런치 빵, 과일, 견과류, 다과 플레이팅에 완벽한 온기를 더해줍니다.'
                  : `${selectedSize?.useCase}. 적재적소에 알맞은 용량(${selectedSize?.capacity})으로 일상의 테이블을 정돈해 줍니다.`}
              </p>
            </div>

            {/* Spec Highlights Table */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#EAE2D7] shadow-2xs space-y-2.5 text-xs">
              <div className="flex justify-between py-1 border-b border-[#F5EFE6]">
                <span className="text-[#8C7B6E]">상단 입구 지름</span>
                <span className="font-bold text-[#1F1A17] font-mono">
                  {activeTier === 'all' ? '14cm ~ 25cm (4단계)' : `${selectedSize?.diameter}cm`}
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#F5EFE6]">
                <span className="text-[#8C7B6E]">바닥 지름</span>
                <span className="font-bold text-[#1F1A17] font-mono">
                  {activeTier === 'all' ? '9cm ~ 16cm' : `${selectedSize?.baseDiameter}cm`}
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#F5EFE6]">
                <span className="text-[#8C7B6E]">보울 깊이(높이)</span>
                <span className="font-bold text-[#1F1A17] font-mono">
                  {activeTier === 'all' ? '4.5cm ~ 8.0cm' : `${selectedSize?.height}cm`}
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#F5EFE6]">
                <span className="text-[#8C7B6E]">테두리 마감 기법</span>
                <span className="font-semibold text-[#8C5A32]">
                  도톰한 롤 테두리 말아마무르기 (Coiled Rim)
                </span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#8C7B6E]">표면 마감재</span>
                <span className="font-semibold text-[#1F1A17]">
                  100% 천연 냉압착 호두오일 (식기 접촉 안전)
                </span>
              </div>
            </div>

            {/* CTA action buttons */}
            <div className="space-y-2.5 pt-2">
              <button
                id="nesting-start-guide-btn"
                onClick={onStartCrafting}
                className="w-full flex items-center justify-center gap-2 bg-[#26201B] hover:bg-[#3D332A] text-white py-3.5 px-6 rounded-xl font-medium text-xs sm:text-sm transition cursor-pointer shadow-sm active:scale-99"
              >
                <BookOpen className="w-4 h-4 text-[#D8C4B0]" />
                <span>
                  {activeTier === 'all'
                    ? '사진 속 4단 네스팅 보울 6단계 제작 시작하기'
                    : `${selectedSize?.tier}사이즈(${selectedSize?.diameter}cm) 제작 가이드로 이동`}
                </span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <button
                id="nesting-open-calc-btn"
                onClick={() => {
                  const d = selectedSize ? selectedSize.diameter : 21;
                  const h = selectedSize ? selectedSize.height : 6.5;
                  onOpenCalculatorWithPreset(d, h);
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#F7F3ED] hover:bg-[#EFE7DC] text-[#665B52] py-3 px-6 rounded-xl font-medium text-xs transition cursor-pointer border border-[#E5DCD1]"
              >
                <RefreshCw className="w-3.5 h-3.5 text-[#8C5A32]" />
                <span>선택 치수({selectedSize ? `${selectedSize.diameter}cm` : '21cm'}) 날대·사릿대 자동 계산하기</span>
              </button>
            </div>

            {/* Micro reassurance */}
            <div className="flex items-center gap-4 text-[11px] text-[#8C7B6E] pt-1">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#7A8B63]" /> 4개 완벽 포개짐 검증 완료
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#7A8B63]" /> 100% 식기용 친환경 마감
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
