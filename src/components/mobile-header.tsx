'use client';

import { useState, useEffect } from 'react';
import { Sparkles, Heart, Sun, Moon, Sparkle, Shirt } from 'lucide-react';
import { trackEvent } from '@/lib/mixpanel';

interface MobileHeaderProps {
  scrapCount: number;
  onOpenLookbook: () => void;
}

export function MobileHeader({ scrapCount, onOpenLookbook }: MobileHeaderProps) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
      trackEvent('Theme Switched', { mode: 'light' });
    } else {
      document.documentElement.classList.add('dark');
      setIsDark(true);
      trackEvent('Theme Switched', { mode: 'dark' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md transition-colors">
      <div className="max-w-md mx-auto px-4 h-15 flex items-center justify-between">
        {/* 로고 영역 */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 flex items-center justify-center font-extrabold text-sm shadow-md">
            <Shirt className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-zinc-900 dark:text-zinc-100 text-base tracking-tight">
                FitFinder <span className="text-coral-500 text-amber-500">AI</span>
              </span>
              <span className="px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-amber-100 text-amber-900 dark:bg-amber-900/60 dark:text-amber-300">
                캡처 매칭
              </span>
            </div>
            <p className="text-[10px] text-zinc-400 font-medium">핀터레스트·릴스 캡처 상/하의/신발 쇼핑몰 연결</p>
          </div>
        </div>

        {/* 우측 액션들 */}
        <div className="flex items-center gap-2">
          {/* 내 룩북 보관함 버튼 */}
          <button
            onClick={() => {
              trackEvent('Lookbook Drawer Opened');
              onOpenLookbook();
            }}
            className="relative p-2 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 transition"
            title="내 룩북 보관함"
          >
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500/20" />
            {scrapCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 text-white rounded-full text-[9px] font-bold flex items-center justify-center shadow-sm">
                {scrapCount}
              </span>
            )}
          </button>

          {/* 테마 토글 */}
          <button
            onClick={toggleTheme}
            className="p-2 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 transition"
            title="화이트 / 다크 모드 토글"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-zinc-700" />}
          </button>
        </div>
      </div>
    </header>
  );
}
