'use client';

import { useState } from 'react';
import { UIComponentData } from '@/types/component';
import { Code, Check, ExternalLink, Sparkles, Tag, Info } from 'lucide-react';
import { AccordionInteractiveDemo } from './ui-interactive/accordion-demo';
import { ModalInteractiveDemo } from './ui-interactive/modal-demo';
import { SegmentedControlInteractiveDemo } from './ui-interactive/segmented-control-demo';
import { ToastInteractiveDemo } from './ui-interactive/toast-demo';
import { BottomSheetInteractiveDemo } from './ui-interactive/bottom-sheet-demo';
import { StepperInteractiveDemo } from './ui-interactive/stepper-demo';
import { SkeletonLoaderInteractiveDemo } from './ui-interactive/skeleton-loader-demo';
import { DropdownInteractiveDemo } from './ui-interactive/dropdown-demo';
import { TabBarInteractiveDemo } from './ui-interactive/tab-bar-demo';
import { CommandPaletteInteractiveDemo } from './ui-interactive/command-palette-demo';

interface ComponentCardProps {
  component: UIComponentData;
  onOpenDetail: (comp: UIComponentData) => void;
  isHighlighted?: boolean;
}

export function ComponentCard({ component, onOpenDetail, isHighlighted }: ComponentCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(component.codeSnippet.react);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderInteractiveDemo = () => {
    switch (component.id) {
      case 'accordion':
        return <AccordionInteractiveDemo />;
      case 'modal':
        return <ModalInteractiveDemo />;
      case 'segmented-control':
        return <SegmentedControlInteractiveDemo />;
      case 'toast':
        return <ToastInteractiveDemo />;
      case 'bottom-sheet':
        return <BottomSheetInteractiveDemo />;
      case 'stepper':
        return <StepperInteractiveDemo />;
      case 'skeleton-loader':
        return <SkeletonLoaderInteractiveDemo />;
      case 'dropdown-menu':
        return <DropdownInteractiveDemo />;
      case 'tab-bar':
        return <TabBarInteractiveDemo />;
      case 'command-palette':
        return <CommandPaletteInteractiveDemo />;
      default:
        return null;
    }
  };

  return (
    <div
      id={`comp-${component.id}`}
      className={`group relative bg-white dark:bg-zinc-900 border rounded-3xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between hover:shadow-xl ${
        isHighlighted
          ? 'border-amber-400 dark:border-amber-500 ring-4 ring-amber-400/20 dark:ring-amber-500/20'
          : 'border-zinc-200/80 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600'
      }`}
    >
      {/* 헤더 정보 */}
      <div>
        <div className="flex items-start justify-between gap-2 mb-2">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base sm:text-lg font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
                {component.name}
              </h3>
              <span className="px-2 py-0.5 text-[10px] font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-md">
                {component.category}
              </span>
            </div>
            <p className="text-xs text-zinc-500 font-medium">{component.koreanName}</p>
          </div>

          <button
            onClick={handleCopyCode}
            className="p-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 bg-zinc-50 dark:bg-zinc-800/80 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700/80 transition"
            title="React 코드 스니펫 복사"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Code className="w-4 h-4" />}
          </button>
        </div>

        {/* 한 줄 설명 */}
        <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
          {component.shortDescription}
        </p>

        {/* 톤 태그 바 */}
        <div className="flex flex-wrap gap-1 mb-5">
          {component.tones.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 text-[10px] font-semibold bg-zinc-100/80 dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300 rounded-lg border border-zinc-200/50 dark:border-zinc-700/40"
            >
              #{t}
            </span>
          ))}
        </div>

        {/* 라이브 인터랙티브 데모 영역 */}
        <div className="p-4 bg-zinc-50 dark:bg-zinc-950/70 rounded-2xl border border-zinc-200/60 dark:border-zinc-800/80 min-h-[140px] flex items-center justify-center mb-5">
          {renderInteractiveDemo()}
        </div>
      </div>

      {/* 하단 버튼 및 가이드라인 요약 */}
      <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between">
        <div className="text-[11px] text-zinc-400 font-medium truncate max-w-[200px]">
          추천: {component.usageGuidelines.bestFor}
        </div>

        <button
          onClick={() => onOpenDetail(component)}
          className="flex items-center gap-1 text-xs font-bold text-zinc-900 dark:text-zinc-100 hover:underline"
        >
          <span>코드 & 가이드</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
