'use client';

import { useState } from 'react';
import { FashionCategory, FashionAIScanResult } from '@/types/fashion';
import { Sparkles, Scan, Check } from 'lucide-react';
import { trackEvent } from '@/lib/mixpanel';

interface FashionAIScannerProps {
  scanResult: FashionAIScanResult | null;
  activeCategory: FashionCategory;
  onSelectCategory: (category: FashionCategory) => void;
  isScanning: boolean;
}

export function FashionAIScanner({
  scanResult,
  activeCategory,
  onSelectCategory,
  isScanning
}: FashionAIScannerProps) {
  if (!scanResult) return null;

  return (
    <div className="px-4 my-4">
      <div className="relative rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-900 aspect-[3/4] max-h-[420px] w-full shadow-xl flex items-center justify-center">
        {/* 뒤쪽 회색 블러 배경 (직사각형 이미지 여백 빈공간 자연스럽게 채우기) */}
        <img
          src={scanResult.imageUrl}
          alt="배경 블러"
          className="absolute inset-0 w-full h-full object-cover blur-xl opacity-50 scale-110"
        />

        {/* 앞쪽 원본 사진 (잘림 전혀 없는 100% 전체 보임 object-contain) */}
        <img
          src={scanResult.imageUrl}
          alt="AI 분석 착장"
          className={`relative z-10 w-full h-full object-contain transition-opacity duration-300 ${
            isScanning ? 'opacity-40 blur-xs' : 'opacity-100'
          }`}
        />

        {/* AI 스캔 빔 애니메이션 */}
        {isScanning && (
          <div className="absolute inset-0 z-30 bg-gradient-to-b from-amber-500/20 via-transparent to-amber-500/20 animate-pulse flex flex-col items-center justify-center gap-2">
            <Scan className="w-10 h-10 text-amber-400 animate-spin" />
            <span className="px-3.5 py-1.5 bg-black/85 text-amber-300 font-extrabold text-xs rounded-full border border-amber-500/40 shadow-lg">
              AI가 상의·하의·신발 영역을 분리 스캔 중...
            </span>
          </div>
        )}

        {/* AI 감지 바운딩 박스 오버레이 (상의, 하의, 신발) */}
        {!isScanning &&
          scanResult.detectedCategories.map((catRes) => {
            const isSelected = activeCategory === catRes.category;
            const box = catRes.boundingBox;

            return (
              <button
                key={catRes.category}
                onClick={() => {
                  trackEvent('Bounding Box Clicked', { category: catRes.category });
                  onSelectCategory(catRes.category);
                }}
                style={{
                  top: `${box.top}%`,
                  left: `${box.left}%`,
                  width: `${box.width}%`,
                  height: `${box.height}%`
                }}
                className={`absolute rounded-2xl border-2 transition-all group flex flex-col justify-between p-1.5 focus:outline-none ${
                  isSelected
                    ? 'border-amber-400 bg-amber-400/25 shadow-lg ring-2 ring-amber-400/60 z-20'
                    : 'border-white/80 bg-black/30 hover:border-white z-10'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-black tracking-tight shadow-md ${
                      isSelected
                        ? 'bg-amber-400 text-zinc-950'
                        : 'bg-black/80 text-white border border-white/40'
                    }`}
                  >
                    {catRes.icon} {catRes.koreanName.split(' ')[0]}
                  </span>
                  {isSelected && (
                    <span className="w-4 h-4 bg-amber-400 text-zinc-950 rounded-full flex items-center justify-center font-bold text-[9px]">
                      ✓
                    </span>
                  )}
                </div>

                <div className="text-right">
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-black/75 text-amber-300 font-mono shadow-sm">
                    {catRes.matchedItems.length}개 정밀 매칭
                  </span>
                </div>
              </button>
            );
          })}

        {/* 하단 신뢰도 배지 */}
        {!isScanning && (
          <div className="absolute bottom-3 left-3 z-30 flex items-center gap-1.5 px-3 py-1 bg-black/80 backdrop-blur-md rounded-full text-[10px] text-white border border-white/20 shadow-md">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>AI 스타일 매칭 정밀도 {scanResult.confidence}%</span>
          </div>
        )}
      </div>
    </div>
  );
}
