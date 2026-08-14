'use client';

import { useState, useEffect } from 'react';
import { Sparkles, Command, Sun, Moon, Layers } from 'lucide-react';

interface HeaderProps {
  onOpenAIModal: () => void;
  onOpenCommandPalette: () => void;
}

export function Header({ onOpenAIModal, onOpenCommandPalette }: HeaderProps) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // 다크모드 초기화
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* 로고 영역 */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 flex items-center justify-center font-bold text-sm shadow-md">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-zinc-900 dark:text-zinc-100 text-base tracking-tight">
                UX/UI 컴포넌트 레퍼런스
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700">
                5 Lenses AI
              </span>
            </div>
            <p className="text-[11px] text-zinc-500 hidden sm:block">
              1~3년차 UX 디자이너를 위한 AI 명칭 탐색 & 디자인 톤 검색기
            </p>
          </div>
        </div>

        {/* 우측 액션 버튼들 */}
        <div className="flex items-center gap-2.5">
          {/* AI 컴포넌트 식별기 버튼 */}
          <button
            onClick={onOpenAIModal}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 rounded-xl text-xs font-semibold hover:opacity-90 transition shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-yellow-300 dark:text-amber-600" />
            <span className="hidden sm:inline">AI 명칭 식별기</span>
            <span className="sm:hidden">AI 식별</span>
          </button>

          {/* 단축키 검색 버튼 */}
          <button
            onClick={onOpenCommandPalette}
            className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition"
          >
            <Command className="w-3.5 h-3.5" />
            <span>빠른 검색</span>
            <kbd className="px-1.5 py-0.5 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded text-[10px] font-mono text-zinc-600 dark:text-zinc-400">
              ⌘K
            </kbd>
          </button>

          {/* 테마 토글 버튼 */}
          <button
            onClick={toggleTheme}
            className="p-2 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 transition"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-zinc-700" />}
          </button>
        </div>
      </div>
    </header>
  );
}
