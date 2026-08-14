'use client';

import { useState } from 'react';
import { Search, Command, ArrowRight } from 'lucide-react';

export function CommandPaletteInteractiveDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex flex-col items-center gap-2 text-xs">
      <button
        onClick={() => setIsOpen(true)}
        className="w-full flex items-center justify-between px-3 py-2 bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/80 rounded-xl text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition"
      >
        <div className="flex items-center gap-2">
          <Search className="w-3.5 h-3.5" />
          <span>단축키로 컴포넌트 탐색...</span>
        </div>
        <kbd className="px-1.5 py-0.5 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded text-[10px] font-mono text-zinc-700 dark:text-zinc-300">
          ⌘K
        </kbd>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-start justify-center pt-16 p-4">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl max-w-xs w-full shadow-2xl overflow-hidden animate-fade-in text-xs">
            <div className="flex items-center gap-2 p-3 border-b border-zinc-100 dark:border-zinc-800">
              <Command className="w-3.5 h-3.5 text-zinc-400" />
              <input
                type="text"
                placeholder="검색어 입력..."
                className="w-full bg-transparent text-zinc-900 dark:text-zinc-100 focus:outline-none"
                autoFocus
              />
              <button
                onClick={() => setIsOpen(false)}
                className="text-[9px] bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-500"
              >
                ESC
              </button>
            </div>
            <div className="p-1 space-y-0.5">
              <div
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg flex items-center justify-between cursor-pointer text-zinc-800 dark:text-zinc-200"
              >
                <span>Accordion (아코디언)</span>
                <ArrowRight className="w-3 h-3 text-zinc-400" />
              </div>
              <div
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg flex items-center justify-between cursor-pointer text-zinc-800 dark:text-zinc-200"
              >
                <span>Segmented Control</span>
                <ArrowRight className="w-3 h-3 text-zinc-400" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
