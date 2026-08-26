import { OutfitSample } from '@/types/fashion';

export const OUTFIT_SAMPLES: OutfitSample[] = [
  {
    id: 'feminine-bustier',
    styleName: '페미닌 레이스 뷔스티에 룩',
    styleDescription: '인스타 릴스 히트 아이보리 플라워 레이스 뷔스티에 & 레이어드 룩',
    imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80',
    categories: [
      {
        category: 'tops',
        koreanName: '상의 (Tops)',
        icon: '👕',
        boundingBox: { top: 12, left: 24, width: 52, height: 36 },
        matchedItems: [
          {
            id: 'top-bustier-1',
            brand: '29CM (Sinoon)',
            title: '로맨틱 펀칭 레이스 뷔스티에 블라우스 탑 [아이보리]',
            originalPrice: 78000,
            discountPrice: 62400,
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
            brand: 'W컨셉 (Letter from Moon)',
            title: '스퀘어넥 프릴 레이스 레이어드 뷔스티에',
            originalPrice: 69000,
            discountPrice: 55200,
            discountRate: 20,
            similarityScore: 98.7,
            category: 'tops',
            shoppingUrl: 'https://m.wconcept.co.kr/product/301859231',
            imageUrl: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&auto=format&fit=crop&q=80',
            color: 'Cream White',
            material: 'Lace Cotton Blend'
          },
          {
            id: 'top-bustier-3',
            brand: '무신사 (Slowand)',
            title: '시스루 펀칭 레이스 뷔스티에 나시 블라우스',
            originalPrice: 45000,
            discountPrice: 36000,
            discountRate: 20,
            similarityScore: 97.5,
            category: 'tops',
            shoppingUrl: 'https://www.musinsa.com/app/goods/3482701',
            imageUrl: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=400&auto=format&fit=crop&q=80',
            color: 'Soft Cream',
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
            brand: '29CM (BLACKUP)',
            title: '어시메트릭 언발 레이스 레이어드 롱 스커트 데님 세트',
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
          },
          {
            id: 'bot-bustier-2',
            brand: '무신사 (쿠어)',
            title: '프릴 레이어드 롱 스커트 와이드 데님 팬츠',
            originalPrice: 79000,
            discountPrice: 63200,
            discountRate: 20,
            similarityScore: 97.9,
            category: 'bottoms',
            shoppingUrl: 'https://www.musinsa.com/app/goods/3482701',
            imageUrl: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&auto=format&fit=crop&q=80',
            color: 'Light Cream',
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
            shoppingUrl: 'https://www.29cm.co.kr/catalog/2681533',
            imageUrl: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&auto=format&fit=crop&q=80',
            color: 'Off White',
            material: 'Soft Lambskin'
          }
        ]
      }
    ]
  },
  {
    id: 'minimal-beige',
    styleName: '미니멀 샌드 베이지 룩',
    styleDescription: '핀터레스트 저장수 3만+ 릴스 인기 샌드 톤온톤 미니멀 코디',
    imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80',
    categories: [
      {
        category: 'tops',
        koreanName: '상의 (Tops)',
        icon: '👕',
        boundingBox: { top: 18, left: 22, width: 56, height: 35 },
        matchedItems: [
          {
            id: 'top-1-1',
            brand: '29CM (인사일런스)',
            title: '오버핏 샌드 린넨 반팔 셔츠',
            originalPrice: 79000,
            discountPrice: 59000,
            discountRate: 25,
            similarityScore: 99.8,
            category: 'tops',
            isLowestPrice: true,
            shoppingUrl: 'https://www.29cm.co.kr/catalog/2681533',
            imageUrl: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&auto=format&fit=crop&q=80',
            color: 'Sand Beige',
            material: 'Linen 100% Premium'
          }
        ]
      },
      {
        category: 'bottoms',
        koreanName: '하의 (Bottoms)',
        icon: '👖',
        boundingBox: { top: 52, left: 24, width: 52, height: 38 },
        matchedItems: [
          {
            id: 'bot-1-1',
            brand: '무신사 Standard',
            title: '투 핀턱 와이드 트레시 슬랙스 [샌드 베이지]',
            originalPrice: 49900,
            discountPrice: 39900,
            discountRate: 20,
            similarityScore: 99.5,
            category: 'bottoms',
            isLowestPrice: true,
            shoppingUrl: 'https://www.musinsa.com/app/goods/3482701',
            imageUrl: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&auto=format&fit=crop&q=80',
            color: 'Sand Beige',
            material: 'TR Premium Stretch'
          }
        ]
      },
      {
        category: 'shoes',
        koreanName: '신발 (Shoes)',
        icon: '👟',
        boundingBox: { top: 88, left: 28, width: 44, height: 11 },
        matchedItems: [
          {
            id: 'sh-1-1',
            brand: '29CM (클락스)',
            title: '월러비 스웨이드 데저트 슈즈 메이플',
            originalPrice: 238000,
            discountPrice: 189000,
            discountRate: 21,
            similarityScore: 99.9,
            category: 'shoes',
            isLowestPrice: true,
            shoppingUrl: 'https://www.29cm.co.kr/catalog/2681533',
            imageUrl: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&auto=format&fit=crop&q=80',
            color: 'Maple Tan',
            material: 'Real Leather Suede'
          }
        ]
      }
    ]
  }
];
