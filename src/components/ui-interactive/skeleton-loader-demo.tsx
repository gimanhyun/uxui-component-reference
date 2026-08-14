'use client';

import { useState } from 'react';
import { RefreshCw } from 'lucide-react';

export function SkeletonLoaderInteractiveDemo() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="w-full space-y-2.5 text-xs">
      <div className="flex justify-between items-center">
        <span className="text-[11px] text-zinc-500 font-medium">상태 제어</span>
        <button
          onClick={() => setLoading(!loading)}
          className="flex items-center gap-1 text-[11px] text-zinc-900 dark:text-zinc-100 font-bold hover:underline"
        >
          <RefreshCw className={`w-3 h-3 ${loading ? 'animate-spin' : ''}`} />
          <span>{loading ? '데이터로드 완료' : '스켈레톤으로 전환'}</span>
        </button>
      </div>

      {loading ? (
        <div className="p-3 border border-zinc-200 dark:border-zinc-800 rounded-xl space-y-2 animate-pulse bg-zinc-50/50 dark:bg-zinc-900/20">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-zinc-200 dark:bg-zinc-800 rounded-full" />
            <div className="space-y-1 flex-1">
              <div className="h-3 bg-zinc-200 dark:bg-zinc-800 rounded w-1/2" />
              <div className="h-2 bg-zinc-200 dark:bg-zinc-800 rounded w-1/4" />
            </div>
          </div>
          <div className="h-6 bg-zinc-200 dark:bg-zinc-800 rounded-lg w-full" />
        </div>
      ) : (
        <div className="p-3 border border-zinc-200 dark:border-zinc-800 rounded-xl space-y-1.5 bg-white dark:bg-zinc-950">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full flex items-center justify-center font-bold text-[10px]">
              UI
            </div>
            <div>
              <h5 className="font-bold text-zinc-900 dark:text-zinc-100">디자인 레퍼런스 데이터</h5>
              <p className="text-[10px] text-zinc-500">방금 로드됨</p>
            </div>
          </div>
          <p className="text-[11px] text-zinc-600 dark:text-zinc-400">실제 UI 컴포넌트 프리뷰가 출력됩니다.</p>
        </div>
      )}
    </div>
  );
}
