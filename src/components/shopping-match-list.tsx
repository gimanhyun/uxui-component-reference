'use client';

import { useState } from 'react';
import { ShoppingItem } from '@/types/fashion';
import { ExternalLink, Heart, Sparkles, Tag, Check, ArrowUpRight } from 'lucide-react';
import { trackEvent } from '@/lib/mixpanel';

interface ShoppingMatchListProps {
  items: ShoppingItem[];
  categoryTitle: string;
  onScrapItem: (item: ShoppingItem) => void;
  scrappedItemIds: string[];
}

export function ShoppingMatchList({
  items,
  categoryTitle,
  onScrapItem,
  scrappedItemIds
}: ShoppingMatchListProps) {
  const [selectedItemForModal, setSelectedItemForModal] = useState<ShoppingItem | null>(null);

  const handleOutboundClick = (item: ShoppingItem) => {
    trackEvent('Shopping Outbound Link Clicked', {
      itemId: item.id,
      brand: item.brand,
      title: item.title,
      price: item.discountPrice,
      similarityScore: item.similarityScore,
      category: item.category
    });
    window.open(item.shoppingUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="px-4 py-5 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-extrabold text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
          <span>AI 매칭된 {categoryTitle} 아이템</span>
          <span className="text-xs font-normal text-zinc-400">({items.length}개 찾음)</span>
        </h3>
        <span className="text-[11px] text-zinc-400 font-medium">유사도 높은순 정렬</span>
      </div>

      <div className="space-y-3">
        {items.map((item) => {
          const isScrapped = scrappedItemIds.includes(item.id);

          return (
            <div
              key={item.id}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-3.5 flex gap-3.5 transition-all hover:shadow-lg relative group"
            >
              {/* 상품 썸네일 */}
              <div className="relative w-24 h-28 rounded-2xl overflow-hidden shrink-0 border border-zinc-100 dark:border-zinc-800 bg-zinc-100">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-1.5 left-1.5 px-1.5 py-0.5 bg-amber-400 text-zinc-950 font-black text-[9px] rounded-md shadow-sm">
                  {item.similarityScore}% 일치
                </span>
                {item.isLowestPrice && (
                  <span className="absolute bottom-1.5 left-1.5 px-1.5 py-0.5 bg-emerald-500 text-white font-bold text-[9px] rounded-md shadow-sm">
                    최저가
                  </span>
                )}
              </div>

              {/* 상품 정보 */}
              <div className="flex-1 flex flex-col justify-between min-w-0">
                <div>
                  <div className="flex items-start justify-between gap-1 mb-1">
                    <span className="text-[11px] font-extrabold text-amber-600 dark:text-amber-400 truncate">
                      [{item.brand}]
                    </span>
                    <button
                      onClick={() => {
                        trackEvent('Item Scrapped Toggle', { itemId: item.id, title: item.title });
                        onScrapItem(item);
                      }}
                      className="p-1 text-zinc-400 hover:text-rose-500 transition"
                      title="내 룩북 스크랩"
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          isScrapped ? 'text-rose-500 fill-rose-500' : 'text-zinc-400'
                        }`}
                      />
                    </button>
                  </div>

                  <h4 className="text-xs font-bold text-zinc-900 dark:text-zinc-100 line-clamp-2 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-[10px] text-zinc-400 mt-0.5">
                    {item.color} • {item.material}
                  </p>
                </div>

                {/* 가격 및 쇼핑몰 이동 버튼 */}
                <div className="mt-2 pt-2 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-black text-zinc-900 dark:text-zinc-100">
                        {item.discountPrice.toLocaleString()}원
                      </span>
                      {item.discountRate > 0 && (
                        <span className="text-[10px] font-bold text-rose-500">
                          {item.discountRate}%↓
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => handleOutboundClick(item)}
                    className="flex items-center gap-1 px-3 py-1.5 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 rounded-xl text-[11px] font-extrabold hover:opacity-90 transition shadow-sm"
                  >
                    <span>쇼핑몰 이동</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
