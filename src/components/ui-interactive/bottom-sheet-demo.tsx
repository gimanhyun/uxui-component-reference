'use client';

import { useState } from 'react';
import { X, Check } from 'lucide-react';

export function BottomSheetInteractiveDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex justify-center">
      <button
        onClick={() => setIsOpen(true)}
        className="px-3.5 py-2 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 rounded-xl text-xs font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
      >
        모바일 바텀 시트 열기
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-end flex-col animate-fade-in">
          <div className="bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 rounded-t-3xl p-5 shadow-2xl max-w-sm mx-auto w-full animate-slide-up text-xs">
            <div className="w-10 h-1 bg-zinc-300 dark:bg-zinc-700 rounded-full mx-auto mb-3" />
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-bold text-sm text-zinc-900 dark:text-zinc-100">디자인 톤 필터링 선택</h4>
              <button onClick={() => setIsOpen(false)}>
                <X className="w-4 h-4 text-zinc-400" />
              </button>
            </div>
            <div className="space-y-1.5">
              <div
                onClick={() => setIsOpen(false)}
                className="p-2.5 bg-zinc-100 dark:bg-zinc-800/80 rounded-xl flex items-center justify-between font-semibold cursor-pointer text-zinc-900 dark:text-zinc-100"
              >
                <span>미니멀 (Minimal)</span>
                <Check className="w-3.5 h-3.5" />
              </div>
              <div
                onClick={() => setIsOpen(false)}
                className="p-2.5 hover:bg-zinc-50 dark:hover:bg-zinc-800/40 rounded-xl flex items-center justify-between cursor-pointer text-zinc-600 dark:text-zinc-400"
              >
                <span>모노톤 (Monotone)</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
