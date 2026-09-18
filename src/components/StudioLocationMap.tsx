import React, { useState } from 'react';
import { 
  MapPin, Navigation, Phone, Clock, Copy, Check, 
  ExternalLink, Bus, Car, Train, Sparkles, Compass,
  Layers, Map as MapIcon, Route, Share2, Heart
} from 'lucide-react';
import { 
  APIProvider, 
  Map, 
  AdvancedMarker, 
  Pin, 
  InfoWindow 
} from '@vis.gl/react-google-maps';
import { MascotBear } from './CuteCharacters';

export const StudioLocationMap: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const [isInfoWindowOpen, setIsInfoWindowOpen] = useState<boolean>(true);
  const [mapType, setMapType] = useState<'roadmap' | 'satellite' | 'hybrid'>('roadmap');
  const [activeTab, setActiveTab] = useState<'interactive' | 'embed'>('interactive');

  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';
  const studioPosition = { lat: 36.78985, lng: 127.00185 };

  const addressRoad = '충청남도 아산시 시민로 456';
  const addressJibun = '충청남도 아산시 온천동 1626';
  const zipCode = '31512';
  const phone = '041-540-2114';

  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(addressRoad)}`;
  const googleMapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressRoad)}`;
  const googleStreetViewUrl = `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${studioPosition.lat},${studioPosition.lng}`;
  const embedMapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(addressRoad)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(addressRoad);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // Map App URL links
  const mapApps = [
    {
      name: 'Google 지도',
      app: 'Google Maps',
      url: googleMapsDirectionsUrl,
      color: 'bg-[#0284C7] hover:bg-[#0369A1] text-white',
      badge: '원클릭 길안내 & 실시간 네비',
      iconText: 'G'
    },
    {
      name: '네이버 지도',
      app: 'Naver Map',
      url: `https://map.naver.com/v5/search/${encodeURIComponent(addressRoad)}`,
      color: 'bg-[#03C75A] hover:bg-[#02B351] text-white',
      badge: '국내 도보·대중교통 길안내',
      iconText: 'N'
    },
    {
      name: '카카오맵',
      app: 'Kakao Map',
      url: `https://map.kakao.com/link/search/${encodeURIComponent(addressRoad)}`,
      color: 'bg-[#FEE500] hover:bg-[#FADA0A] text-[#191919]',
      badge: '실시간 버스도착 & 길찾기',
      iconText: 'K'
    },
    {
      name: '티맵 (T-map)',
      app: 'TMAP',
      url: `https://tmap.life/search?q=${encodeURIComponent(addressRoad)}`,
      color: 'bg-[#2563EB] hover:bg-[#1D4ED8] text-white',
      badge: '실시간 교통정보 차량내비',
      iconText: 'T'
    }
  ];

  return (
    <section id="studio-location-section" className="py-12 sm:py-16 bg-[#F4F9FD] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with MascotBear */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-xs font-bold text-[#0284C7] mb-3 shadow-2xs whitespace-nowrap">
            <MapPin className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
            <span>📍 아산 본점 스튜디오 • 구글 지도 공식 연동</span>
          </div>
          
          <div className="flex items-center justify-center gap-3">
            <MascotBear size={48} className="hidden sm:block" />
            <h2 className="font-cute text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F243E] tracking-wide break-keep">
              아산 공방 놀러오시는 길 🌿
            </h2>
          </div>

          <p className="text-xs sm:text-base text-[#475569] mt-2 leading-relaxed break-keep font-medium">
            충청남도 아산시 시민로 456 (온양온천역·아산시청 도보권). 아래 구글 지도에서 실시간 길찾기와 위성 지도를 편하게 확인해 보세요!
          </p>
        </div>

        {/* Main Grid: Info + Interactive Google Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Address Card & Map Apps */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Address Box */}
            <div className="bg-white p-6 sm:p-7 rounded-3xl border-2 border-[#BFDBFE] shadow-xs space-y-5">
              <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-[#E0F2FE] border border-[#BAE6FD] flex items-center justify-center text-[#0284C7] shadow-2xs">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-cute text-base sm:text-lg font-bold text-[#0F243E]">
                      라탄 만들기 아산 본점 스튜디오 🏡
                    </h3>
                    <span className="text-[11px] text-[#0369A1] font-semibold">온양온천역 &amp; 아산시청 도보 5분</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#E0F2FE] text-[#0284C7] border border-[#BAE6FD]">
                  Google Maps 연동 ✨
                </span>
              </div>

              {/* Address Details */}
              <div className="space-y-2.5 text-xs">
                <div>
                  <span className="text-[#64748B] text-[11px] font-medium block mb-0.5">도로명 주소</span>
                  <div className="font-bold text-[#0F243E] text-sm sm:text-base flex items-center justify-between gap-2">
                    <span className="break-keep">{addressRoad}</span>
                  </div>
                </div>

                <div className="pt-1">
                  <span className="text-[#64748B] text-[11px] font-medium block mb-0.5">지번 주소 (우편번호 {zipCode})</span>
                  <span className="text-[#475569]">{addressJibun}</span>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-3 border-t border-[#E2E8F0]">
                  <div>
                    <span className="text-[#64748B] text-[11px] block flex items-center gap-1 mb-0.5">
                      <Clock className="w-3 h-3 text-[#0284C7]" /> 운영 시간
                    </span>
                    <span className="font-semibold text-[#0F243E] text-[11px] block">
                      화~일 10:30 ~ 20:30
                    </span>
                    <span className="text-[10px] text-[#94A3B8]">(매주 월요일 정기 휴무)</span>
                  </div>

                  <div>
                    <span className="text-[#64748B] text-[11px] block flex items-center gap-1 mb-0.5">
                      <Phone className="w-3 h-3 text-[#0284C7]" /> 문의 전화
                    </span>
                    <a 
                      href={`tel:${phone}`}
                      className="font-semibold text-[#0284C7] hover:underline text-xs block"
                    >
                      {phone}
                    </a>
                    <span className="text-[10px] text-[#94A3B8]">공방 직통 연결</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-1">
                <button
                  id="copy-address-btn"
                  onClick={handleCopyAddress}
                  className="w-full py-3 px-4 rounded-xl bg-[#F0F9FF] hover:bg-[#E0F2FE] text-[#0F243E] border border-[#BAE6FD] font-bold text-xs transition cursor-pointer flex items-center justify-center gap-2 active:scale-98"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-[#059669]" />
                      <span className="text-[#059669] font-bold">주소가 클립보드에 복사되었습니다!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#0284C7]" />
                      <span>주소 복사하기 (클립보드 저장)</span>
                    </>
                  )}
                </button>

                <a
                  id="google-maps-directions-btn"
                  href={googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold text-xs transition cursor-pointer flex items-center justify-center gap-2 shadow-xs active:scale-98"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Google 지도에서 바로 길찾기 (내비게이션)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

            {/* Location Apps Quick Access ("위치앱 활용") */}
            <div className="bg-white p-6 sm:p-7 rounded-3xl border border-[#E2E8F0] shadow-2xs space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#0284C7] uppercase tracking-wider">
                  <Navigation className="w-4 h-4 text-[#0284C7]" />
                  <span>원클릭 위치앱 길안내</span>
                </div>
                <span className="text-[11px] text-[#64748B]">내 폰에 설치된 앱으로 바로 열기</span>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {mapApps.map((map) => (
                  <a
                    key={map.name}
                    href={map.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-2xl flex flex-col justify-between transition shadow-2xs active:scale-98 group cursor-pointer ${map.color}`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="w-6 h-6 rounded-lg bg-black/10 flex items-center justify-center text-xs font-black">
                        {map.iconText}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-75 group-hover:opacity-100 transition" />
                    </div>
                    <div>
                      <div className="font-bold text-xs sm:text-sm leading-snug">{map.name}</div>
                      <div className="text-[10px] opacity-85 line-clamp-1 mt-0.5">{map.badge}</div>
                    </div>
                  </a>
                ))}
              </div>

              <p className="text-[11px] text-[#64748B] leading-relaxed break-keep pt-1">
                버튼을 누르면 현재 계신 위치에서 <strong>아산시 시민로 456</strong> 공방까지의 최적 경로(도보, 대중교통, 자가용 내비게이션)가 즉시 연결됩니다.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Google Map & Transportation */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Embedded Interactive Google Map Card */}
            <div className="bg-white rounded-3xl border border-[#E2E8F0] shadow-2xs overflow-hidden">
              
              {/* Map Top Bar */}
              <div className="px-5 py-3.5 bg-[#F8FAFD] border-b border-[#E2E8F0] flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0284C7] animate-pulse" />
                  <span className="font-bold text-[#0F243E]">Google Maps 실시간 지도</span>
                  <span className="text-[10px] bg-[#E0F2FE] text-[#0284C7] px-2 py-0.5 rounded-full font-semibold border border-[#BAE6FD]">
                    공식 연동 활성화
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {/* View mode toggle */}
                  <div className="inline-flex rounded-lg border border-[#BFDBFE] bg-white p-0.5 text-[11px]">
                    <button
                      onClick={() => setActiveTab('interactive')}
                      className={`px-2.5 py-1 rounded-md font-bold transition cursor-pointer ${
                        activeTab === 'interactive'
                          ? 'bg-[#0284C7] text-white shadow-2xs'
                          : 'text-[#0369A1] hover:text-[#0F243E]'
                      }`}
                    >
                      SDK 지도
                    </button>
                    <button
                      onClick={() => setActiveTab('embed')}
                      className={`px-2.5 py-1 rounded-md font-bold transition cursor-pointer ${
                        activeTab === 'embed'
                          ? 'bg-[#0284C7] text-white shadow-2xs'
                          : 'text-[#0369A1] hover:text-[#0F243E]'
                      }`}
                    >
                      임베드 뷰
                    </button>
                  </div>

                  {/* Map Type Switcher */}
                  {activeTab === 'interactive' && (
                    <div className="inline-flex rounded-lg border border-[#BFDBFE] bg-white p-0.5 text-[11px]">
                      <button
                        onClick={() => setMapType('roadmap')}
                        className={`px-2 py-1 rounded-md font-medium transition cursor-pointer ${
                          mapType === 'roadmap'
                            ? 'bg-[#0284C7] text-white shadow-2xs'
                            : 'text-[#475569] hover:text-[#0F243E]'
                        }`}
                      >
                        일반
                      </button>
                      <button
                        onClick={() => setMapType('hybrid')}
                        className={`px-2 py-1 rounded-md font-medium transition cursor-pointer ${
                          mapType === 'hybrid'
                            ? 'bg-[#0284C7] text-white shadow-2xs'
                            : 'text-[#475569] hover:text-[#0F243E]'
                        }`}
                      >
                        위성
                      </button>
                    </div>
                  )}

                  <a
                    href={googleMapsSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-[#0284C7] font-semibold hover:underline flex items-center gap-1 ml-1"
                  >
                    <span>구글맵 크게보기</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Interactive Google Map Container */}
              <div className="relative w-full h-[360px] sm:h-[440px] bg-[#E0F2FE]">
                {activeTab === 'interactive' && apiKey ? (
                  <APIProvider apiKey={apiKey}>
                    <Map
                      style={{ width: '100%', height: '100%' }}
                      defaultCenter={studioPosition}
                      defaultZoom={16}
                      mapId="DEMO_MAP_ID"
                      mapTypeId={mapType}
                      gestureHandling="greedy"
                      disableDefaultUI={false}
                      zoomControl={true}
                      internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
                    >
                      <AdvancedMarker 
                        position={studioPosition}
                        onClick={() => setIsInfoWindowOpen(!isInfoWindowOpen)}
                      >
                        <Pin 
                          background="#0284C7" 
                          glyphColor="#FFFFFF" 
                          borderColor="#075985"
                          scale={1.25}
                        />
                      </AdvancedMarker>

                      {isInfoWindowOpen && (
                        <InfoWindow
                          position={studioPosition}
                          onCloseClick={() => setIsInfoWindowOpen(false)}
                        >
                          <div className="p-2 text-left max-w-xs text-[#0F243E]">
                            <div className="flex items-center gap-1.5 mb-1">
                              <span className="w-5 h-5 rounded-md bg-[#0284C7] text-white text-[11px] font-bold flex items-center justify-center">
                                🧺
                              </span>
                              <strong className="font-cute text-sm text-[#0F243E]">
                                라탄 만들기 아산 본점
                              </strong>
                            </div>
                            <p className="text-xs text-[#475569] mb-2">
                              충청남도 아산시 시민로 456 (온양온천역·아산시청 앞)
                            </p>
                            <div className="flex items-center gap-2 pt-1 border-t border-slate-200">
                              <a
                                href={googleMapsDirectionsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[11px] font-bold text-[#0284C7] hover:underline flex items-center gap-1"
                              >
                                <Navigation className="w-3 h-3" />
                                <span>구글 길찾기</span>
                              </a>
                              <span className="text-slate-300">|</span>
                              <a
                                href={`tel:${phone}`}
                                className="text-[11px] font-medium text-[#0284C7] hover:underline"
                              >
                                전화 {phone}
                              </a>
                            </div>
                          </div>
                        </InfoWindow>
                      )}
                    </Map>
                  </APIProvider>
                ) : (
                  <iframe
                    title="Google Maps Studio Location"
                    src={embedMapUrl}
                    className="w-full h-full border-0"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                )}

                {/* Floating Map Reassurance Card */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-white/95 backdrop-blur-md p-3 rounded-2xl border border-[#BFDBFE] shadow-lg text-left pointer-events-auto">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-cute font-bold text-xs text-[#0F243E] flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#0284C7]" />
                      Google Maps 실시간 핀
                    </span>
                    <a
                      href={googleStreetViewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] text-[#0284C7] hover:underline font-semibold flex items-center gap-0.5"
                    >
                      <span>스트리트뷰</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                  <p className="text-[11px] text-[#475569] leading-tight">
                    충남 아산시 시민로 456 (온천동 1626)
                  </p>
                  <div className="flex items-center gap-1 text-[10px] text-[#64748B] mt-1 pt-1 border-t border-[#E2E8F0]">
                    <Compass className="w-3 h-3 text-[#0284C7]" />
                    <span>온양온천역에서 차량 4분 • 도보 15분</span>
                  </div>
                </div>
              </div>

              {/* Map Footer Note & Actions */}
              <div className="p-4 bg-white border-t border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#475569] gap-3">
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1 text-[#0284C7] font-semibold">
                    <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
                    <span>구글 지도 공식 연동</span>
                  </span>
                  <span className="text-[#64748B] text-[11px]">
                    (드래그, 줌, 내비게이션 완벽 지원)
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-[#0284C7] hover:underline flex items-center gap-1"
                  >
                    <Route className="w-3 h-3" />
                    <span>내 위치에서 구글맵 경로 계산</span>
                  </a>
                  <span className="text-[#CBD5E1]">|</span>
                  <span className="text-[10px] text-[#64748B] font-mono">
                    36.7899° N, 127.0019° E
                  </span>
                </div>
              </div>
            </div>

            {/* Transportation Guide Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left text-xs">
              
              {/* Subway & Train */}
              <div className="bg-white p-4 rounded-2xl border border-[#E2E8F0] shadow-2xs space-y-1.5">
                <div className="w-8 h-8 rounded-xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center mb-2">
                  <Train className="w-4 h-4" />
                </div>
                <strong className="text-[#0F243E] block font-bold">지하철·기차</strong>
                <p className="text-[11px] text-[#475569] leading-relaxed break-keep">
                  수도권 1호선 <strong>온양온천역 1번 출구</strong>에서 버스 5분 또는 도보 15분. KTX 천안아산역에서 택시 15분.
                </p>
              </div>

              {/* City Bus */}
              <div className="bg-white p-4 rounded-2xl border border-[#E2E8F0] shadow-2xs space-y-1.5">
                <div className="w-8 h-8 rounded-xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center mb-2">
                  <Bus className="w-4 h-4" />
                </div>
                <strong className="text-[#0F243E] block font-bold">시내버스</strong>
                <p className="text-[11px] text-[#475569] leading-relaxed break-keep">
                  <strong>아산시청 정류장</strong> 하차 후 도보 1분 (100번, 110번, 500번, 510번, 900번대 등 다수 노선 운행).
                </p>
              </div>

              {/* Parking */}
              <div className="bg-white p-4 rounded-2xl border border-[#E2E8F0] shadow-2xs space-y-1.5">
                <div className="w-8 h-8 rounded-xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center mb-2">
                  <Car className="w-4 h-4" />
                </div>
                <strong className="text-[#0F243E] block font-bold">자가용·주차</strong>
                <p className="text-[11px] text-[#475569] leading-relaxed break-keep">
                  구글맵/네비에 <strong>'아산시 시민로 456'</strong> 검색. 공방 전용 주차 공간 및 공영 주차장 무료 이용 가능.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
