'use client';

import { DesignTone } from '@/types/component';
import { SlidersHorizontal, Check } from 'lucide-react';

interface ToneFilterBarProps {
  selectedTone: DesignTone | 'all';
  onSelectTone: (tone: DesignTone | 'all') => void;
  componentCount: number;
}

export function ToneFilterBar({
  selectedTone,
  onSelectTone,
  componentCount
}: ToneFilterBarProps) {
  const toneOptions: { id: DesignTone | 'all'; label: string; desc: string }[] = [
    { id: 'all', label: '전체 (All)', desc: '모든 컴포넌트 10종' },
    { id: 'minimal', label: '미니멀 (Minimal)', desc: '여백과 심플한 라인 중심' },
    { id: 'monotone', label: '모노톤 (Monotone)', desc: '흑백과 회색조의 정갈함' },
    { id: 'sleek', label: '세련된 모던 (Sleek)', desc: '세련된 마이크로 모션' },
    { id: 'neobrutalism', label: '네오브루탈리즘', desc: '두꺼운 테두리 및 그림자' },
    { id: 'dark', label: '다크모드 (Dark)', desc: '어두운 테마 전용 톤' }
  ];

  return (
    <div className="w-full py-4 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-950 sticky top-16 z-30 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        {/* 필터 제목 및 아이콘 */}
        <div className="flex items-center gap-2 shrink-0">
          <SlidersHorizontal className="w-4 h-4 text-zinc-500" />
          <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100">디자인 톤 필터:</span>
          <span className="text-[11px] px-2 py-0.5 bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 rounded-full font-mono">
            {componentCount}개의 결과
          </span>
        </div>

        {/* 필터 칩 스크롤 */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
          {toneOptions.map((tone) => {
            const isSelected = selectedTone === tone.id;
            return (
              <button
                key={tone.id}
                onClick={() => onSelectTone(tone.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 border ${
                  isSelected
                    ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 border-zinc-900 dark:border-zinc-100 shadow-sm'
                    : 'bg-zinc-50 dark:bg-zinc-900/60 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                }`}
                title={tone.desc}
              >
                {isSelected && <Check className="w-3.5 h-3.5" />}
                <span>{tone.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
