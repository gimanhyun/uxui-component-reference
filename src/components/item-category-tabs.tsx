'use client';

import { FashionCategory, OutfitCategoryResult } from '@/types/fashion';
import { trackEvent } from '@/lib/mixpanel';

interface ItemCategoryTabsProps {
  categories: OutfitCategoryResult[];
  activeCategory: FashionCategory;
  onSelectCategory: (category: FashionCategory) => void;
}

export function ItemCategoryTabs({
  categories,
  activeCategory,
  onSelectCategory
}: ItemCategoryTabsProps) {
  return (
    <div className="sticky top-15 z-30 w-full bg-white dark:bg-zinc-950 py-2.5 px-4 border-y border-zinc-200 dark:border-zinc-800 transition-colors">
      <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none">
        {categories.map((cat) => {
          const isSelected = activeCategory === cat.category;
          return (
            <button
              key={cat.category}
              onClick={() => {
                trackEvent('Fashion Category Tab Clicked', { category: cat.category });
                onSelectCategory(cat.category);
              }}
              className={`flex-1 py-2 px-3 rounded-2xl text-xs font-bold whitespace-nowrap transition-all flex items-center justify-center gap-1.5 border ${
                isSelected
                  ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 border-zinc-900 dark:border-zinc-100 shadow-sm'
                  : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-800'
              }`}
            >
              <span className="text-sm">{cat.icon}</span>
              <span>{cat.koreanName.split(' ')[0]}</span>
              <span
                className={`px-1.5 py-0.2 rounded-full text-[10px] font-extrabold ${
                  isSelected
                    ? 'bg-amber-400 text-zinc-950'
                    : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'
                }`}
              >
                {cat.matchedItems.length}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
