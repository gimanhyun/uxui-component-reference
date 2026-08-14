'use client';

import { Search, X, Tag } from 'lucide-react';

interface SearchInputProps {
  query: string;
  setQuery: (q: string) => void;
  activeSynonyms: string[];
}

export function SearchInput({ query, setQuery, activeSynonyms }: SearchInputProps) {
  return (
    <div className="w-full max-w-xl mx-auto mb-6">
      <div className="relative flex items-center">
        <Search className="w-4 h-4 text-zinc-400 absolute left-3.5" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="컴포넌트 명칭, 한글 설명, 동의어 검색 (예: 팝업, 알림, 접기, toast)..."
          className="w-full pl-10 pr-10 py-2.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl text-xs sm:text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600 transition shadow-sm"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute right-3 p-1 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 rounded-full"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* 동의어 태그 매칭 안내 */}
      {query && activeSynonyms.length > 0 && (
        <div className="mt-2 flex items-center gap-1.5 text-[11px] text-zinc-500 overflow-x-auto">
          <Tag className="w-3 h-3 text-zinc-400 shrink-0" />
          <span>매칭된 연관 태그:</span>
          {activeSynonyms.map((syn) => (
            <span
              key={syn}
              className="px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-md font-mono"
            >
              #{syn}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
