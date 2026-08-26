'use client';

import { ShoppingItem } from '@/types/fashion';
import { X, Heart, ExternalLink, Share2, Trash2, ArrowUpRight } from 'lucide-react';
import { trackEvent } from '@/lib/mixpanel';

interface LookbookModalProps {
  isOpen: boolean;
  onClose: () => void;
  scrappedItems: ShoppingItem[];
  onRemoveItem: (item: ShoppingItem) => void;
}

export function LookbookModal({
  isOpen,
  onClose,
  scrappedItems,
  onRemoveItem
}: LookbookModalProps) {
  if (!isOpen) return null;

  const handleShare = () => {
    trackEvent('Lookbook Shared');
    if (navigator.share) {
      navigator.share({
        title: 'FitFinder AI 내 룩북 보관함',
        text: '핀터레스트 캡처로 찾은 내 패션 아이템 세트를 확인해보세요!',
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('룩북 링크가 클립보드에 복사되었습니다!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl max-w-sm w-full shadow-2xl overflow-hidden relative max-h-[85vh] flex flex-col">
        {/* 상단 헤더 */}
        <div className="p-4 border-b border-zinc-100 dark:border-zinc-800 flex items-center justify-between bg-zinc-50/50 dark:bg-zinc-950/50">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
            <h3 className="font-extrabold text-sm text-zinc-900 dark:text-zinc-100">
              내 착장 보관함 ({scrappedItems.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 바디 (스크랩 아이템 목록) */}
        <div className="p-4 overflow-y-auto flex-1 space-y-3 text-xs">
          {scrappedItems.length > 0 ? (
            scrappedItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 p-2.5 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800 rounded-2xl"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-14 h-16 object-cover rounded-xl shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-extrabold text-amber-600 dark:text-amber-400">
                    [{item.brand}]
                  </span>
                  <h4 className="font-bold text-zinc-900 dark:text-zinc-100 truncate text-[11px]">
                    {item.title}
                  </h4>
                  <span className="text-xs font-black text-zinc-900 dark:text-zinc-100 block mt-0.5">
                    {item.discountPrice.toLocaleString()}원
                  </span>
                </div>
                <div className="flex flex-col gap-1.5 shrink-0">
                  <button
                    onClick={() => {
                      trackEvent('Lookbook Direct Link Clicked', { itemId: item.id });
                      window.open(item.shoppingUrl, '_blank');
                    }}
                    className="p-1.5 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 rounded-lg text-[10px] font-bold"
                    title="쇼핑몰 이동"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onRemoveItem(item)}
                    className="p-1.5 text-zinc-400 hover:text-rose-500 rounded-lg"
                    title="보관함에서 삭제"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="py-12 text-center text-zinc-400 space-y-2">
              <Heart className="w-8 h-8 text-zinc-300 dark:text-zinc-700 mx-auto" />
              <p className="text-xs font-bold text-zinc-600 dark:text-zinc-400">
                아직 보관함에 담긴 아이템이 없습니다.
              </p>
              <p className="text-[10px]">하트 아이콘을 눌러 맘에 드는 옷을 스크랩해보세요!</p>
            </div>
          )}
        </div>

        {/* 푸터 공유 버튼 */}
        {scrappedItems.length > 0 && (
          <div className="p-3 border-t border-zinc-100 dark:border-zinc-800">
            <button
              onClick={handleShare}
              className="w-full py-2.5 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 rounded-2xl text-xs font-extrabold flex items-center justify-center gap-2 hover:opacity-90 transition shadow-md"
            >
              <Share2 className="w-4 h-4" />
              <span>내 룩북 공유하기</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
