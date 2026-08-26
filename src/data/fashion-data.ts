import { OutfitSample } from '@/types/fashion';

export const OUTFIT_SAMPLES: OutfitSample[] = [
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
            title: '오버핏 샌드 린넨 반팔 셔츠 (캡처 룩 동일 모델)',
            originalPrice: 79000,
            discountPrice: 59000,
            discountRate: 25,
            similarityScore: 99.8,
            category: 'tops',
            isLowestPrice: true,
            shoppingUrl: 'https://www.29cm.co.kr',
            imageUrl: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&auto=format&fit=crop&q=80',
            color: 'Sand Beige',
            material: 'Linen 100% Premium'
          },
          {
            id: 'top-1-2',
            brand: '무신사 (쿠어)',
            title: '미니멀 라이트 베이지 포켓 드레이프 셔츠',
            originalPrice: 85000,
            discountPrice: 68000,
            discountRate: 20,
            similarityScore: 98.2,
            category: 'tops',
            shoppingUrl: 'https://www.musinsa.com',
            imageUrl: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&auto=format&fit=crop&q=80',
            color: 'Light Cream Beige',
            material: 'Cotton Blend'
          },
          {
            id: 'top-1-3',
            brand: 'ZARA',
            title: '리랙스드 핏 테일러드 샌드 셔츠',
            originalPrice: 65900,
            discountPrice: 49900,
            discountRate: 24,
            similarityScore: 96.5,
            category: 'tops',
            shoppingUrl: 'https://www.zara.com',
            imageUrl: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=400&auto=format&fit=crop&q=80',
            color: 'Natural Beige',
            material: 'Viscose Blend'
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
            title: '투 핀턱 와이드 트레시 슬랙스 [샌드 베이지] (캡처 동일 핏)',
            originalPrice: 49900,
            discountPrice: 39900,
            discountRate: 20,
            similarityScore: 99.5,
            category: 'bottoms',
            isLowestPrice: true,
            shoppingUrl: 'https://www.musinsa.com',
            imageUrl: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&auto=format&fit=crop&q=80',
            color: 'Sand Beige',
            material: 'TR Premium Stretch'
          },
          {
            id: 'bot-1-2',
            brand: '지그재그 (Slowand)',
            title: '버터 샌드 핀턱 드레이프 와이드 슬랙스',
            originalPrice: 45000,
            discountPrice: 36000,
            discountRate: 20,
            similarityScore: 97.8,
            category: 'bottoms',
            shoppingUrl: 'https://zigzag.kr',
            imageUrl: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&auto=format&fit=crop&q=80',
            color: 'Soft Butter Beige',
            material: 'Poly Rayon Blend'
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
            title: '월러비 스웨이드 데저트 슈즈 메이플 (캡처 착장 정품)',
            originalPrice: 238000,
            discountPrice: 189000,
            discountRate: 21,
            similarityScore: 99.9,
            category: 'shoes',
            isLowestPrice: true,
            shoppingUrl: 'https://www.29cm.co.kr',
            imageUrl: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&auto=format&fit=crop&q=80',
            color: 'Maple Tan',
            material: 'Real Leather Suede'
          },
          {
            id: 'sh-1-2',
            brand: 'KREAM',
            title: '버켄스탁 보스턴 스웨이드 타우페',
            originalPrice: 209000,
            discountPrice: 175000,
            discountRate: 16,
            similarityScore: 96.8,
            category: 'shoes',
            shoppingUrl: 'https://kream.co.kr',
            imageUrl: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&auto=format&fit=crop&q=80',
            color: 'Taupe Beige',
            material: 'Natural Cork'
          }
        ]
      }
    ]
  },
  {
    id: 'street-denim',
    styleName: '스트릿 오버핏 데님 룩',
    styleDescription: '릴스 숏폼 트렌딩 와이드 데님 팬츠 & 비티지 후디 스타일링',
    imageUrl: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&auto=format&fit=crop&q=80',
    categories: [
      {
        category: 'tops',
        koreanName: '상의 (Tops)',
        icon: '👕',
        boundingBox: { top: 15, left: 20, width: 60, height: 38 },
        matchedItems: [
          {
            id: 'top-2-1',
            brand: '무신사 (LMC)',
            title: '피그먼트 피니쉬 와시드 헤비 후디 [차콜]',
            originalPrice: 98000,
            discountPrice: 78400,
            discountRate: 20,
            similarityScore: 99.2,
            category: 'tops',
            isLowestPrice: true,
            shoppingUrl: 'https://www.musinsa.com',
            imageUrl: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400&auto=format&fit=crop&q=80',
            color: 'Vintage Charcoal',
            material: 'Heavy Cotton 100%'
          }
        ]
      },
      {
        category: 'bottoms',
        koreanName: '하의 (Bottoms)',
        icon: '👖',
        boundingBox: { top: 50, left: 22, width: 56, height: 40 },
        matchedItems: [
          {
            id: 'bot-2-1',
            brand: '29CM (디스이즈네버댓)',
            title: '딥 인디고 브러쉬드 와이드 데님 팬츠',
            originalPrice: 109000,
            discountPrice: 87200,
            discountRate: 20,
            similarityScore: 99.7,
            category: 'bottoms',
            isLowestPrice: true,
            shoppingUrl: 'https://www.29cm.co.kr',
            imageUrl: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&auto=format&fit=crop&q=80',
            color: 'Deep Raw Indigo',
            material: 'Denim Cotton 100%'
          }
        ]
      },
      {
        category: 'shoes',
        koreanName: '신발 (Shoes)',
        icon: '👟',
        boundingBox: { top: 89, left: 26, width: 48, height: 10 },
        matchedItems: [
          {
            id: 'sh-2-1',
            brand: 'KREAM (나이키)',
            title: '나이키 에어포스 1 \'07 로우 화이트',
            originalPrice: 139000,
            discountPrice: 129000,
            discountRate: 7,
            similarityScore: 99.9,
            category: 'shoes',
            isLowestPrice: true,
            shoppingUrl: 'https://kream.co.kr',
            imageUrl: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&auto=format&fit=crop&q=80',
            color: 'Triple White',
            material: 'Leather'
          }
        ]
      }
    ]
  },
  {
    id: 'cityboy-casual',
    styleName: '시티보이 버뮤다 셔츠 룩',
    styleDescription: '핀터레스트 남성 트렌드 상위 스트라이프 셔츠 & 버뮤다 하프 팬츠',
    imageUrl: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop&q=80',
    categories: [
      {
        category: 'tops',
        koreanName: '상의 (Tops)',
        icon: '👕',
        boundingBox: { top: 16, left: 20, width: 60, height: 36 },
        matchedItems: [
          {
            id: 'top-3-1',
            brand: '무신사 (포터리)',
            title: '옥스포드 스트라이프 컴포트 셔츠 [블루]',
            originalPrice: 198000,
            discountPrice: 178000,
            discountRate: 10,
            similarityScore: 98.9,
            category: 'tops',
            isLowestPrice: true,
            shoppingUrl: 'https://www.musinsa.com',
            imageUrl: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&auto=format&fit=crop&q=80',
            color: 'Sky Stripe',
            material: 'Premium Oxford Cotton'
          }
        ]
      },
      {
        category: 'bottoms',
        koreanName: '하의 (Bottoms)',
        icon: '👖',
        boundingBox: { top: 50, left: 25, width: 50, height: 32 },
        matchedItems: [
          {
            id: 'bot-3-1',
            brand: 'W컨셉',
            title: '치노 원턱 와이드 버뮤다 쇼츠 [네이비]',
            originalPrice: 68000,
            discountPrice: 54400,
            discountRate: 20,
            similarityScore: 97.9,
            category: 'bottoms',
            isLowestPrice: true,
            shoppingUrl: 'https://www.wconcept.co.kr',
            imageUrl: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&auto=format&fit=crop&q=80',
            color: 'Dark Navy',
            material: 'Cotton Chino'
          }
        ]
      },
      {
        category: 'shoes',
        koreanName: '신발 (Shoes)',
        icon: '👟',
        boundingBox: { top: 82, left: 28, width: 44, height: 16 },
        matchedItems: [
          {
            id: 'sh-3-1',
            brand: 'KREAM (뉴발란스)',
            title: '뉴발란스 990v6 메이드 인 USA 회색',
            originalPrice: 349000,
            discountPrice: 289000,
            discountRate: 17,
            similarityScore: 99.4,
            category: 'shoes',
            isLowestPrice: true,
            shoppingUrl: 'https://kream.co.kr',
            imageUrl: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&auto=format&fit=crop&q=80',
            color: 'Classic Grey',
            material: 'Pigskin Mesh'
          }
        ]
      }
    ]
  }
];
