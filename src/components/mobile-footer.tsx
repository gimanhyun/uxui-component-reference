'use client';

import { Shirt, FileText, ExternalLink } from 'lucide-react';

export function MobileFooter() {
  return (
    <footer className="mt-12 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-950 py-8 transition-colors">
      <div className="max-w-md mx-auto px-4 text-center space-y-3">
        <div className="flex items-center justify-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 flex items-center justify-center font-bold text-xs">
            <Shirt className="w-3.5 h-3.5" />
          </div>
          <span className="font-extrabold text-xs text-zinc-800 dark:text-zinc-200">
            FitFinder AI • 룩캐치
          </span>
        </div>
        <p className="text-[11px] text-zinc-400 leading-relaxed">
          핀터레스트 & 릴스 캡처 사진 기반 패션 아이템(상의/하의/신발) AI 쇼핑 매처
        </p>
        <div className="pt-2 text-[10px] text-zinc-400">
          Next.js 14 + Tailwind CSS + Mixpanel Analytics
        </div>
      </div>
    </footer>
  );
}
