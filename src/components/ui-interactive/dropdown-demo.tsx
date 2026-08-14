'use client';

import { useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';

export function DropdownInteractiveDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('미니멀 톤 (Minimal)');

  const options = ['미니멀 톤 (Minimal)', '모노톤 (Monotone)', '세련된 모던 (Sleek)'];

  return (
    <div className="w-full relative text-xs">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-3 py-2 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm hover:bg-zinc-50 dark:hover:bg-zinc-900 transition"
      >
        <span className="font-medium text-zinc-900 dark:text-zinc-100">{selected}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-zinc-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 mt-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-xl z-20 p-1 space-y-0.5 animate-fade-in">
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => {
                setSelected(opt);
                setIsOpen(false);
              }}
              className="w-full flex items-center justify-between px-3 py-1.5 rounded-lg text-left text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
            >
              <span>{opt}</span>
              {selected === opt && <Check className="w-3.5 h-3.5 text-zinc-900 dark:text-zinc-100" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
