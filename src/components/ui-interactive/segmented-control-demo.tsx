'use client';

import { useState } from 'react';
import { LayoutGrid, List } from 'lucide-react';

export function SegmentedControlInteractiveDemo() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <div className="w-full flex flex-col items-center gap-3">
      <div className="inline-flex p-1 bg-zinc-100 dark:bg-zinc-800/80 rounded-xl border border-zinc-200/80 dark:border-zinc-700/60 text-xs">
        <button
          onClick={() => setViewMode('grid')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${
            viewMode === 'grid'
              ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-sm'
              : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200'
          }`}
        >
          <LayoutGrid className="w-3.5 h-3.5" />
          <span>그리드 뷰</span>
        </button>
        <button
          onClick={() => setViewMode('list')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${
            viewMode === 'list'
              ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-sm'
              : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200'
          }`}
        >
          <List className="w-3.5 h-3.5" />
          <span>리스트 뷰</span>
        </button>
      </div>

      <div className="w-full p-2 bg-zinc-50 dark:bg-zinc-900/40 rounded-xl border border-dashed border-zinc-200 dark:border-zinc-800 text-[11px] text-zinc-500 text-center">
        현재 선택 모드: <span className="font-bold text-zinc-800 dark:text-zinc-200">{viewMode === 'grid' ? 'Grid Mode' : 'List Mode'}</span>
      </div>
    </div>
  );
}
