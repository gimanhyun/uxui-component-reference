'use client';

import { Layers, FileText, ExternalLink, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="mt-20 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-950 py-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 flex items-center justify-center font-bold">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <p className="font-bold text-zinc-800 dark:text-zinc-200">UX/UI 컴포넌트 레퍼런스</p>
            <p className="text-[11px]">5 Lenses 기반 자가진단 및 AI 명칭 탐색 플랫폼</p>
          </div>
        </div>

        <div className="flex items-center gap-6 text-[11px]">
          <span className="flex items-center gap-1 font-medium text-zinc-700 dark:text-zinc-300">
            Next.js 14 + Tailwind CSS Built
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="text-zinc-400">단축키: <kbd className="px-1 py-0.5 bg-zinc-200 dark:bg-zinc-800 rounded font-mono">⌘K</kbd> 빠른검색</span>
        </div>
      </div>
    </footer>
  );
}
