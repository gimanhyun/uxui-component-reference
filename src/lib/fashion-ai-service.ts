import { OUTFIT_SAMPLES } from '@/data/fashion-data';
import { FashionAIScanResult, OutfitSample } from '@/types/fashion';

export async function analyzeFashionImage(
  description?: string,
  imageFileName?: string,
  sampleId?: string,
  customImageUrl?: string
): Promise<FashionAIScanResult> {
  // AI 시각 분석 시뮬레이션 지연시간 (600ms)
  await new Promise((resolve) => setTimeout(resolve, 600));

  let matchedSample: OutfitSample = OUTFIT_SAMPLES[0];

  if (sampleId) {
    const found = OUTFIT_SAMPLES.find((s) => s.id === sampleId);
    if (found) matchedSample = found;
  } else if (description || imageFileName) {
    const text = (description || imageFileName || '').toLowerCase();

    if (text.includes('데님') || text.includes('후드') || text.includes('포스') || text.includes('스트릿')) {
      matchedSample = OUTFIT_SAMPLES[1];
    } else if (text.includes('셔츠') || text.includes('뉴발란스') || text.includes('시티보이') || text.includes('쇼츠')) {
      matchedSample = OUTFIT_SAMPLES[2];
    } else {
      matchedSample = OUTFIT_SAMPLES[0];
    }
  }

  const confidence = Math.min(99, Math.max(92, 94 + Math.floor(Math.random() * 5)));

  return {
    id: `scan-${Date.now()}`,
    confidence,
    styleKeywords: [
      customImageUrl ? '내 앨범 업로드 캡처 룩' : matchedSample.styleName,
      '#핀터레스트트렌드',
      '#릴스인기착장',
      '#상의하의신발분리',
      '#쇼핑몰직접연결'
    ],
    imageUrl: customImageUrl || matchedSample.imageUrl, // 사용자가 실제 업로드한 캡처 사진 표출!
    detectedCategories: matchedSample.categories
  };
}
