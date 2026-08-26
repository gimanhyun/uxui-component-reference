export type FashionCategory = 'tops' | 'bottoms' | 'shoes' | 'outer';

export interface ShoppingItem {
  id: string;
  brand: string; // 예: 무신사 Standard, 29CM, 지그재그, W컨셉, 자라 등
  title: string; // 예: 핀턱 샌드 베이지 와이드 슬랙스
  originalPrice: number;
  discountPrice: number;
  discountRate: number;
  similarityScore: number; // 예: 98 (98% 스타일 일치)
  category: FashionCategory;
  isLowestPrice?: boolean;
  shoppingUrl: string; // 쇼핑몰 아웃바운드 링크
  imageUrl: string; // 상품 썸네일
  color: string;
  material: string;
}

export interface BoundingBox {
  top: number; // 퍼센트 (%)
  left: number;
  width: number;
  height: number;
}

export interface OutfitCategoryResult {
  category: FashionCategory;
  koreanName: string; // 상의, 하의, 신발, 아우터
  icon: string;
  boundingBox: BoundingBox;
  matchedItems: ShoppingItem[];
}

export interface OutfitSample {
  id: string;
  styleName: string; // 예: 미니멀 샌드 베이지 룩
  styleDescription: string; // 예: 릴스 조회수 120만 인기 미니멀 코디
  imageUrl: string;
  categories: OutfitCategoryResult[];
}

export interface FashionAIScanResult {
  id: string;
  confidence: number;
  styleKeywords: string[];
  imageUrl: string;
  detectedCategories: OutfitCategoryResult[];
}
