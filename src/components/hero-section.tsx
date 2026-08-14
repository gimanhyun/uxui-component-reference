'use client';

import { useState } from 'react';
import { Sparkles, Search, Upload, ArrowRight, Layers, HelpCircle } from 'lucide-react';

interface HeroSectionProps {
  onOpenAIModalWithText: (initialText?: string) => void;
  onSelectTag: (tag: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export function HeroSection({
  onOpenAIModalWithText,
  onSelectTag,
  searchQuery,
  setSearchQuery
}: HeroSectionProps) {
  const [quickInput, setQuickInput] = useState('');

  const quickTags = [
    '아코디언', '모달', '세그먼티드', '토스트', '바텀 시트', '스테퍼', '스켈레톤', '드롭다운', '커맨드 팔레트'
  ];

  const handleAISubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (quickInput.trim()) {
      onOpenAIModalWithText(quickInput);
    }
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-10 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-950/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* 배지 */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-semibold text-zinc-800 dark:text-zinc-200 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>LLM 5 Lenses 기반 UI 명칭 식별 & 레퍼런스 필터</span>
        </div>

        {/* 메인 타이틀 */}
        <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight leading-tight">
          화면 요소 명칭이 떠오르지 않을 때,<br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-400 dark:from-white dark:via-zinc-300 dark:to-zinc-500 bg-clip-text text-transparent">
            AI로 컴포넌트를 정확히 식별하세요
          </span>
        </h1>

        {/* 한 줄 설명 */}
        <p className="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          1~3년차 UX/UI 디자이너를 위한 레퍼런스 플랫폼. 이미지 업로드나 묘사 입력만으로 표준 UI 명칭을 확인하고, 프로젝트 브랜드 톤(미니멀, 모노톤)에 맞는 레퍼런스를 필터링하세요.
        </p>

        {/* AI 식별 빠른 입력 카드 */}
        <div className="mt-8 max-w-2xl mx-auto p-4 sm:p-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-xl">
          <form onSubmit={handleAISubmit} className="flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                value={quickInput}
                onChange={(e) => setQuickInput(e.target.value)}
                placeholder="예: '클릭하면 아래로 접혔다 펼쳐지는 메뉴', '하단 슬라이드 시트'..."
                className="w-full pl-4 pr-10 py-3 text-xs sm:text-sm bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600 transition"
              />
              <HelpCircle className="w-4 h-4 text-zinc-400 absolute right-3.5 top-3.5" />
            </div>

            <button
              type="submit"
              className="px-5 py-3 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 hover:opacity-90 transition shrink-0 shadow-md"
            >
              <Sparkles className="w-4 h-4 text-amber-300 dark:text-amber-600" />
              <span>AI 컴포넌트 식별</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* 이미지 드롭존 바로가기 */}
          <div className="mt-3 flex items-center justify-between text-xs text-zinc-500 pt-3 border-t border-zinc-100 dark:border-zinc-800/80">
            <span className="text-[11px]">이미지로 찾고 싶으신가요?</span>
            <button
              type="button"
              onClick={() => onOpenAIModalWithText()}
              className="flex items-center gap-1.5 text-xs font-semibold text-zinc-900 dark:text-zinc-100 hover:underline"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>UI 캡처 이미지 업로드 분석기 열기</span>
            </button>
          </div>
        </div>

        {/* 빠른 태그 클러스터 */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-1.5 max-w-2xl mx-auto">
          <span className="text-xs text-zinc-400 font-medium mr-1">추천 컴포넌트:</span>
          {quickTags.map((tag) => (
            <button
              key={tag}
              onClick={() => onSelectTag(tag)}
              className="px-2.5 py-1 text-[11px] font-medium bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-lg border border-zinc-200 dark:border-zinc-800 transition"
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
