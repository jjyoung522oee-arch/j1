/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { InteractiveGuide } from './components/InteractiveGuide';
import { ToolsAndMaterialsGuide } from './components/ToolsAndMaterialsGuide';
import { NestingBowlViewer } from './components/NestingBowlViewer';
import { BasketCalculator } from './components/BasketCalculator';
import { TroubleshooterFaq } from './components/TroubleshooterFaq';
import { StudioLocationMap } from './components/StudioLocationMap';
import { TopVideoSection } from './components/TopVideoSection';
import { Footer } from './components/Footer';
import { BookOpen, Layers, Calculator, ArrowRight, Wrench, Sparkles, MapPin } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('guide');
  const [calculatorPreset, setCalculatorPreset] = useState<{ diameter: number; height: number } | null>(null);

  // Navigation handlers
  const handleStartGuide = () => {
    setActiveTab('guide');
    const el = document.getElementById('interactive-guide-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 380, behavior: 'smooth' });
    }
  };

  const handleOpenCalculator = (preset?: { diameter: number; height: number }) => {
    if (preset) {
      setCalculatorPreset(preset);
    }
    setActiveTab('calculator');
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  const handleExploreTools = () => {
    setActiveTab('tools');
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  const handleOpenNesting = () => {
    setActiveTab('nesting');
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  const handleOpenLocation = () => {
    setActiveTab('location');
    window.scrollTo({ top: 380, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F9FD] text-[#0F243E]">
      {/* Header with craft guide focus */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 380, behavior: 'smooth' });
        }}
        onStartGuide={handleStartGuide}
      />

      {/* Top Video Banner & Player (홈페이지 맨 앞 YouTube 링크) */}
      <TopVideoSection onStartGuide={handleStartGuide} />

      {/* Hero Section introducing the basket crafting process */}
      <HeroSection
        onStartGuide={handleStartGuide}
        onOpenCalculator={() => handleOpenCalculator()}
        onExploreTools={handleExploreTools}
        onViewNestingShowcase={handleOpenNesting}
        onOpenLocation={handleOpenLocation}
      />

      {/* Main Content Areas based on Active Tab */}
      <main className="flex-1">
        {/* Tab 1: Step-by-Step Interactive Guide */}
        {activeTab === 'guide' && (
          <div id="interactive-guide-section">
            <InteractiveGuide
              onOpenCalculator={() => handleOpenCalculator()}
              onExploreTools={handleExploreTools}
              onViewNesting={handleOpenNesting}
            />
          </div>
        )}

        {/* Tab 2: Tools and Materials Guide */}
        {activeTab === 'tools' && (
          <ToolsAndMaterialsGuide
            onStartGuide={handleStartGuide}
            onOpenCalculator={() => handleOpenCalculator()}
          />
        )}

        {/* Tab 3: Dimensions & Spokes Calculator */}
        {activeTab === 'calculator' && (
          <BasketCalculator
            onStartGuide={handleStartGuide}
            presetOverride={calculatorPreset}
          />
        )}

        {/* Tab 4: 4-Tier Nesting Bowl Specifications from the Photo */}
        {activeTab === 'nesting' && (
          <NestingBowlViewer
            onStartCrafting={handleStartGuide}
            onOpenCalculatorWithPreset={(dia, h) => handleOpenCalculator({ diameter: dia, height: h })}
          />
        )}

        {/* Tab 5: Studio Location & Map (Asan) */}
        {activeTab === 'location' && (
          <StudioLocationMap />
        )}

        {/* Tab 6: Troubleshooting & Crafting Wisdom FAQ */}
        {activeTab === 'faq' && (
          <TroubleshooterFaq />
        )}

        {/* Contextual Bottom Helper Banner */}
        <section className="bg-[#F4F9FD] py-8 border-t border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#BFDBFE] shadow-2xs flex flex-col md:flex-row items-center justify-between gap-6 text-left">
              <div className="space-y-1.5 max-w-2xl">
                <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#0284C7] uppercase tracking-wider bg-[#E0F2FE] px-2.5 py-0.5 rounded-full border border-[#BAE6FD]">
                  <Sparkles className="w-3 h-3 text-[#38BDF8]" />
                  라탄 공예 제작 안내 🧺
                </div>
                <h3 className="font-cute text-lg sm:text-xl font-bold text-[#0F243E]">
                  {activeTab === 'guide'
                    ? '내 보울 크기에 맞는 날대 길이가 궁금하신가요?'
                    : '사진 속 원형 라탄 보울 6단계 제작과정으로 시작해보세요'}
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed break-keep">
                  {activeTab === 'guide'
                    ? '원하는 지름과 높이만 입력하면 날대 자를 길이와 사릿대 필요량을 오차 없이 즉시 계산해 드립니다.'
                    : '물 불림부터 십자 바닥짜기, 완만 사발 곡선, 도톰한 롤 테두리 마무르기까지 전 공정을 누구나 따라 할 수 있습니다.'}
                </p>
              </div>
              
              <div className="flex items-center gap-3 shrink-0">
                {activeTab === 'guide' ? (
                  <button
                    onClick={() => handleOpenCalculator()}
                    className="px-5 py-3 rounded-xl bg-[#0F243E] hover:bg-[#1E3A5F] text-white font-bold text-xs sm:text-sm transition cursor-pointer shadow-2xs flex items-center gap-2"
                  >
                    <Calculator className="w-4 h-4 text-[#BAE6FD]" />
                    <span>규격 계산기 열기</span>
                  </button>
                ) : (
                  <button
                    onClick={handleStartGuide}
                    className="px-5 py-3 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold text-xs sm:text-sm transition cursor-pointer shadow-2xs flex items-center gap-2"
                  >
                    <BookOpen className="w-4 h-4 text-[#E0F2FE]" />
                    <span>6단계 제작과정 보기</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer onOpenLocation={handleOpenLocation} />
    </div>
  );
}
