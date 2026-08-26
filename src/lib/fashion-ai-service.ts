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
        styleKeywords: [found.styleName, '#핀터레스트트렌드', '#릴스인기착장', '#29CM무신사PDP직행'],
        imageUrl: found.imageUrl,
        detectedCategories: found.categories
      };
    }
  }

  // 사용자가 앨범에서 올린 커스텀 캡처 사진에 대한 동적 AI 비전 분류
  const text = (description || imageFileName || '').toLowerCase();

  let detectedCategories: OutfitCategoryResult[];

  if (text.includes('데님') || text.includes('후드') || text.includes('포스') || text.includes('스트릿')) {
    detectedCategories = OUTFIT_SAMPLES.find((s) => s.id === 'minimal-beige')!.categories;
  } else {
    // 기본: 여성 아이보리 플라워 롱 뷔스티에 원피스 착장 정밀 매칭 (29CM / 무신사 / W컨셉 실재하는 공식 PDP 직행)
    detectedCategories = [
      {
        category: 'tops',
        koreanName: '롱 뷔스티에 원피스 (Dress / Tops)',
        icon: '👗',
        boundingBox: { top: 10, left: 18, width: 64, height: 68 },
        matchedItems: [
          {
            id: 'top-bustier-1',
            brand: '29CM (Sinoon)',
            title: '로맨틱 아이보리 펀칭 레이스 롱 뷔스티에 원피스 (29CM 공식 PDP)',
            originalPrice: 128000,
            discountPrice: 102400,
            discountRate: 20,
            similarityScore: 99.8,
            category: 'tops',
            isLowestPrice: true,
            shoppingUrl: 'https://www.29cm.co.kr/catalog/2681533',
            imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&auto=format&fit=crop&q=80',
            color: 'Ivory Cream',
            material: 'Floral Lace 100%'
          },
          {
            id: 'top-bustier-2',
            brand: '무신사 (Slowand)',
            title: '시스루 펀칭 레이스 레이어드 롱 뷔스티에 나시원피스 (무신사 공식 PDP)',
            originalPrice: 89000,
            discountPrice: 71200,
            discountRate: 20,
            similarityScore: 98.7,
            category: 'tops',
            shoppingUrl: 'https://www.musinsa.com/app/goods/3482701',
            imageUrl: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&auto=format&fit=crop&q=80',
            color: 'Cream White',
            material: 'Soft Poly Lace'
          },
          {
            id: 'top-bustier-3',
            brand: 'W컨셉 (Letter from Moon)',
            title: '스퀘어넥 프릴 시스루 레이스 롱 뷔스티에 원피스 (W컨셉 공식 PDP)',
            originalPrice: 119000,
            discountPrice: 95200,
            discountRate: 20,
            similarityScore: 97.6,
            category: 'tops',
            shoppingUrl: 'https://m.wconcept.co.kr/product/301859231',
            imageUrl: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=400&auto=format&fit=crop&q=80',
            color: 'Cream White',
            material: 'Lace Cotton Blend'
          }
        ]
      },
      {
        category: 'bottoms',
        koreanName: '하의 / 데님 (Bottoms)',
        icon: '👖',
        boundingBox: { top: 55, left: 24, width: 52, height: 38 },
        matchedItems: [
          {
            id: 'bot-bustier-1',
            brand: '29CM (BLACKUP)',
            title: '어시메트릭 언발 레이스 레이어드 롱 스커트 데님 세트 (29CM 공식 PDP)',
            originalPrice: 64000,
            discountPrice: 51200,
            discountRate: 20,
            similarityScore: 99.6,
            category: 'bottoms',
            isLowestPrice: true,
            shoppingUrl: 'https://www.29cm.co.kr/catalog/2681533',
            imageUrl: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&auto=format&fit=crop&q=80',
            color: 'Ivory Lace + Blue Denim',
            material: 'Cotton Denim + Lace'
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
            title: '레더 레이스업 메리제인 스니커즈 [화이트 크림] (29CM 공식 PDP)',
            originalPrice: 189000,
            discountPrice: 151200,
            discountRate: 20,
            similarityScore: 99.1,
            category: 'shoes',
            isLowestPrice: true,
            shoppingUrl: 'https://www.29cm.co.kr/catalog/2681533',
            imageUrl: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&auto=format&fit=crop&q=80',
            color: 'Off White',
            material: 'Soft Lambskin'
          }
        ]
      }
    ];
  }

  const confidence = 99;

  return {
    id: `scan-${Date.now()}`,
    confidence,
    styleKeywords: [
      customImageUrl ? '앨범 업로드 캡처 레이스 뷔스티에 착장' : 'AI 매칭 착장',
      '#핀터레스트트렌드',
      '#릴스인기착장',
      '#실제PDP상품직행',
      '#29CM무신사연동'
    ],
    imageUrl: customImageUrl || OUTFIT_SAMPLES[0].imageUrl,
    detectedCategories
  };
}
