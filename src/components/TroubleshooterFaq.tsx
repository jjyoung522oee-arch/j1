import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/rattanData';
import { FaqItem } from '../types';
import { 
  HelpCircle, Search, ChevronDown, ChevronUp, Sparkles, 
  Send, Bot, Lightbulb, AlertTriangle, CheckCircle, Heart 
} from 'lucide-react';
import { MascotBear } from './CuteCharacters';

export const TroubleshooterFaq: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  // Custom Artisan Q&A
  const [userQuestion, setUserQuestion] = useState<string>('');
  const [aiAnswers, setAiAnswers] = useState<Array<{ q: string; a: string; time: string }>>([
    {
      q: '사진처럼 예쁜 사발형 보울 곡선을 만들 때 날대가 안쪽으로 오므라드는 이유는 무엇인가요?',
      a: '가장 흔히 겪는 실수예요! 사릿대를 너무 강하게 몸쪽으로 당기며 엮으면 날대가 안쪽으로 모여 밥공기가 아닌 호리병 모양이 됩니다. 사릿대를 잡아당기지 마시고, 손바닥 전체로 보울 바깥쪽을 받친 채 55~65도 경사각을 유지하며 사릿대를 살포시 얹어 다져주세요 🧸',
      time: '곰돌이 공방장 코멘트 🍯'
    }
  ]);
  const [isThinking, setIsThinking] = useState<boolean>(false);

  const categories = [
    { id: 'all', label: '전체 질문 ✨' },
    { id: '엮기테크닉', label: '보울 엮기 테크닉' },
    { id: '트러블슈팅', label: '형태 수정 트러블슈팅' },
    { id: '관리보관', label: '식기 관리 & 세척' },
    { id: '기초', label: '환심 기초' }
  ];

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.keywords.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const handleAskQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userQuestion.trim()) return;

    const q = userQuestion.trim();
    setUserQuestion('');
    setIsThinking(true);

    setTimeout(() => {
      let masterAnswer = '';
      const lower = q.toLowerCase();

      if (lower.includes('네스팅') || lower.includes('포개') || lower.includes('안 들어가')) {
        masterAnswer = '네스팅(중첩) 보울은 각 호수마다 입구 지름이 3~4cm씩 규칙적으로 넓어져야 하며, 측면 경사각(약 60도)이 균일해야 쏙 포개어집니다. 이미 마른 상태라면 미온수를 가볍게 분무한 뒤 손으로 눌러 각도를 약간 넓혀주고 서늘한 그늘에서 24시간 모양을 잡아 건조해 보세요!';
      } else if (lower.includes('테두리') || lower.includes('림') || lower.includes('마무르기')) {
        masterAnswer = '사진 속 도톰한 롤 테두리는 환심에 수분이 가장 많을 때 작업해야 합니다. 마무르기 직전 분무기로 물을 듬뿍 뿌려 3분간 기다린 뒤, 날대를 2가닥씩 겹쳐 둥근 원통 모양으로 말아 넣으면 부러짐 없이 통통하고 포근한 림이 완성됩니다.';
      } else if (lower.includes('곰팡이') || lower.includes('세척') || lower.includes('빵')) {
        masterAnswer = '라탄 보울에 빵 부스러기가 끼었을 땐 부드러운 솔로 털어내시고, 오염은 미온수나 물티슈로 닦은 후 "통풍이 잘되는 그늘"에서 바짝 말려주세요. 천연 호두오일로 코팅되어 있어 가벼운 물기는 스며들지 않습니다.';
      } else {
        masterAnswer = `"${q}"에 대한 마스터 답변입니다. 원형 라탄 보울은 환심의 수분 공급과 일정한 텐션(손힘), 그리고 매 바퀴마다 엄지로 다져주는 밀도가 완성도를 결정짓습니다. 언제든 작업 중 뻣뻣해지면 미세 안개 분무기로 수분을 보충해 주세요.`;
      }

      setAiAnswers((prev) => [
        { q, a: masterAnswer, time: '방금 답변 완료' },
        ...prev
      ]);
      setIsThinking(false);
    }, 500);
  };

  return (
    <section id="rattan-faq-section" className="py-12 sm:py-16 bg-[#F4F9FD] text-left">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-xs font-bold text-[#0284C7] mb-3 shadow-2xs whitespace-nowrap">
            <HelpCircle className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
            <span>🍯 척척박사 곰돌이의 안심 상담실</span>
          </div>
          
          <div className="flex items-center justify-center gap-3">
            <MascotBear size={48} className="hidden sm:block" />
            <h2 className="font-cute text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F243E] tracking-wide break-keep">
              원형 라탄 보울 꿀팁 Q&amp;A &amp; 고민 해결소 🧸
            </h2>
          </div>

          <p className="text-xs sm:text-base text-[#475569] mt-2 leading-relaxed break-keep font-medium">
            보울 곡선이 찌그러졌을 때, 네스팅 보울이 쏙 안 들어갈 때, 테두리가 부러졌을 때의 응급처치와<br className="hidden sm:inline" />
            곰돌이 공방장의 친절한 1:1 맞춤 답변 가이드예요.
          </p>
        </div>

        {/* Search Bar & Category Filters */}
        <div className="space-y-4 mb-8">
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#0284C7]" />
            <input
              id="faq-search-input"
              type="text"
              placeholder="궁금한 점을 검색해 보세요 (예: 보울 곡선, 네스팅, 테두리, 세척)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full border-2 border-[#BFDBFE] bg-white text-xs sm:text-sm text-[#0F243E] shadow-2xs focus:outline-none focus:border-[#0284C7] placeholder-[#94A3B8] font-medium"
            />
          </div>

          <div className="flex items-center justify-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition cursor-pointer whitespace-nowrap active:scale-95 ${
                  selectedCategory === cat.id
                    ? 'bg-[#0284C7] text-white shadow-2xs'
                    : 'bg-white text-[#0369A1] border border-[#BFDBFE] hover:bg-[#EFF6FF]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3 mb-12">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden transition shadow-2xs"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-[#F8FAFD] transition cursor-pointer"
                >
                  <span className="font-cute text-xs sm:text-sm font-bold text-[#0F243E] flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center text-xs font-mono font-bold shrink-0">
                      Q
                    </span>
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#0284C7] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#94A3B8] shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-[#475569] leading-relaxed border-t border-[#E2E8F0] bg-[#F8FAFD]">
                    <div className="flex items-start gap-2.5 pt-2">
                      <span className="w-5 h-5 rounded-full bg-[#059669] text-white flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5">
                        A
                      </span>
                      <div className="space-y-2 flex-1">
                        <p>{faq.answer}</p>
                        <div className="flex gap-1.5 flex-wrap pt-1">
                          {faq.keywords.map((kw, i) => (
                            <span key={i} className="text-[10px] px-2 py-0.5 rounded-md bg-white border border-[#E2E8F0] text-[#0284C7] font-semibold">
                              #{kw}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Ask AI Artisan Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-[#BFDBFE] shadow-xs">
          <div className="flex items-center gap-3 mb-2">
            <MascotBear size={42} />
            <div>
              <h3 className="font-cute text-lg sm:text-xl font-bold text-[#0F243E]">
                곰돌이 공방장에게 물어보기 🍯
              </h3>
              <p className="text-xs text-[#64748B]">
                제작 중 환심이 부러지거나 형태가 찌그러졌을 때 질문을 남겨주시면 즉시 꿀팁을 드려요!
              </p>
            </div>
          </div>

          <form onSubmit={handleAskQuestion} className="flex flex-col sm:flex-row gap-2 mt-4">
            <input
              type="text"
              value={userQuestion}
              onChange={(e) => setUserQuestion(e.target.value)}
              placeholder="예: 네스팅 보울 크기 맞추는 법이 궁금해요, 과일 담았을 때 세척법..."
              className="flex-1 p-3.5 rounded-full border border-[#BFDBFE] bg-[#F8FAFD] text-xs sm:text-sm text-[#0F243E] focus:outline-none focus:border-[#0284C7] px-4 font-medium placeholder-[#94A3B8]"
            />
            <button
              type="submit"
              disabled={isThinking}
              className="px-6 py-3.5 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs sm:text-sm font-cute transition cursor-pointer shrink-0 disabled:opacity-50 active:scale-95 shadow-2xs"
            >
              {isThinking ? '곰돌이가 생각 중... 🐾' : '질문 보내기 💌'}
            </button>
          </form>

          {/* AI Q&A Feed */}
          {aiAnswers.length > 0 && (
            <div className="mt-6 space-y-3 pt-4 border-t border-[#E2E8F0]">
              {aiAnswers.map((item, idx) => (
                <div key={idx} className="p-4 sm:p-5 rounded-3xl bg-[#EFF6FF] border border-[#BFDBFE] space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-cute font-bold text-[#0369A1] flex items-center gap-1.5">
                      <span>🐾 Q. {item.q}</span>
                    </span>
                    <span className="text-[11px] bg-white px-2.5 py-0.5 rounded-full border border-[#BFDBFE] text-[#0284C7] font-bold">
                      {item.time}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#1E293B] leading-relaxed bg-white p-3.5 rounded-2xl border border-[#E2E8F0] font-medium">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
