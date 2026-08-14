'use client';

import { useState } from 'react';

export function TabBarInteractiveDemo() {
  const [active, setActive] = useState('design');

  const tabs = [
    { id: 'overview', label: '개요' },
    { id: 'design', label: '디자인 톤' },
    { id: 'guideline', label: '가이드' }
  ];

  return (
    <div className="w-full text-xs">
      <div className="border-b border-zinc-200 dark:border-zinc-800 flex gap-4">
        {tabs.map((t) => {
          const isSelected = active === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`pb-2 px-1 font-semibold border-b-2 transition-all ${
                isSelected
                  ? 'border-zinc-900 text-zinc-900 dark:border-zinc-100 dark:text-zinc-100'
                  : 'border-transparent text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300'
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
