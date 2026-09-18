import React, { useState } from 'react';
import { ExternalLink, Play, X, Sparkles, Film, ArrowUpRight, Heart } from 'lucide-react';

interface TopVideoSectionProps {
  onStartGuide?: () => void;
}

export const TopVideoSection: React.FC<TopVideoSectionProps> = ({ onStartGuide }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const videoUrl = 'https://youtu.be/fbtLFvUjJdE?si=mL3VQczcEtoc6NQu';
  const embedUrl = 'https://www.youtube.com/embed/fbtLFvUjJdE?autoplay=1&rel=0';

  return (
    <div className="bg-[#0F172A] text-white border-b border-[#1E293B] relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5">
        
        {/* Banner Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-3 text-left">
          
          {/* Left: Video Info & YouTube Link */}
          <div className="flex items-center gap-3 w-full lg:w-auto">
            {/* Red YouTube style Play Icon with cute bounce */}
            <div className="w-10 h-10 rounded-2xl bg-[#EF4444] text-white flex items-center justify-center shrink-0 shadow-md transform hover:rotate-6 transition-transform">
              <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-white ml-0.5" />
            </div>

            <div className="space-y-0.5 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="bg-[#1E3A8A] text-[#93C5FD] text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide border border-[#3B82F6] inline-flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5 text-[#38BDF8]" />
                  <span>추천 꿀잼 유튜브 영상</span>
                </span>
                <span className="text-[11px] sm:text-xs text-[#94A3B8] hidden sm:inline">
                  초보자도 뚝딱 따라하는 라탄 바구니 만들기
                </span>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-cute text-sm sm:text-base font-bold text-[#F8FAFC] truncate tracking-wide">
                  🧺 손끝으로 엮는 라탄 바구니 실전 제작 유튜브
                </h3>
                <a
                  href={videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-[#38BDF8] hover:text-[#7DD3FC] underline underline-offset-2 flex items-center gap-1 font-mono transition"
                >
                  <span className="truncate max-w-[180px] sm:max-w-none">youtu.be/fbtLFvUjJdE</span>
                  <ExternalLink className="w-3 h-3 shrink-0" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Actions (Watch in modal/inline & Open in YouTube) */}
          <div className="flex items-center gap-2 sm:gap-2.5 w-full lg:w-auto justify-end shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-[#1E293B]">
            <button
              id="top-video-play-toggle-btn"
              onClick={() => setIsPlaying(!isPlaying)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition cursor-pointer active:scale-95 ${
                isPlaying 
                  ? 'bg-[#1E293B] text-[#F8FAFC] hover:bg-[#334155]' 
                  : 'bg-[#0284C7] text-white hover:bg-[#0369A1] shadow-xs'
              }`}
            >
              {isPlaying ? (
                <>
                  <X className="w-3.5 h-3.5" />
                  <span>영상 닫기</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>홈에서 바로 보기 ✨</span>
                </>
              )}
            </button>

            <a
              id="top-video-youtube-link-btn"
              href={videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#EF4444] hover:bg-[#DC2626] text-white text-xs font-bold shadow-xs transition active:scale-95 cursor-pointer whitespace-nowrap"
            >
              <Film className="w-3.5 h-3.5" />
              <span>YouTube로 열기</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Expandable Embedded Video Player */}
        {isPlaying && (
          <div className="mt-4 pt-4 border-t border-[#1E293B] animate-fadeIn">
            <div className="relative rounded-3xl overflow-hidden bg-black aspect-video max-w-4xl mx-auto shadow-2xl border-2 border-[#334155]">
              <iframe
                src={embedUrl}
                title="라탄 바구니 만들기 유튜브 영상 가이드"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-[#94A3B8] max-w-4xl mx-auto mt-2 px-1 gap-2">
              <span className="flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-[#38BDF8] fill-[#38BDF8]" />
                <span>영상을 함께 틀어놓고 아래 6단계 가이드와 날대 계산기를 이용하시면 훨씬 쉬워요!</span>
              </span>
              <a
                href={videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#38BDF8] hover:underline font-semibold flex items-center gap-1 transition"
              >
                <span>유튜브 공식 앱에서 고화질 전체화면 보기</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
