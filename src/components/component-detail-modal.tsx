'use client';

import { useState } from 'react';
import { UIComponentData } from '@/types/component';
import { X, CheckCircle2, XCircle, Copy, Check, Code, FileText, Palette, Layers } from 'lucide-react';

interface ComponentDetailModalProps {
  component: UIComponentData | null;
  onClose: () => void;
}

export function ComponentDetailModal({ component, onClose }: ComponentDetailModalProps) {
  const [activeTab, setActiveTab] = useState<'react' | 'tailwind'>('react');
  const [copied, setCopied] = useState(false);

  if (!component) return null;

  const currentCode = activeTab === 'react' ? component.codeSnippet.react : component.codeSnippet.tailwind;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden relative max-h-[92vh] flex flex-col">
        {/* 상단 헤더 */}
        <div className="p-6 border-b border-zinc-100 dark:border-zinc-800 flex items-center justify-between bg-zinc-50/50 dark:bg-zinc-950/50">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-xl font-extrabold text-zinc-900 dark:text-zinc-100">
                {component.name}
              </h2>
              <span className="px-2 py-0.5 text-xs font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-md">
                {component.category}
              </span>
            </div>
            <p className="text-xs text-zinc-500 font-medium">
              {component.koreanName} — {component.shortDescription}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 rounded-xl transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 모달 콘텐츠 바디 (스크롤) */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs">
          {/* 코드 스니펫 영역 */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-zinc-500" />
                <span className="font-bold text-zinc-900 dark:text-zinc-100">구현 코드 스니펫</span>
              </div>

              {/* 코드 탭 (React vs Tailwind) */}
              <div className="inline-flex p-1 bg-zinc-100 dark:bg-zinc-800 rounded-lg text-[11px] font-semibold">
                <button
                  onClick={() => setActiveTab('react')}
                  className={`px-3 py-1 rounded-md transition ${
                    activeTab === 'react'
                      ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-sm'
                      : 'text-zinc-500 hover:text-zinc-900'
                  }`}
                >
                  React TSX
                </button>
                <button
                  onClick={() => setActiveTab('tailwind')}
                  className={`px-3 py-1 rounded-md transition ${
                    activeTab === 'tailwind'
                      ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-sm'
                      : 'text-zinc-500 hover:text-zinc-900'
                  }`}
                >
                  Tailwind CSS
                </button>
              </div>
            </div>

            {/* 코드 블록 & 복사 버튼 */}
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 p-4 text-zinc-100 font-mono text-[11px] leading-relaxed max-h-64 overflow-y-auto">
              <button
                onClick={handleCopy}
                className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg text-[10px] font-semibold transition"
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span>복사 완료</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3 text-zinc-400" />
                    <span>코드 복사</span>
                  </>
                )}
              </button>
              <pre><code>{currentCode}</code></pre>
            </div>
          </div>

          {/* UX 가이드라인 (Do's & Don'ts) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Do's */}
            <div className="p-4 bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/40 rounded-2xl space-y-2">
              <div className="flex items-center gap-1.5 font-bold text-emerald-800 dark:text-emerald-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>권장 사항 (Do&apos;s)</span>
              </div>
              <ul className="space-y-1.5 text-zinc-700 dark:text-zinc-300 list-disc list-inside leading-relaxed text-[11px]">
                {component.usageGuidelines.dos.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Don'ts */}
            <div className="p-4 bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200/60 dark:border-rose-900/40 rounded-2xl space-y-2">
              <div className="flex items-center gap-1.5 font-bold text-rose-800 dark:text-rose-300">
                <XCircle className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                <span>주의 사항 (Don&apos;ts)</span>
              </div>
              <ul className="space-y-1.5 text-zinc-700 dark:text-zinc-300 list-disc list-inside leading-relaxed text-[11px]">
                {component.usageGuidelines.donts.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Figma 토큰 및 디자인 스펙 */}
          <div className="p-4 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl">
            <div className="flex items-center gap-2 font-bold text-zinc-900 dark:text-zinc-100 mb-3">
              <Palette className="w-4 h-4 text-purple-500" />
              <span>Figma 디자인 토큰 & 스펙 가이드</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-[11px]">
              <div className="p-2.5 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
                <span className="text-zinc-400 block mb-0.5">Padding</span>
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">{component.figmaTokenInfo.padding}</span>
              </div>
              <div className="p-2.5 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
                <span className="text-zinc-400 block mb-0.5">Border Radius</span>
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">{component.figmaTokenInfo.borderRadius}</span>
              </div>
              <div className="p-2.5 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
                <span className="text-zinc-400 block mb-0.5">Shadow & Effect</span>
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">{component.figmaTokenInfo.shadow}</span>
              </div>
              <div className="p-2.5 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
                <span className="text-zinc-400 block mb-0.5">Typography</span>
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">{component.figmaTokenInfo.typography}</span>
              </div>
            </div>
          </div>

          {/* 동의어 태그 목록 */}
          <div>
            <span className="font-semibold text-zinc-700 dark:text-zinc-300 block mb-1.5">연관 검색 동의어 (Synonyms):</span>
            <div className="flex flex-wrap gap-1.5">
              {component.synonyms.map((syn) => (
                <span
                  key={syn}
                  className="px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-lg text-[11px] font-mono"
                >
                  #{syn}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
