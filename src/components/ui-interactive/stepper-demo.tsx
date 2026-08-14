'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';

export function StepperInteractiveDemo() {
  const [currentStep, setCurrentStep] = useState(2);

  const steps = [
    { num: 1, label: '탐색' },
    { num: 2, label: '식별' },
    { num: 3, label: '적용' }
  ];

  return (
    <div className="w-full space-y-3">
      <div className="flex items-center justify-between relative px-2">
        <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-zinc-200 dark:bg-zinc-800 -translate-y-1/2 z-0" />
        {steps.map((step) => {
          const isDone = step.num < currentStep;
          const isCurrent = step.num === currentStep;

          return (
            <button
              key={step.num}
              onClick={() => setCurrentStep(step.num)}
              className="relative z-10 flex flex-col items-center gap-1 focus:outline-none"
            >
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  isDone
                    ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
                    : isCurrent
                    ? 'bg-zinc-900 text-white ring-2 ring-zinc-400 dark:ring-zinc-600 dark:bg-zinc-100 dark:text-zinc-900'
                    : 'bg-zinc-100 text-zinc-400 dark:bg-zinc-800 dark:text-zinc-500'
                }`}
              >
                {isDone ? <Check className="w-3.5 h-3.5" /> : step.num}
              </div>
              <span className="text-[10px] font-medium text-zinc-600 dark:text-zinc-400">{step.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
