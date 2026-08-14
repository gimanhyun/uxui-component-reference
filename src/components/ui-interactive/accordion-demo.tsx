'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function AccordionInteractiveDemo() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = [
    {
      title: '미니멀 톤의 아코디언은 언제 사용하나요?',
      content: '화면 공간을 보존하면서 사용자가 원하는 경우에만 상세 정보를 펼쳐볼 수 있도록 지원할 때 유용합니다.'
    },
    {
      title: '디스클로저(Disclosure)와의 차이점은 무엇인가요?',
      content: '아코디언은 여러 항목의 집합 형태인 경우가 많으며, 하나의 항목이 열릴 때 다른 항목이 닫히는 단일 토글 모드로 확장될 수 있습니다.'
    }
  ];

  return (
    <div className="w-full space-y-2 text-xs">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden bg-white dark:bg-zinc-950 transition-all"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="w-full flex items-center justify-between p-3 text-left font-medium text-zinc-900 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-900/50"
            >
              <span>{item.title}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-zinc-400 transition-transform duration-200 ${
                  isOpen ? 'rotate-180 text-zinc-900 dark:text-zinc-100' : ''
                }`}
              />
            </button>
            {isOpen && (
              <div className="p-3 pt-0 text-zinc-600 dark:text-zinc-400 border-t border-zinc-100 dark:border-zinc-900 mt-1 leading-relaxed">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
