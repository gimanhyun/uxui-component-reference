'use client';

import { useState, useEffect } from 'react';
import { MobileHeader } from '@/components/mobile-header';
import { FashionUploadHero } from '@/components/fashion-upload-hero';
import { FashionAIScanner } from '@/components/fashion-ai-scanner';
import { ItemCategoryTabs } from '@/components/item-category-tabs';
import { ShoppingMatchList } from '@/components/shopping-match-list';
import { LookbookModal } from '@/components/lookbook-modal';
import { MobileFooter } from '@/components/mobile-footer';
import { OUTFIT_SAMPLES } from '@/data/fashion-data';
import { FashionCategory, FashionAIScanResult, OutfitSample, ShoppingItem } from '@/types/fashion';
import { analyzeFashionImage } from '@/lib/fashion-ai-service';
import { trackPageView, trackEvent } from '@/lib/mixpanel';

export default function Home() {
  const [scanResult, setScanResult] = useState<FashionAIScanResult | null>(null);
  const [activeCategory, setActiveCategory] = useState<FashionCategory>('tops');
  const [isScanning, setIsScanning] = useState(false);
  const [scrappedItems, setScrappedItems] = useState<ShoppingItem[]>([]);
  const [isLookbookOpen, setIsLookbookOpen] = useState(false);

  // 1. 초기 렌더링 시 첫 번째 샘플 룩으로 자동 AI 스캔 초기화 & Mixpanel 페이지뷰
  useEffect(() => {
    trackPageView('FitFinder AI Mobile Home');
    runScanProcess(undefined, undefined, OUTFIT_SAMPLES[0].id);
  }, []);

  const runScanProcess = async (
    description?: string,
    imageFileName?: string,
    sampleId?: string,
    customImageUrl?: string
  ) => {
    setIsScanning(true);
    try {
      const res = await analyzeFashionImage(description, imageFileName, sampleId, customImageUrl);
      setScanResult(res);
      if (res.detectedCategories.length > 0) {
        setActiveCategory(res.detectedCategories[0].category);
      }
      trackEvent('Fashion Scan Completed', {
        styleName: res.styleKeywords[0],
        confidence: res.confidence,
        itemCategoriesCount: res.detectedCategories.length,
        isCustomUpload: !!customImageUrl
      });
    } catch (e) {
      console.error(e);
    } finally {
      setIsScanning(false);
    }
  };

  const handleSelectSampleOutfit = (sample: OutfitSample) => {
    runScanProcess(undefined, undefined, sample.id);
  };

  const handleCustomImageUpload = (file: File, dataUrl: string) => {
    runScanProcess(undefined, file.name, undefined, dataUrl);
  };

  const handleScrapItem = (item: ShoppingItem) => {
    setScrappedItems((prev) => {
      const exists = prev.some((i) => i.id === item.id);
      if (exists) {
        return prev.filter((i) => i.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  };

  const currentCategoryData = scanResult?.detectedCategories.find(
    (c) => c.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans transition-colors selection:bg-amber-400">
      {/* 모바일 컨테이너 Wrapper (390px ~ 440px Focus) */}
      <div className="max-w-md mx-auto min-h-screen bg-white dark:bg-zinc-950 shadow-2xl flex flex-col border-x border-zinc-200/80 dark:border-zinc-800/80">
        {/* 모바일 헤더 */}
        <MobileHeader
          scrapCount={scrappedItems.length}
          onOpenLookbook={() => setIsLookbookOpen(true)}
        />

        {/* 메인 뷰포트 영역 */}
        <main className="flex-1">
          {/* 캡처 업로드 히어로 & 1-Click 샘플 착장 */}
          <FashionUploadHero
            onSelectSampleOutfit={handleSelectSampleOutfit}
            onCustomImageUpload={handleCustomImageUpload}
            isScanning={isScanning}
          />

          {/* AI 시각 스캐너 및 부위별 바운딩 박스 */}
          <FashionAIScanner
            scanResult={scanResult}
            activeCategory={activeCategory}
            onSelectCategory={(cat) => setActiveCategory(cat)}
            isScanning={isScanning}
          />

          {/* [👕 상의] [👖 하의] [👟 신발] 세그먼티드 카테고리 탭 */}
          {scanResult && (
            <ItemCategoryTabs
              categories={scanResult.detectedCategories}
              activeCategory={activeCategory}
              onSelectCategory={(cat) => setActiveCategory(cat)}
            />
          )}

          {/* 선택된 카테고리별 유사 쇼핑몰 매칭 결과 목록 */}
          {currentCategoryData && (
            <ShoppingMatchList
              items={currentCategoryData.matchedItems}
              categoryTitle={currentCategoryData.koreanName}
              onScrapItem={handleScrapItem}
              scrappedItemIds={scrappedItems.map((i) => i.id)}
            />
          )}
        </main>

        {/* 내 착장 보관함 (스크랩북) 모달 */}
        <LookbookModal
          isOpen={isLookbookOpen}
          onClose={() => setIsLookbookOpen(false)}
          scrappedItems={scrappedItems}
          onRemoveItem={handleScrapItem}
        />

        {/* 푸터 */}
        <MobileFooter />
      </div>
    </div>
  );
}
