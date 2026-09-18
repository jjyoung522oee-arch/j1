import React from 'react';
import { 
  Sparkles, BookOpen, Calculator, 
  Layers, HelpCircle, Wrench, ArrowRight, MapPin, Heart 
} from 'lucide-react';
import { MascotBear } from './CuteCharacters';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onStartGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onStartGuide,
}) => {
  const navItems = [
    { id: 'guide', label: '🧺 6단계 만들기', icon: BookOpen },
    { id: 'tools', label: '✂️ 준비물 & 도구', icon: Wrench },
    { id: 'calculator', label: '📐 날대 계산기', icon: Calculator },
    { id: 'nesting', label: '🥣 4단 보울 규격', icon: Layers },
    { id: 'location', label: '📍 공방 위치 & 지도', icon: MapPin },
    { id: 'faq', label: '💡 제작 꿀팁 & Q&A', icon: HelpCircle },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FFFDF9]/95 backdrop-blur-md border-b border-[#F2E8DA] transition-colors">
      {/* Top cute pastel micro bar */}
      <div className="bg-[#FFF4E6] border-b border-[#FBE3CC] text-[#8C5A32] text-xs py-1.5 px-4 text-center font-medium">
        <div className="flex items-center justify-center gap-1.5 flex-wrap">
          <span className="inline-flex items-center gap-1 bg-white px-2 py-0.5 rounded-full text-[11px] font-bold text-[#D97706] shadow-2xs border border-[#FED7AA]">
            <Heart className="w-3 h-3 fill-[#F43F5E] text-[#F43F5E]" /> 초보자 환영
          </span>
          <span className="font-cute text-sm text-[#78350F]">손끝으로 조물조물 엮는 포근한 라탄 바구니 교실 🧸</span>
          <span className="hidden sm:inline text-[#B45309] text-[11px]">누구나 따라할 수 있는 단계별 무료 가이드!</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Brand Logo with Cute Mascot */}
          <button
            id="brand-logo-btn"
            onClick={() => {
              setActiveTab('guide');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 sm:gap-3 text-left group transition cursor-pointer shrink-0"
          >
            <div className="relative">
              <MascotBear size={46} className="transform group-hover:rotate-6 transition-transform" />
              <span className="absolute -bottom-1 -right-1 text-[10px] bg-[#FFE8D6] border border-[#F4A261] rounded-full px-1 font-bold text-[#E76F51]">
                ♥
              </span>
            </div>
            <div>
              <div className="font-cute text-xl sm:text-2xl font-bold tracking-normal text-[#4A3525] flex items-center gap-1.5 whitespace-nowrap">
                라탄 만들기
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#FFEEDD] text-[#C05621] font-sans font-bold border border-[#FBD38D] whitespace-nowrap">
                  원데이 홈공방 ✨
                </span>
              </div>
              <p className="text-[11px] text-[#9C7A5E] font-medium whitespace-nowrap">
                동글동글 원형 라탄 바구니 핸드북
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-tab-${item.id}`}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-1.5 px-3 xl:px-3.5 py-2 rounded-full text-xs xl:text-sm transition cursor-pointer whitespace-nowrap shrink-0 active:scale-95 ${
                    isActive
                      ? 'bg-[#8C5A32] text-white shadow-xs font-bold'
                      : 'text-[#665343] hover:text-[#2B1E16] hover:bg-[#FCEFE2] font-semibold'
                  }`}
                >
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="flex items-center gap-2.5">
            <button
              id="nav-quick-start-btn"
              onClick={onStartGuide}
              className="flex items-center gap-1.5 bg-[#FF8E72] hover:bg-[#FF7A59] text-white px-4 py-2 rounded-full text-xs sm:text-sm font-bold shadow-sm transition active:scale-95 cursor-pointer whitespace-nowrap"
            >
              <Sparkles className="w-3.5 h-3.5 fill-white" />
              <span>지금 만들기</span>
              <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
            </button>
          </div>

        </div>

        {/* Mobile Horizontal Tab Navigation */}
        <div className="lg:hidden flex items-center gap-1.5 overflow-x-auto py-2.5 scrollbar-none border-t border-[#F5EAD9]">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`mobile-nav-tab-${item.id}`}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs transition cursor-pointer whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-[#8C5A32] text-white font-bold shadow-2xs'
                    : 'bg-[#FFF8EE] text-[#78614E] border border-[#F2E4D0]'
                }`}
              >
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
