'use client';

import { useState } from 'react';
import { CheckCircle, X, Sparkles } from 'lucide-react';

export function ToastInteractiveDemo() {
  const [toastText, setToastText] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastText(msg);
    setTimeout(() => {
      setToastText(null);
    }, 2800);
  };

  return (
    <div className="w-full flex flex-col items-center gap-2">
      <div className="flex gap-2">
        <button
          onClick={() => showToast('레퍼런스 링크가 복사되었습니다!')}
          className="px-3 py-1.5 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 rounded-lg text-xs font-semibold hover:opacity-90 transition"
        >
          복사 토스트 실행
        </button>
        <button
          onClick={() => showToast('새로운 디자인 톤이 적용되었습니다.')}
          className="px-3 py-1.5 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-lg text-xs font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
        >
          필터 토스트
        </button>
      </div>

      {toastText && (
        <div className="w-full mt-2 flex items-center justify-between p-3 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 rounded-xl shadow-lg animate-bounce-subtle text-xs font-medium">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-400 dark:text-emerald-600 shrink-0" />
            <span>{toastText}</span>
          </div>
          <button onClick={() => setToastText(null)} className="opacity-60 hover:opacity-100">
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </div>
  );
}
