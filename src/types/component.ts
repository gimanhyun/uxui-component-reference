export type DesignTone = 'minimal' | 'monotone' | 'sleek' | 'neobrutalism' | 'dark';

export interface UIComponentData {
  id: string;
  name: string; // 영문 표준 명칭 (예: Accordion)
  koreanName: string; // 한글 명칭 (예: 아코디언 / 디스클로저)
  shortDescription: string; // 한 줄 설명
  category: 'Navigation' | 'Feedback' | 'Data Entry' | 'Layout' | 'Overlays';
  tones: DesignTone[]; // 포함된 디자인 톤
  synonyms: string[]; // 동의어 및 연관 검색어 (예: ["팝업", "dialog", "modal"])
  usageGuidelines: {
    dos: string[];
    donts: string[];
    bestFor: string;
  };
  figmaTokenInfo: {
    padding: string;
    borderRadius: string;
    shadow: string;
    typography: string;
  };
  codeSnippet: {
    react: string;
    tailwind: string;
  };
}

export interface AIIdentifyRequest {
  description?: string;
  imageFileName?: string;
  imagePreviewUrl?: string;
}

export interface AIIdentifyResult {
  confidence: number;
  identifiedComponent: UIComponentData;
  matchedReason: string;
  alternativeSuggestions: {
    name: string;
    reason: string;
  }[];
  recommendedTones: DesignTone[];
}
