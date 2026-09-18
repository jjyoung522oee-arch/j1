import React, { useState } from 'react';
import { 
  Scissors, Wrench, Droplets, Sparkles, CheckCircle2, 
  HelpCircle, ShieldCheck, Clock, Layers, ArrowRight, BookOpen, Heart
} from 'lucide-react';
import { MascotBunny } from './CuteCharacters';

interface ToolsAndMaterialsGuideProps {
  onStartGuide: () => void;
  onOpenCalculator: () => void;
}

export const ToolsAndMaterialsGuide: React.FC<ToolsAndMaterialsGuideProps> = ({
  onStartGuide,
  onOpenCalculator,
}) => {
  const [selectedMaterialTab, setSelectedMaterialTab] = useState<'cane' | 'tools' | 'oil'>('cane');

  const toolsList = [
    {
      name: '라탄 전정가위 (사선 커팅 가위)',
      role: '날대 및 사릿대 정밀 재단',
      desc: '굵은 2.0mm 환심을 단번에 깔끔하게 절단합니다. 환심 끝을 45도 사선으로 자르면 마지막 테두리 마무르기 시 좁은 틈새로 부드럽게 찔러 넣을 수 있습니다.',
      keyTip: '무딘 일반 문구용 가위는 환심 끝을 으스러뜨리므로 전용 원예/전정가위 사용 권장',
      badge: '필수 1순위',
      icon: Scissors
    },
    {
      name: '고탄성 스테인리스 송곳',
      role: '틈새 길 내기 & 날대 매듭 정리',
      desc: '바닥 십자 교차부를 정렬하고, 촘촘하게 엮인 사릿대 사이로 공간을 벌려 새로운 사릿대를 끼우거나 마지막 테두리 날대를 숨겨 넣을 때 사용합니다.',
      keyTip: '날대 사이를 벌릴 때 줄기가 찢어지지 않도록 송곳을 비틀지 말고 수직으로 지그시 밀어 넣으세요.',
      badge: '필수 1순위',
      icon: Wrench
    },
    {
      name: '미세 안개 분무기 (100~200ml)',
      role: '작업 중 수시 수분 보충',
      desc: '라탄은 공기 중에 노출되면 5~10분 만에 표면이 말라 뻣뻣해집니다. 엮는 도중 날대와 사릿대에 촉촉하게 분무해 부러짐을 원천 방지합니다.',
      keyTip: '미온수를 담아 5코마다 한 번씩 가볍게 안개 분사해 주면 가죽처럼 부드러운 텐션이 유지됩니다.',
      badge: '필수 1순위',
      icon: Droplets
    },
    {
      name: '유연한 소프트 줄자 (1.5m)',
      role: '직경, 높이, 둘레 수평 측정',
      desc: '원형 바닥 직경(13cm)과 보울 벽면 높이(6.5cm)가 사방에서 고른지 측정합니다. 한쪽으로 기울어지지 않은 완벽한 대칭 사발을 만드는 필수 도구입니다.',
      keyTip: '360도 둘레 4곳의 높이를 번갈아 재며 엮어야 수평이 비뚤어지지 않습니다.',
      badge: '정밀도 유지',
      icon: Layers
    },
    {
      name: '순면 린넨 타월 (수포 타월)',
      role: '불린 환심 수분 균일 보관',
      desc: '물에 10분간 불려 건져낸 환심을 젖은 타월로 감싸두면, 수분이 속심까지 골고루 스며들어 마지막 코까지 유연하게 작업할 수 있습니다.',
      keyTip: '물기를 꽉 짠 젖은 수건 사이에 환심을 김밥처럼 말아두고 한 줄씩 꺼내 쓰세요.',
      badge: '노하우 비결',
      icon: ShieldCheck
    },
  ];

  return (
    <section id="tools-materials-guide" className="py-12 sm:py-16 bg-[#F4F9FD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with MascotBunny */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-xs font-bold text-[#0284C7] mb-3 shadow-2xs whitespace-nowrap">
            <Wrench className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
            <span>✂️ 알기 쉬운 라탄 공예 재료 준비</span>
          </div>
          
          <div className="flex items-center justify-center gap-3">
            <MascotBunny size={48} className="hidden sm:block" />
            <h2 className="font-cute text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F243E] tracking-wide break-keep">
              뚝딱 시작하는 보울 제작 도구 &amp; 환심 가이드 🐰
            </h2>
          </div>

          <p className="text-xs sm:text-base text-[#475569] mt-2.5 leading-relaxed break-keep font-medium">
            동글동글 예쁜 보울을 만들기 위한 2.0mm 천연 환심, 손에 착 감기는 5가지 필수 도구, 오래 쓰는 식기용 오일링 꿀팁을 확인해 보세요!
          </p>
        </div>

        {/* Tab Navigation for Materials vs Tools vs Oil */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-full bg-[#EFF6FF] border-2 border-[#BFDBFE] gap-1.5 shadow-2xs">
            <button
              onClick={() => setSelectedMaterialTab('cane')}
              className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition cursor-pointer whitespace-nowrap active:scale-95 ${
                selectedMaterialTab === 'cane'
                  ? 'bg-[#0284C7] text-white shadow-2xs'
                  : 'text-[#0369A1] hover:text-[#0F243E]'
              }`}
            >
              🌿 천연 환심 규격 &amp; 불림법
            </button>
            <button
              onClick={() => setSelectedMaterialTab('tools')}
              className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition cursor-pointer whitespace-nowrap active:scale-95 ${
                selectedMaterialTab === 'tools'
                  ? 'bg-[#0284C7] text-white shadow-2xs'
                  : 'text-[#0369A1] hover:text-[#0F243E]'
              }`}
            >
              ✂️ 5대 필수 제작 도구
            </button>
            <button
              onClick={() => setSelectedMaterialTab('oil')}
              className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition cursor-pointer whitespace-nowrap active:scale-95 ${
                selectedMaterialTab === 'oil'
                  ? 'bg-[#0284C7] text-white shadow-2xs'
                  : 'text-[#0369A1] hover:text-[#0F243E]'
              }`}
            >
              🥥 천연 오일링 마감법
            </button>
          </div>
        </div>

        {/* Tab 1: Cane & Sizing Specs */}
        {selectedMaterialTab === 'cane' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
              
              {/* Left Column: Cane Explanations */}
              <div className="lg:col-span-7 space-y-6">
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E2E8F0] shadow-2xs space-y-5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#0284C7] uppercase tracking-wider">
                    <Sparkles className="w-4 h-4 text-[#38BDF8]" />
                    <span>핵심 소재 지식</span>
                  </div>
                  <h3 className="font-cute text-xl sm:text-2xl font-bold text-[#0F243E] break-keep">
                    사진 속 둥근 보울에 2.0mm 환심을 사용하는 이유
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed break-keep">
                    라탄(등나무, Rattan)은 열대 우림 야자과 덩굴성 식물의 줄기입니다. 겉껍질을 벗겨 둥근 국수 가락 형태로 일정하게 뽑아낸 것을 <strong>'환심(Round Reed)'</strong>이라고 부릅니다.
                  </p>
                  
                  <div className="space-y-3 pt-2">
                    <div className="p-4 rounded-2xl bg-[#F0F9FF] border border-[#BAE6FD] space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs sm:text-sm text-[#0F243E]">2.0mm 환심 (사진 속 규격 • 강력 추천)</span>
                        <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#E0F2FE] text-[#0369A1] font-bold border border-[#BAE6FD]">보울 최적</span>
                      </div>
                      <p className="text-xs text-[#475569] leading-relaxed break-keep">
                        손가락에 부담을 주지 않으면서도 부드러운 사발 곡선을 유연하게 빚을 수 있습니다. 사진 속 도톰한 롤 테두리를 말아 넣을 때 부러지지 않는 최상의 탄성을 제공합니다.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white border border-[#E2E8F0] space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs sm:text-sm text-[#0F243E]">2.5mm 환심 (대형 보울 날대용)</span>
                        <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#F1F5F9] text-[#475569] font-bold border border-[#CBD5E1]">L사이즈 뼈대</span>
                      </div>
                      <p className="text-xs text-[#64748B] leading-relaxed break-keep">
                        지름 25cm 이상의 큰 과일 바구니를 짤 때 뼈대(날대)가 무너지지 않도록 지탱하는 용도로 좋습니다. 사릿대로는 다소 억셀 수 있습니다.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white border border-[#E2E8F0] space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs sm:text-sm text-[#0F243E]">1.5mm 환심 (미니 소품용)</span>
                        <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-semibold border border-slate-200">코스터용</span>
                      </div>
                      <p className="text-xs text-[#64748B] leading-relaxed break-keep">
                        아주 얇아서 티코스터나 작은 종지형 트레이를 만들 때 섬세한 표현이 가능하지만, 보울의 든든한 형태를 잡기에는 힘이 다소 약합니다.
                      </p>
                    </div>
                  </div>

                  {/* Cane Quality criteria */}
                  <div className="pt-4 border-t border-[#E2E8F0] space-y-2">
                    <h4 className="text-xs font-bold text-[#0F243E]">좋은 환심(AA등급)을 고르는 3가지 기준</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-[#475569]">
                      <div className="p-2.5 rounded-xl bg-[#F8FAFD] border border-[#E2E8F0]">
                        <span className="font-bold text-[#0284C7] block mb-0.5">① 색상 균일성</span>
                        <span>얼룩이나 검은 반점 없이 밝고 따뜻한 미색(아이보리)</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#F8FAFD] border border-[#E2E8F0]">
                        <span className="font-bold text-[#0284C7] block mb-0.5">② 매끄러운 표면</span>
                        <span>손으로 쓸었을 때 잔가시(거스러미)가 적고 매끈한 질감</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#F8FAFD] border border-[#E2E8F0]">
                        <span className="font-bold text-[#0284C7] block mb-0.5">③ 꺾임 복원력</span>
                        <span>물에 불린 후 180도 꺾어도 뚝 끊어지지 않고 휘어지는 탄성</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Right Column: Exact Material Recipe for 1 Bowl */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-white p-6 sm:p-7 rounded-3xl border border-[#E2E8F0] shadow-2xs">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-cute text-base sm:text-lg font-bold text-[#0F243E]">
                      보울 1개 완성에 필요한 환심 정량표
                    </h4>
                    <span className="text-[11px] font-mono text-[#0284C7] font-semibold bg-[#E0F2FE] px-2 py-0.5 rounded-full border border-[#BAE6FD]">
                      지름 21cm 기준
                    </span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-[#F8FAFD] border border-[#E2E8F0]">
                      <div>
                        <strong className="text-[#0F243E] block">기본 십자 날대 (Warp Spokes)</strong>
                        <span className="text-[#64748B]">바닥 십자 교차 및 뼈대 형성</span>
                      </div>
                      <span className="font-mono font-bold text-[#0284C7] text-sm">65cm × 12줄</span>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-xl bg-[#F8FAFD] border border-[#E2E8F0]">
                      <div>
                        <strong className="text-[#0F243E] block">보강 덧날대 (Inserted Stakes)</strong>
                        <span className="text-[#64748B]">바닥에서 벽면으로 넘어갈 때 보강</span>
                      </div>
                      <span className="font-mono font-bold text-[#0284C7] text-sm">15cm × 24줄</span>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-xl bg-[#F8FAFD] border border-[#E2E8F0]">
                      <div>
                        <strong className="text-[#0F243E] block">엮는 사릿대 (Weft Weavers)</strong>
                        <span className="text-[#64748B]">바닥 회전 및 벽면 상하 막엮기</span>
                      </div>
                      <span className="font-mono font-bold text-[#0284C7] text-sm">약 70~80g (긴 줄 4~5개)</span>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-xl bg-[#F8FAFD] border border-[#E2E8F0]">
                      <div>
                        <strong className="text-[#0F243E] block">테두리 마무르기 여유분</strong>
                        <span className="text-[#64748B]">도톰한 롤 테두리를 말아 넣을 길이</span>
                      </div>
                      <span className="font-mono font-bold text-[#059669] text-sm">최소 13~15cm 남김</span>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                    <span className="text-xs text-[#64748B]">원하는 다른 크기의 날대 계산이 필요한가요?</span>
                    <button
                      onClick={onOpenCalculator}
                      className="text-xs font-bold text-[#0284C7] hover:text-[#0369A1] flex items-center gap-1 cursor-pointer whitespace-nowrap"
                    >
                      <span>계산기 열기</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Direct Action Card */}
                <div className="bg-gradient-to-br from-[#0F243E] to-[#1E3A8A] text-white p-6 rounded-3xl space-y-3 text-left shadow-sm">
                  <span className="text-[11px] font-mono tracking-wider text-[#93C5FD] uppercase">Ready to weave</span>
                  <h4 className="font-cute text-base sm:text-lg font-bold text-white">
                    재료 준비가 끝났다면 이제 엮기 시작해볼까요?
                  </h4>
                  <p className="text-xs text-[#BFDBFE] leading-relaxed break-keep">
                    1단계 환심 물 불림부터 시작하여 십자 바닥짜기, 완만 곡선 세우기까지 차근차근 따라 해보세요.
                  </p>
                  <button
                    onClick={onStartGuide}
                    className="w-full py-3 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold text-xs sm:text-sm transition cursor-pointer flex items-center justify-center gap-2 mt-2 shadow-xs"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>1단계 제작과정 가이드로 이동</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Tab 2: 5 Essential Tools */}
        {selectedMaterialTab === 'tools' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
              {toolsList.map((tool, idx) => {
                const IconComponent = tool.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white p-6 rounded-3xl border border-[#E2E8F0] shadow-2xs hover:border-[#93C5FD] transition space-y-4 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-2xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#0284C7]">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#E0F2FE] text-[#0284C7] font-bold border border-[#BAE6FD]">
                          {tool.badge}
                        </span>
                      </div>
                      
                      <div>
                        <h4 className="font-cute text-base font-bold text-[#0F243E]">
                          {tool.name}
                        </h4>
                        <div className="text-xs text-[#0284C7] font-semibold mt-0.5">
                          {tool.role}
                        </div>
                      </div>

                      <p className="text-xs text-[#475569] leading-relaxed break-keep">
                        {tool.desc}
                      </p>
                    </div>

                    <div className="p-3 rounded-2xl bg-[#F8FAFD] border border-[#E2E8F0] text-[11px] text-[#334155]">
                      <strong className="text-[#0284C7] block mb-0.5">실전 팁:</strong>
                      <span className="break-keep">{tool.keyTip}</span>
                    </div>
                  </div>
                );
              })}

              {/* Bonus 6th card: Safe working space */}
              <div className="bg-[#EFF6FF] p-6 rounded-3xl border border-[#BFDBFE] space-y-4 flex flex-col justify-between text-left">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-2xl bg-white border border-[#BFDBFE] flex items-center justify-center text-[#0284C7]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-cute text-base font-bold text-[#0F243E]">
                      작업 환경 세팅 노하우
                    </h4>
                    <div className="text-xs text-[#0284C7] font-semibold mt-0.5">
                      편안하고 안전한 공예 공간
                    </div>
                  </div>
                  <p className="text-xs text-[#475569] leading-relaxed break-keep">
                    물기가 떨어져도 괜찮은 방수 매트나 닦기 쉬운 테이블 위에서 작업하세요. 바닥을 짤 때는 손바닥으로 위에서 아래로 체중을 실어 누를 수 있는 안정적인 높이의 의자가 좋습니다.
                  </p>
                </div>
                <div className="text-[11px] text-[#0284C7] flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" />
                  <span>환기가 잘되는 밝은 자연광 아래 권장</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Food-safe Walnut Oil Finishing */}
        {selectedMaterialTab === 'oil' && (
          <div className="bg-white p-6 sm:p-10 rounded-3xl border border-[#E2E8F0] shadow-2xs text-left max-w-4xl mx-auto space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E2E8F0] pb-6">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0284C7] bg-[#E0F2FE] px-2.5 py-0.5 rounded-full border border-[#BAE6FD]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#059669]" />
                  100% 식기용 푸드 그레이드 마감
                </div>
                <h3 className="font-cute text-2xl font-bold text-[#0F243E]">
                  따스하고 은은한 골든 피니시의 비밀: 냉압착 천연 호두오일
                </h3>
              </div>
              <span className="text-xs font-mono text-[#0284C7] bg-[#EFF6FF] px-3 py-1 rounded-xl border border-[#BFDBFE] shrink-0 font-medium">
                Walnut Oil Finishing
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4">
                <h4 className="font-cute text-base font-bold text-[#0F243E]">
                  왜 식용유나 올리브유 대신 '호두오일'을 써야 할까요?
                </h4>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed break-keep">
                  기름에는 공기 중에서 산소와 반응해 굳는 <strong>'건성유(Drying Oil)'</strong>와 굳지 않는 <strong>'불건성유(Non-drying Oil)'</strong>가 있습니다.
                </p>
                <div className="space-y-2 text-xs">
                  <div className="p-3 rounded-2xl bg-[#FEF2F2] border border-[#FECACA] text-[#991B1B] space-y-1">
                    <strong className="block">❌ 올리브유, 카놀라유, 콩기름 (절대 금지)</strong>
                    <p className="text-[11px] leading-relaxed break-keep">
                      시간이 지나도 마르지 않고 끈적거리며, 공기와 닿아 썩는 '산패'가 일어나 며칠 뒤 심한 쩐내와 곰팡이를 유발합니다.
                    </p>
                  </div>
                  <div className="p-3 rounded-2xl bg-[#F0FDF4] border border-[#BBF7D0] text-[#166534] space-y-1">
                    <strong className="block">✅ 100% 천연 냉압착 호두오일 (강력 추천)</strong>
                    <p className="text-[11px] leading-relaxed break-keep">
                      천연 건성유로서 등나무 섬유 속으로 깊숙이 침투한 뒤 단단하고 투명한 천연 코팅막을 형성합니다. 끈적임 없이 보송하며 향긋하고 안전합니다.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-cute text-base font-bold text-[#0F243E]">
                  호두오일링 3단계 바르는 순서
                </h4>
                <div className="space-y-3 text-xs text-[#475569]">
                  <div className="flex items-start gap-3 p-3 rounded-2xl bg-[#F8FAFD] border border-[#E2E8F0]">
                    <span className="w-5 h-5 rounded-full bg-[#0284C7] text-white font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                      1
                    </span>
                    <div>
                      <strong className="text-[#0F243E] block">바구니 완전 건조 (12시간)</strong>
                      <span className="text-[11px] break-keep">수분이 남아있으면 오일이 겉돌므로 통풍 그늘에서 바짝 말립니다.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-2xl bg-[#F8FAFD] border border-[#E2E8F0]">
                    <span className="w-5 h-5 rounded-full bg-[#0284C7] text-white font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                      2
                    </span>
                    <div>
                      <strong className="text-[#0F243E] block">면 헝겊으로 결 따라 도포</strong>
                      <span className="text-[11px] break-keep">부드러운 면 천에 오일을 5~6방울 떨어뜨려 보울 안팎 결을 따라 꼼꼼히 문질러 먹입니다.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-2xl bg-[#F8FAFD] border border-[#E2E8F0]">
                    <span className="w-5 h-5 rounded-full bg-[#0284C7] text-white font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                      3
                    </span>
                    <div>
                      <strong className="text-[#0F243E] block">30분 후 마른 천으로 버핑</strong>
                      <span className="text-[11px] break-keep">겉면에 남은 잉여 오일을 깨끗한 마른 천으로 닦아내면 매끄럽고 윤기나는 코팅이 완성됩니다.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
