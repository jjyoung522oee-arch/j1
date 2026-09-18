import React, { useState, useEffect } from 'react';
import { CRAFT_STEPS } from '../data/rattanData';
import { CraftStep } from '../types';
import { 
  Play, Pause, RotateCcw, Check, CheckCircle, Clock, AlertTriangle, 
  Lightbulb, Scissors, Sparkles, ChevronRight, ChevronLeft, Droplets, Volume2, Heart
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { MascotBear, MascotKitten, MascotBunny } from './CuteCharacters';

interface InteractiveGuideProps {
  onOpenCalculator: () => void;
  onExploreTools?: () => void;
  onViewNesting?: () => void;
}

export const InteractiveGuide: React.FC<InteractiveGuideProps> = ({
  onOpenCalculator,
  onExploreTools,
  onViewNesting,
}) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  
  // Soaking Timer State
  const [timerSeconds, setTimerSeconds] = useState<number>(600); // 10 minutes
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [selectedDuration, setSelectedDuration] = useState<number>(600);
  const [timerFinished, setTimerFinished] = useState<boolean>(false);

  const currentStep: CraftStep = CRAFT_STEPS[activeStepIndex];

  // Timer countdown effect
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0 && isTimerRunning) {
      setIsTimerRunning(false);
      setTimerFinished(true);
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.7 }
      });
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, timerSeconds]);

  const toggleTimer = () => {
    setIsTimerRunning(!isTimerRunning);
    if (timerFinished) setTimerFinished(false);
  };

  const resetTimer = (newDuration?: number) => {
    setIsTimerRunning(false);
    setTimerFinished(false);
    const duration = newDuration ?? selectedDuration;
    setSelectedDuration(duration);
    setTimerSeconds(duration);
  };

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const toggleStepCompleted = (stepIdx: number) => {
    if (completedSteps.includes(stepIdx)) {
      setCompletedSteps(completedSteps.filter((s) => s !== stepIdx));
    } else {
      const nextCompleted = [...completedSteps, stepIdx];
      setCompletedSteps(nextCompleted);
      
      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.6 }
      });

      if (stepIdx < CRAFT_STEPS.length - 1 && stepIdx === activeStepIndex) {
        setTimeout(() => {
          setActiveStepIndex(stepIdx + 1);
        }, 500);
      }
    }
  };

  const progressPercentage = Math.round((completedSteps.length / CRAFT_STEPS.length) * 100);

  return (
    <section id="craft-guide-section" className="py-12 sm:py-16 bg-[#F4F9FD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-xs font-bold text-[#0284C7] mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>🌸 누구나 뚝딱! 원형 라탄 보울 6단계 클래스</span>
          </div>
          <h2 className="font-cute text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F243E] tracking-wide">
            손끝으로 조물조물 🧺 둥근 라탄 보울 6단계 코스
          </h2>
          <p className="text-xs sm:text-base text-[#475569] mt-2 leading-relaxed font-medium">
            가방처럼 딱딱하지 않게, 부드러운 사발 곡선과 도톰한 롤 테두리를 곰돌이 작가와 함께 천천히 만들어봐요!
          </p>
        </div>

        {/* Global Progress Bar with Cute Heart */}
        <div className="max-w-3xl mx-auto mb-10 bg-white p-4 sm:p-5 rounded-3xl border-2 border-[#BFDBFE] shadow-xs text-left">
          <div className="flex items-center justify-between text-xs sm:text-sm mb-2">
            <span className="font-cute text-sm sm:text-base text-[#0F243E] flex items-center gap-1.5 font-bold">
              <Heart className="w-4 h-4 text-[#38BDF8] fill-[#38BDF8]" />
              나의 바구니 제작 달성도
            </span>
            <span className="font-cute text-[#0284C7] text-sm sm:text-base font-bold">
              {completedSteps.length} / {CRAFT_STEPS.length} 단계 완성 ({progressPercentage}%) 🐾
            </span>
          </div>
          <div className="w-full bg-[#EFF6FF] h-3.5 rounded-full overflow-hidden p-0.5 border border-[#BFDBFE]">
            <div
              className="bg-gradient-to-r from-[#38BDF8] to-[#0284C7] h-full rounded-full transition-all duration-500 shadow-xs"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* Steps Navigation Carousel / Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mb-8">
          {CRAFT_STEPS.map((step, idx) => {
            const isCurrent = idx === activeStepIndex;
            const isDone = completedSteps.includes(idx);
            return (
              <button
                key={step.id}
                id={`step-tab-${step.id}`}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-3.5 rounded-2xl border text-left transition relative cursor-pointer ${
                  isCurrent
                    ? 'bg-white border-[#0284C7] shadow-sm ring-2 ring-[#0284C7]/20'
                    : isDone
                    ? 'bg-[#F0FDF4] border-[#86EFAC] text-[#166534]'
                    : 'bg-white/70 border-[#E2E8F0] text-[#475569] hover:bg-white hover:border-[#93C5FD]'
                }`}
              >
                {isDone && (
                  <span className="absolute top-2.5 right-2.5 w-4 h-4 rounded-full bg-[#059669] text-white flex items-center justify-center text-[10px] font-bold">
                    ✓
                  </span>
                )}
                <div className="text-[11px] font-mono text-[#0284C7] font-semibold mb-0.5">
                  STEP 0{step.stepNumber}
                </div>
                <div className={`font-bold text-xs line-clamp-1 ${isCurrent ? 'text-[#0F243E]' : 'text-[#334155]'}`}>
                  {step.title.split('(')[0]}
                </div>
                <div className="text-[10px] text-[#64748B] mt-1 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{step.durationMinutes}분</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Content Card */}
        <div className="bg-white rounded-3xl border border-[#E2E8F0] shadow-[0_4px_25px_rgba(2,132,199,0.04)] overflow-hidden">
          
          {/* Top Banner for Current Step */}
          <div className="bg-[#EFF6FF] p-5 sm:p-7 border-b border-[#DBEAFE] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left">
            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="bg-[#0284C7] text-white font-cute font-bold text-xs px-3 py-1 rounded-full shadow-2xs">
                  STEP 0{currentStep.stepNumber}
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-white border border-[#BFDBFE] text-[#0284C7] font-bold">
                  ⏱️ 소요 시간 약 {currentStep.durationMinutes}분
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-[#F0FDF4] border border-[#BBF7D0] text-[#166534] font-bold">
                  🌱 난이도 {currentStep.difficulty}
                </span>
              </div>
              <h3 className="font-cute text-xl sm:text-2xl font-bold text-[#0F243E]">
                {currentStep.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] font-medium">
                {currentStep.subtitle}
              </p>
            </div>

            {/* Check Complete Button */}
            <button
              id="step-complete-toggle-btn"
              onClick={() => toggleStepCompleted(activeStepIndex)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full font-bold text-xs sm:text-sm transition cursor-pointer self-start sm:self-auto active:scale-95 shadow-2xs ${
                completedSteps.includes(activeStepIndex)
                  ? 'bg-[#059669] text-white'
                  : 'bg-white border-2 border-[#BFDBFE] text-[#0284C7] hover:bg-[#EFF6FF]'
              }`}
            >
              <Check className="w-4 h-4" />
              <span>
                {completedSteps.includes(activeStepIndex) ? '완료 취소하기' : '✨ 이 단계 뚝딱 완성!'}
              </span>
            </button>
          </div>

          {/* Step Main Body */}
          <div className="p-5 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
            
            {/* Left Column: Instructions & Tips (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Summary highlight box */}
              <div className="p-4 rounded-3xl bg-[#F0F9FF] border-2 border-[#BAE6FD] text-xs sm:text-sm text-[#334155] leading-relaxed">
                <strong className="font-cute text-sm sm:text-base text-[#0284C7] block mb-1">
                  💡 공방장의 핵심 체크포인트:
                </strong>
                {currentStep.keyAction}
              </div>

              {/* Step-by-step instructions */}
              <div className="space-y-4">
                <h4 className="font-cute text-lg font-bold text-[#0F243E] flex items-center gap-2">
                  <span>단계별 상세 제작 순서 🐾</span>
                </h4>

                <div className="space-y-3">
                  {currentStep.instructions.map((inst, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-2xl bg-white border border-[#E2E8F0] transition hover:border-[#93C5FD] shadow-2xs"
                    >
                      <div className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-[#0284C7] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <div className="space-y-1.5 flex-1">
                          <h5 className="text-xs sm:text-sm font-bold text-[#0F243E]">{inst.title}</h5>
                          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                            {inst.description}
                          </p>
                          {inst.tip && (
                            <div className="text-[11px] text-[#0369A1] bg-[#EFF6FF] p-2.5 rounded-xl border border-[#BFDBFE] flex items-start gap-1.5 mt-2">
                              <Lightbulb className="w-3.5 h-3.5 text-[#0284C7] shrink-0 mt-0.5" />
                              <span>{inst.tip}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Master Pro Tips with Cute MascotBear */}
              <div className="p-4 sm:p-5 rounded-3xl bg-[#EFF6FF] border-2 border-[#BFDBFE] space-y-3">
                <div className="flex items-center gap-3">
                  <MascotBear size={42} />
                  <div>
                    <div className="font-cute text-sm sm:text-base font-bold text-[#1E40AF]">
                      🧸 곰돌이 공방장의 1급 비밀 꿀팁 🍯
                    </div>
                    <p className="text-[11px] text-[#2563EB]">이것만 알면 절대 망치지 않아요!</p>
                  </div>
                </div>
                <ul className="space-y-1.5 text-xs text-[#1E3A8A] pl-1">
                  {currentStep.proTips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#38BDF8] font-bold">♥</span>
                      <span className="font-medium">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Common Mistakes with Cute MascotBunny */}
              <div className="p-4 sm:p-5 rounded-3xl bg-[#FFF0F0] border-2 border-[#FFD6D6] space-y-3">
                <div className="flex items-center gap-3">
                  <MascotBunny size={42} />
                  <div>
                    <div className="font-cute text-sm sm:text-base font-bold text-[#B91C1C]">
                      🐰 꼼꼼이 토끼의 안심 주의사항
                    </div>
                    <p className="text-[11px] text-[#DC2626]">초보자가 자주 실수하는 포인트예요!</p>
                  </div>
                </div>
                <ul className="space-y-1.5 text-xs text-[#991B1B] pl-1">
                  {currentStep.commonMistakes.map((mistake, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#EF4444] font-bold">⚠️</span>
                      <span className="font-medium">{mistake}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Visual Weaver Simulator & Interactive Tools (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Materials & Tools checklist */}
              <div className="p-4 rounded-2xl bg-[#F8FAFD] border border-[#E2E8F0]">
                <h4 className="text-xs font-bold text-[#0F243E] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <Scissors className="w-3.5 h-3.5 text-[#0284C7]" />
                  이 단계 필요 재료 및 도구
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#475569]">
                  <div>
                    <span className="font-semibold text-[#0284C7] block mb-1">소재 (환심)</span>
                    <ul className="space-y-1">
                      {currentStep.materials.map((m, idx) => (
                        <li key={idx} className="flex items-center gap-1 text-[11px]">
                          <Check className="w-3 h-3 text-[#059669]" /> {m}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="font-semibold text-[#0284C7] block mb-1">작업 도구</span>
                    <ul className="space-y-1">
                      {currentStep.tools.map((t, idx) => (
                        <li key={idx} className="flex items-center gap-1 text-[11px]">
                          <Check className="w-3 h-3 text-[#059669]" /> {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Special Feature 1: Step 1 Soaking Timer */}
              {activeStepIndex === 0 && (
                <div className="p-5 sm:p-6 rounded-3xl bg-white border-2 border-[#BFDBFE] shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <MascotKitten size={36} />
                      <span className="font-cute font-bold text-base text-[#0F243E]">
                        냥이와 함께 10분 불림 타이머 ⏰
                      </span>
                    </div>
                    <span className="text-[11px] px-3 py-1 rounded-full bg-[#E0F2FE] text-[#0369A1] font-bold border border-[#BAE6FD]">
                      따뜻한 물 35~40℃
                    </span>
                  </div>

                  <div className="text-center py-4 bg-[#F0F9FF] rounded-3xl border border-[#BAE6FD] shadow-inner mb-4">
                    <div className={`font-cute text-4xl sm:text-5xl font-bold tracking-wider ${
                      timerFinished ? 'text-[#DC2626] animate-bounce' : 'text-[#0284C7]'
                    }`}>
                      {formatTime(timerSeconds)}
                    </div>
                    <p className="text-xs text-[#475569] mt-1.5 px-4 font-medium">
                      {timerFinished 
                        ? '🎉 와아! 환심이 찰랑찰랑 부드러워졌어요! 젖은 수건으로 감싸주세요.' 
                        : isTimerRunning 
                        ? '🐾 물이 쏙쏙 스며들고 있어요... 잠시 스트레칭 타임!' 
                        : '아래 시작 버튼을 누르고 대야에 환심을 퐁당 담가주세요.'}
                    </p>
                  </div>

                  {/* Preset Buttons */}
                  <div className="flex items-center justify-center gap-2 mb-4">
                    {[
                      { label: '5분 (얇은 1.5mm)', val: 300 },
                      { label: '10분 (표준 2.0mm)', val: 600 },
                      { label: '15분 (도톰 2.5mm)', val: 900 }
                    ].map((item) => (
                      <button
                        key={item.val}
                        onClick={() => resetTimer(item.val)}
                        className={`text-[11px] px-3 py-1.5 rounded-full border font-bold transition cursor-pointer active:scale-95 ${
                          selectedDuration === item.val
                            ? 'bg-[#0284C7] text-white border-[#0284C7] shadow-2xs'
                            : 'bg-white text-[#475569] border-[#BFDBFE] hover:bg-[#EFF6FF]'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>

                  {/* Timer Controls */}
                  <div className="flex items-center justify-center gap-3">
                    <button
                      id="timer-start-toggle-btn"
                      onClick={toggleTimer}
                      className={`flex items-center gap-1.5 px-6 py-3 rounded-full font-cute text-sm shadow-sm transition cursor-pointer active:scale-95 ${
                        isTimerRunning
                          ? 'bg-[#0369A1] hover:bg-[#075985] text-white'
                          : 'bg-[#0284C7] hover:bg-[#0369A1] text-white'
                      }`}
                    >
                      {isTimerRunning ? (
                        <>
                          <Pause className="w-4 h-4" /> 일시정지
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 fill-current" /> 타이머 시작하기!
                        </>
                      )}
                    </button>

                    <button
                      id="timer-reset-btn"
                      onClick={() => resetTimer()}
                      className="p-3 rounded-full border border-[#BAE6FD] bg-white hover:bg-[#EFF6FF] text-[#0284C7] transition cursor-pointer active:scale-95"
                      title="타이머 초기화"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Visual Weave Structure Diagram */}
              <div className="p-4 sm:p-5 rounded-3xl bg-white border border-[#E2E8F0]">
                <h4 className="text-xs font-bold text-[#0F243E] mb-2 flex items-center justify-between">
                  <span>공법 도해 시뮬레이터 ({currentStep.weaveType})</span>
                  <span className="text-[10px] text-[#0284C7] bg-[#EFF6FF] border border-[#BFDBFE] px-2 py-0.5 rounded-full font-medium">
                    원형 보울 단면
                  </span>
                </h4>

                {/* SVG Visual Diagrams matching each step */}
                <div className="w-full h-52 bg-[#F8FAFD] rounded-2xl border border-[#E2E8F0] flex items-center justify-center p-3 relative overflow-hidden">
                  {activeStepIndex === 0 && (
                    <div className="text-center space-y-2">
                      <div className="relative inline-block">
                        <div className="w-24 h-24 rounded-full border-4 border-dashed border-[#0284C7] flex items-center justify-center bg-sky-50 animate-pulse">
                          <Droplets className="w-10 h-10 text-[#0284C7]" />
                        </div>
                        <span className="absolute -bottom-1 -right-1 bg-[#0284C7] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                          40℃
                        </span>
                      </div>
                      <p className="text-xs text-[#475569] font-medium">
                        환심 코일 원형 침수 (물속에 완전히 잠김)
                      </p>
                    </div>
                  )}

                  {activeStepIndex === 1 && (
                    <svg viewBox="0 0 200 200" className="w-44 h-44">
                      {/* Cross base spokes */}
                      <line x1="100" y1="20" x2="100" y2="180" stroke="#38BDF8" strokeWidth="5" strokeLinecap="round" />
                      <line x1="20" y1="100" x2="180" y2="100" stroke="#38BDF8" strokeWidth="5" strokeLinecap="round" />
                      <line x1="43" y1="43" x2="157" y2="157" stroke="#7DD3FC" strokeWidth="3.5" strokeLinecap="round" />
                      <line x1="43" y1="157" x2="157" y2="43" stroke="#7DD3FC" strokeWidth="3.5" strokeLinecap="round" />
                      {/* Weaving spiral */}
                      <circle cx="100" cy="100" r="22" fill="none" stroke="#0284C7" strokeWidth="2.5" strokeDasharray="4 2" />
                      <circle cx="100" cy="100" r="44" fill="none" stroke="#0369A1" strokeWidth="3" />
                      <circle cx="100" cy="100" r="66" fill="none" stroke="#0284C7" strokeWidth="2.5" strokeDasharray="6 3" />
                      <text x="100" y="104" textAnchor="middle" fontSize="10" fill="#0F243E" fontWeight="bold">중심점</text>
                    </svg>
                  )}

                  {activeStepIndex === 2 && (
                    /* Gentle 60 degree bowl curve, not 90 degree bag upright */
                    <svg viewBox="0 0 200 200" className="w-44 h-44">
                      {/* Flat base */}
                      <ellipse cx="100" cy="155" rx="60" ry="16" fill="#E0F2FE" stroke="#0284C7" strokeWidth="2" />
                      {/* Curved bowl contour lines */}
                      <path d="M 40 155 Q 35 110 15 65" fill="none" stroke="#0284C7" strokeWidth="3.5" strokeLinecap="round" />
                      <path d="M 60 155 Q 58 110 45 65" fill="none" stroke="#0284C7" strokeWidth="3" strokeLinecap="round" />
                      <path d="M 80 155 Q 82 110 75 65" fill="none" stroke="#0284C7" strokeWidth="3" strokeLinecap="round" />
                      <path d="M 120 155 Q 118 110 125 65" fill="none" stroke="#0284C7" strokeWidth="3" strokeLinecap="round" />
                      <path d="M 140 155 Q 142 110 155 65" fill="none" stroke="#0284C7" strokeWidth="3" strokeLinecap="round" />
                      <path d="M 160 155 Q 165 110 185 65" fill="none" stroke="#0284C7" strokeWidth="3.5" strokeLinecap="round" />
                      {/* Base twining */}
                      <ellipse cx="100" cy="154" rx="62" ry="15" fill="none" stroke="#0369A1" strokeWidth="3.5" strokeDasharray="4 2" />
                      <text x="100" y="110" textAnchor="middle" fontSize="10" fill="#0284C7" fontWeight="bold">
                        완만한 60° 보울 곡선
                      </text>
                    </svg>
                  )}

                  {activeStepIndex === 3 && (
                    <svg viewBox="0 0 200 200" className="w-44 h-44">
                      {/* Side wall plain weave simulation */}
                      {[-55, -35, -15, 5, 25, 45].map((offset, i) => (
                        <line key={i} x1={100 + offset} y1="30" x2={100 + offset} y2="170" stroke="#BAE6FD" strokeWidth="3.5" />
                      ))}
                      {[50, 75, 100, 125, 150].map((y, rowIdx) => (
                        <path
                          key={rowIdx}
                          d={`M 35 ${y} Q 60 ${y + (rowIdx % 2 ? 6 : -6)}, 85 ${y} T 135 ${y} T 170 ${y}`}
                          fill="none"
                          stroke="#0284C7"
                          strokeWidth="4.5"
                          strokeLinecap="round"
                        />
                      ))}
                      <text x="100" y="185" textAnchor="middle" fontSize="9" fill="#475569" fontWeight="bold">
                        촘촘한 밀도 다지기 상하엮기
                      </text>
                    </svg>
                  )}

                  {activeStepIndex === 4 && (
                    /* Coiled round rim like the photo */
                    <svg viewBox="0 0 200 200" className="w-44 h-44">
                      <path d="M 25 100 Q 100 120 175 100" fill="none" stroke="#E0F2FE" strokeWidth="12" strokeLinecap="round" />
                      {/* Coiled cord stitches */}
                      {[30, 45, 60, 75, 90, 105, 120, 135, 150, 165].map((x, i) => (
                        <ellipse
                          key={i}
                          cx={x}
                          cy="98"
                          rx="6"
                          ry="12"
                          fill="none"
                          stroke="#0284C7"
                          strokeWidth="3.5"
                          transform={`rotate(-20 ${x} 98)`}
                        />
                      ))}
                      <text x="100" y="145" textAnchor="middle" fontSize="10" fill="#0284C7" fontWeight="bold">
                        도톰한 둥근 롤 테두리 (사진 상품 동일)
                      </text>
                    </svg>
                  )}

                  {activeStepIndex === 5 && (
                    <div className="text-center space-y-2">
                      <div className="w-20 h-20 mx-auto rounded-full bg-white border-2 border-[#0284C7] flex items-center justify-center shadow-xs">
                        <Sparkles className="w-9 h-9 text-[#38BDF8]" />
                      </div>
                      <p className="text-xs font-bold text-[#0F243E]">
                        천연 호두오일 태닝 코팅 완료
                      </p>
                      <p className="text-[11px] text-[#64748B]">
                        부드럽고 윤기나는 내추럴 스카이 피니시
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Quick links banner */}
              <div className="p-4 rounded-2xl bg-[#F0F9FF] border border-[#BAE6FD] flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-[#0F243E] block">내 보울 크기에 맞는 날대 길이는?</span>
                  <span className="text-[#64748B]">지름과 높이만 넣으면 자동 계산됩니다.</span>
                </div>
                <button
                  id="guide-to-calc-btn"
                  onClick={onOpenCalculator}
                  className="px-3.5 py-2 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold shrink-0 transition cursor-pointer shadow-xs"
                >
                  계산기 열기
                </button>
              </div>

            </div>

          </div>

          {/* Navigation Footer for Steps */}
          <div className="bg-[#F8FAFD] border-t border-[#E2E8F0] px-6 py-4 flex items-center justify-between">
            <button
              id="guide-prev-step-btn"
              onClick={() => setActiveStepIndex(Math.max(0, activeStepIndex - 1))}
              disabled={activeStepIndex === 0}
              className="flex items-center gap-1.5 text-xs font-medium text-[#64748B] disabled:opacity-40 disabled:cursor-not-allowed hover:text-[#0F243E] cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              이전 단계
            </button>

            <span className="text-xs text-[#0284C7] font-semibold font-mono">
              STEP {activeStepIndex + 1} / {CRAFT_STEPS.length}
            </span>

            {activeStepIndex < CRAFT_STEPS.length - 1 ? (
              <button
                id="guide-next-step-btn"
                onClick={() => setActiveStepIndex(activeStepIndex + 1)}
                className="flex items-center gap-1.5 text-xs font-bold text-[#0284C7] hover:text-[#0369A1] cursor-pointer"
              >
                다음 단계
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                id="guide-finish-all-btn"
                onClick={() => {
                  setCompletedSteps([0, 1, 2, 3, 4, 5]);
                  confetti({ particleCount: 120, spread: 90 });
                }}
                className="flex items-center gap-1 px-4 py-2 rounded-xl bg-[#0284C7] text-white text-xs font-bold hover:bg-[#0369A1] transition cursor-pointer shadow-xs"
              >
                🎉 6단계 전체 완주 축하
              </button>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
