import React from 'react';
import { MapPin, Phone, Mail, Clock, Heart, ShieldCheck, Sparkles, Navigation, ExternalLink } from 'lucide-react';
import { MascotBear } from './CuteCharacters';

interface FooterProps {
  onOpenLocation?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLocation }) => {
  return (
    <footer className="bg-[#F0F7FD] text-[#334155] pt-14 pb-12 border-t-2 border-[#BAE6FD] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          
          {/* Col 1: Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <MascotBear size={36} />
              <span className="font-cute text-xl font-bold text-[#0F243E]">
                라탄 만들기 🧺
              </span>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed font-medium">
              자연에서 온 등나무의 결을 곰돌이와 함께 손끝으로 조물조물 엮어 식탁 위에 따스한 행복을 전하는 원형 라탄 보울 스튜디오예요.
            </p>
            <div className="pt-2 flex items-center gap-2 text-[11px] text-[#0284C7] font-bold">
              <ShieldCheck className="w-4 h-4 text-[#059669]" />
              <span>인도네시아 수마트라 직수입 AA등급 천연 환심</span>
            </div>
          </div>

          {/* Col 2: Studio Info & Location Button */}
          <div className="space-y-2.5 text-xs text-[#475569] font-medium">
            <h4 className="font-cute font-bold text-base text-[#0F243E] mb-3">
              아산 본점 공방 &amp; 스튜디오 🏡
            </h4>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
              <span className="break-keep">충청남도 아산시 시민로 456 (온양온천역·아산시청 도보권)</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#0284C7] shrink-0" />
              <span>화요일 ~ 일요일 10:30 ~ 20:30 (매주 월요일 휴무)</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#0284C7] shrink-0" />
              <a href="tel:041-540-2114" className="hover:underline font-bold text-[#0284C7]">041-540-2114</a>
            </div>
            {onOpenLocation && (
              <div className="pt-2 flex flex-wrap items-center gap-2">
                <button
                  id="footer-open-location-btn"
                  onClick={onOpenLocation}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white hover:bg-[#E0F2FE] border border-[#BAE6FD] text-[#0284C7] font-bold text-xs transition cursor-pointer shadow-2xs active:scale-95"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Google 지도 길찾기 📍</span>
                </button>
              </div>
            )}
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-2 text-xs">
            <h4 className="font-cute font-bold text-base text-[#0F243E] mb-3">
              빠른 바로가기 🐾
            </h4>
            <ul className="space-y-1.5 text-[#475569] font-medium">
              <li>• 🌸 원형 라탄 보울 6단계 클래스</li>
              <li>• ✂️ 준비 도구 &amp; 환심 불림 가이드</li>
              <li>• 🐰 황금 비율 날대 자동 계산기</li>
              <li>• 🥣 4단 네스팅 라탄 볼 규격 안내</li>
              <li>• 📍 아산 공방 위치 및 구글 지도</li>
            </ul>
          </div>

          {/* Col 4: Eco pledge */}
          <div className="space-y-2.5 text-xs bg-white p-5 rounded-3xl border border-[#BAE6FD] shadow-2xs">
            <h4 className="font-cute font-bold text-sm text-[#0F243E] flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#0284C7]" />
              친환경 핸드메이드 약속 🌱
            </h4>
            <p className="text-[11px] text-[#475569] leading-relaxed font-medium">
              라탄 만들기는 플라스틱을 배제하고 자연 분해되는 천연 등나무 환심과 100% 식기용 냉압착 호두오일만을 사용합니다.
            </p>
            <div className="text-[10px] text-[#64748B] pt-1">
              사업자등록번호: 214-88-09182 | 통신판매업신고 완료
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between text-xs text-[#64748B] gap-3">
          <p>© 2026 라탄 만들기 (Rattan Making Studio). All rights reserved.</p>
          <div className="flex items-center gap-1.5 text-xs font-medium">
            <Heart className="w-3.5 h-3.5 text-[#38BDF8] fill-[#38BDF8]" />
            <span>따뜻한 손길로 엮어가는 행복한 일상</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
