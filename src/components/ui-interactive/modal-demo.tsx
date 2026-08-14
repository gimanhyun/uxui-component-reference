'use client';

import { useState } from 'react';
import { X, AlertCircle } from 'lucide-react';

export function ModalInteractiveDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex justify-center">
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 rounded-xl text-xs font-semibold hover:opacity-90 transition shadow-sm"
      >
        모달 / 대화상자 인터랙션 테스트
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 max-w-sm w-full shadow-2xl relative text-left">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-2.5 mb-2">
              <div className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-xl text-zinc-900 dark:text-zinc-100">
                <AlertCircle className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-sm text-zinc-900 dark:text-zinc-100">변경사항 저장 확인</h4>
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5">
              수정하신 디자이너 노트가 저장됩니다. 계속 진행하시겠습니까?
            </p>
            <div className="flex justify-end gap-2 text-xs">
              <button
                onClick={() => setIsOpen(false)}
                className="px-3.5 py-1.5 border border-zinc-200 dark:border-zinc-700 rounded-lg text-zinc-600 dark:text-zinc-300 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition"
              >
                취소
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="px-3.5 py-1.5 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg font-medium hover:opacity-90 transition"
              >
                저장하기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
