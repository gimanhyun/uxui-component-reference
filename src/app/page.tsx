'use client';

import { useState, useMemo } from 'react';
import { COMPONENTS_DATA } from '@/data/components-data';
import { UIComponentData, DesignTone } from '@/types/component';
import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { ToneFilterBar } from '@/components/tone-filter-bar';
import { SearchInput } from '@/components/search-input';
import { ComponentCard } from '@/components/component-card';
import { AIIdentifierModal } from '@/components/ai-identifier-modal';
import { ComponentDetailModal } from '@/components/component-detail-modal';
import { Footer } from '@/components/footer';
import { CommandPaletteInteractiveDemo } from '@/components/ui-interactive/command-palette-demo';
import { Search, Sparkles, Filter, RefreshCw } from 'lucide-react';

export default function Home() {
  const [selectedTone, setSelectedTone] = useState<DesignTone | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);
  const [aiInitialText, setAiInitialText] = useState('');
  const [selectedComponentForDetail, setSelectedComponentForDetail] = useState<UIComponentData | null>(null);
  const [highlightedCompId, setHighlightedCompId] = useState<string | null>(null);

  // 1. 톤 & 검색어 필터링 알고리즘
  const filteredComponents = useMemo(() => {
    return COMPONENTS_DATA.filter((comp) => {
      // 톤 필터
      if (selectedTone !== 'all' && !comp.tones.includes(selectedTone)) {
        return false;
      }

      // 검색어 필터
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const nameMatch = comp.name.toLowerCase().includes(q);
        const koreanMatch = comp.koreanName.toLowerCase().includes(q);
        const descMatch = comp.shortDescription.toLowerCase().includes(q);
        const synonymMatch = comp.synonyms.some((s) => s.toLowerCase().includes(q));

        return nameMatch || koreanMatch || descMatch || synonymMatch;
      }

      return true;
    });
  }, [selectedTone, searchQuery]);

  // 검색 시 매칭된 연관 동의어 추출
  const activeSynonyms = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    const syns: string[] = [];
    COMPONENTS_DATA.forEach((c) => {
      c.synonyms.forEach((s) => {
        if (s.toLowerCase().includes(q) && !syns.includes(s)) {
          syns.push(s);
        }
      });
    });
    return syns;
  }, [searchQuery]);

  const handleOpenAIModalWithText = (text?: string) => {
    setAiInitialText(text || '');
    setIsAIModalOpen(true);
  };

  const handleSelectComponentFromAI = (comp: UIComponentData) => {
    setHighlightedCompId(comp.id);
    setSelectedTone('all');
    setSearchQuery('');
    setTimeout(() => {
      const el = document.getElementById(`comp-${comp.id}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors">
      {/* 헤더 */}
      <Header
        onOpenAIModal={() => handleOpenAIModalWithText()}
        onOpenCommandPalette={() => handleOpenAIModalWithText('빠른 단축키 검색')}
      />

      {/* 히어로 영역 */}
      <HeroSection
        onOpenAIModalWithText={handleOpenAIModalWithText}
        onSelectTag={(tag) => setSearchQuery(tag)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* 톤 필터 바 */}
      <ToneFilterBar
        selectedTone={selectedTone}
        onSelectTone={(tone) => setSelectedTone(tone)}
        componentCount={filteredComponents.length}
      />

      {/* 메인 레퍼런스 컴포넌트 목록 영역 */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        {/* 검색바 */}
        <SearchInput
          query={searchQuery}
          setQuery={setSearchQuery}
          activeSynonyms={activeSynonyms}
        />

        {/* 결과 카운트 & 필터 초기화 */}
        {(selectedTone !== 'all' || searchQuery) && (
          <div className="flex items-center justify-between mb-6 text-xs text-zinc-500 bg-zinc-50 dark:bg-zinc-900/60 p-3 rounded-2xl border border-zinc-200/60 dark:border-zinc-800">
            <div>
              필터 적용 중: <span className="font-bold text-zinc-800 dark:text-zinc-200">톤 [{selectedTone}]</span>, 검색어 [<span className="font-bold text-zinc-800 dark:text-zinc-200">{searchQuery || '전체'}</span>] ({filteredComponents.length}개 검색됨)
            </div>
            <button
              onClick={() => {
                setSelectedTone('all');
                setSearchQuery('');
              }}
              className="flex items-center gap-1 text-zinc-900 dark:text-zinc-100 font-bold hover:underline"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>필터 초기화</span>
            </button>
          </div>
        )}

        {/* 컴포넌트 카드 그리드 (반응형 1-2-3 열) */}
        {filteredComponents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredComponents.map((comp) => (
              <ComponentCard
                key={comp.id}
                component={comp}
                onOpenDetail={(c) => setSelectedComponentForDetail(c)}
                isHighlighted={highlightedCompId === comp.id}
              />
            ))}
          </div>
        ) : (
          /* 검색 결과가 없을 때 */
          <div className="py-16 text-center border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 bg-zinc-50/50 dark:bg-zinc-900/30">
            <Search className="w-10 h-10 text-zinc-400 mx-auto mb-3" />
            <h3 className="text-base font-bold text-zinc-800 dark:text-zinc-200">
              일치하는 UI 컴포넌트를 찾을 수 없습니다
            </h3>
            <p className="text-xs text-zinc-500 mt-1 max-w-sm mx-auto">
              검색어나 디자인 톤 필터를 변경해보거나, LLM 식별기에 직접 묘사를 입력하여 명칭을 찾아보세요.
            </p>
            <div className="mt-5 flex items-center justify-center gap-3">
              <button
                onClick={() => {
                  setSelectedTone('all');
                  setSearchQuery('');
                }}
                className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-semibold rounded-xl hover:bg-zinc-200 transition"
              >
                전체 결과 보기
              </button>
              <button
                onClick={() => handleOpenAIModalWithText(searchQuery)}
                className="px-4 py-2 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 text-xs font-semibold rounded-xl hover:opacity-90 transition flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300 dark:text-amber-600" />
                <span>AI로 이 검색어 분석하기</span>
              </button>
            </div>
          </div>
        )}
      </main>

      {/* AI 명칭 식별 모달 */}
      <AIIdentifierModal
        isOpen={isAIModalOpen}
        onClose={() => setIsAIModalOpen(false)}
        initialText={aiInitialText}
        onSelectComponent={handleSelectComponentFromAI}
      />

      {/* 컴포넌트 코드 & 가이드라인 상세 모달 */}
      <ComponentDetailModal
        component={selectedComponentForDetail}
        onClose={() => setSelectedComponentForDetail(null)}
      />

      {/* 푸터 */}
      <Footer />
    </div>
  );
}
