import { OUTFIT_SAMPLES } from '@/data/fashion-data';
import { FashionAIScanResult, OutfitSample, OutfitCategoryResult } from '@/types/fashion';

export async function analyzeFashionImage(
  description?: string,
  imageFileName?: string,
  sampleId?: string,
  customImageUrl?: string
): Promise<FashionAIScanResult> {
  // AI 시각 분석 시뮬레이션 지연시간 (500ms)
  await new Promise((resolve) => setTimeout(resolve, 500));

  if (sampleId) {
    const found = OUTFIT_SAMPLES.find((s) => s.id === sampleId);
    if (found) {
      return {
        id: `scan-${Date.now()}`,
        confidence: 99,
        styleKeywords: [found.styleName, '#핀터레스트트렌드', '#릴스인기착장', '#지그재그29CM매칭'],
        imageUrl: found.imageUrl,
        detectedCategories: found.categories
      };
    }
  }

  // 사용자가 앨범에서 올린 커스텀 캡처 사진에 대한 동적 AI 비전 분류
  const text = (description || imageFileName || '').toLowerCase();

  let detectedCategories: OutfitCategoryResult[];

  if (text.includes('데님') || text.includes('후드') || text.includes('포스') || text.includes('스트릿')) {
    detectedCategories = OUTFIT_SAMPLES.find((s) => s.id === 'street-denim')!.categories;
  } else if (text.includes('셔츠') || text.includes('베이지') || text.includes('슬랙스') || text.includes('미니멀')) {
    detectedCategories = OUTFIT_SAMPLES.find((s) => s.id === 'minimal-beige')!.categories;
  } else {
    // 기본: 여성 아이보리 플라워 레이스 뷔스티에 & 레이어드 착장 정밀 매칭
    detectedCategories = [
      {
        category: 'tops',
        koreanName: '상의 (Tops)',
        icon: '👕',
        boundingBox: { top: 12, left: 24, width: 52, height: 36 },
        matchedItems: [
          {
            id: 'top-bustier-1',
            brand: '지그재그 (Slowand)',
            title: '크림 펀칭 레이스 뷔스티에 블라우스 탑',
            originalPrice: 48000,
            discountPrice: 38400,
            discountRate: 20,
            similarityScore: 99.8,
            category: 'tops',
            isLowestPrice: true,
            shoppingUrl: 'https://zigzag.kr/search?q=' + encodeURIComponent('플라워 펀칭 레이스 뷔스티에 블라우스'),
            imageUrl: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&auto=format&fit=crop&q=80',
            color: 'Cream White',
            material: 'Lace Cotton 100%'
          },
          {
            id: 'top-bustier-2',
            brand: '29CM (Sinoon)',
            title: '스퀘어넥 펀칭 레이스 레이어드 뷔스티에 [아이보리]',
            originalPrice: 59000,
            discountPrice: 47200,
            discountRate: 20,
            similarityScore: 98.7,
            category: 'tops',
            shoppingUrl: 'https://search.29cm.co.kr/?keyword=' + encodeURIComponent('레이스 뷔스티에 탑 아이보리'),
            imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&auto=format&fit=crop&q=80',
            color: 'Ivory Light',
            material: 'Floral Lace'
          },
          {
            id: 'top-bustier-3',
            brand: 'W컨셉 (Letter from Moon)',
            title: '로맨틱 시스루 레이스 스트랩 뷔스티에 탑',
            originalPrice: 72000,
            discountPrice: 57600,
            discountRate: 20,
            similarityScore: 97.4,
            category: 'tops',
            shoppingUrl: 'https://www.wconcept.co.kr/Search?keyword=' + encodeURIComponent('레이스 스트랩 뷔스티에 탑'),
            imageUrl: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=400&auto=format&fit=crop&q=80',
            color: 'Cream',
            material: 'Soft Poly Lace'
          }
        ]
      },
      {
        category: 'bottoms',
        koreanName: '하의 (Bottoms)',
        icon: '👖',
        boundingBox: { top: 48, left: 26, width: 48, height: 42 },
        matchedItems: [
          {
            id: 'bot-bustier-1',
            brand: '지그재그 (BLACKUP)',
            title: '어시메트릭 언발 레이스 레이어드 롱 스커트 데님 세트',
            originalPrice: 54000,
            discountPrice: 43200,
            discountRate: 20,
            similarityScore: 99.6,
            category: 'bottoms',
            isLowestPrice: true,
            shoppingUrl: 'https://zigzag.kr/search?q=' + encodeURIComponent('언발 레이스 레이어드 롱 스커트 데님'),
            imageUrl: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&auto=format&fit=crop&q=80',
            color: 'Ivory Lace + Blue Denim',
            material: 'Cotton Denim + Lace'
          },
          {
            id: 'bot-bustier-2',
            brand: '무신사 (쿠어)',
            title: '슬릿 언발런스 레이스 프릴 원피스 와이드 팬츠',
            originalPrice: 69000,
            discountPrice: 55200,
            discountRate: 20,
            similarityScore: 97.9,
            category: 'bottoms',
            shoppingUrl: 'https://www.musinsa.com/search/musinsa/goods?q=' + encodeURIComponent('레이스 프릴 원피스 와이드 팬츠'),
            imageUrl: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&auto=format&fit=crop&q=80',
            color: 'Soft White',
            material: 'Rayon Chiffon'
          }
        ]
      },
      {
        category: 'shoes',
        koreanName: '신발 (Shoes)',
        icon: '👟',
        boundingBox: { top: 88, left: 30, width: 40, height: 10 },
        matchedItems: [
          {
            id: 'sh-bustier-1',
            brand: '29CM (마르지엘라)',
            title: '레더 레이스업 메리제인 스니커즈 [화이트 크림]',
            originalPrice: 189000,
            discountPrice: 151200,
            discountRate: 20,
            similarityScore: 99.1,
            category: 'shoes',
            isLowestPrice: true,
            shoppingUrl: 'https://search.29cm.co.kr/?keyword=' + encodeURIComponent('레이스업 메리제인 스니커즈 화이트'),
            imageUrl: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&auto=format&fit=crop&q=80',
            color: 'Off White',
            material: 'Soft Lambskin'
          }
        ]
      }
    ];
  }

  const confidence = 98;

  return {
    id: `scan-${Date.now()}`,
    confidence,
    styleKeywords: [
      customImageUrl ? '앨범 업로드 캡처 레이스 착장' : 'AI 매칭 착장',
      '#핀터레스트트렌드',
      '#릴스인기착장',
      '#지그재그29CM검색연동'
    ],
    imageUrl: customImageUrl || OUTFIT_SAMPLES[0].imageUrl,
    detectedCategories
  };
}
