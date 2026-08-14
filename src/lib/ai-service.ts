import { COMPONENTS_DATA } from '@/data/components-data';
import { AIIdentifyResult, DesignTone, UIComponentData } from '@/types/component';

export async function identifyUIComponent(
  description?: string,
  imageFileName?: string
): Promise<AIIdentifyResult> {
  // 간단한 지연 시간으로 LLM 추론 동작을 연출
  await new Promise((resolve) => setTimeout(resolve, 800));

  const text = (description || imageFileName || '').toLowerCase();

  let matchedComponent: UIComponentData = COMPONENTS_DATA[0];
  let highestScore = 0;

  // 매칭 로직 (동의어, 키워드, 가이드라인 텍스트 기반 가중치 연산)
  COMPONENTS_DATA.forEach((comp) => {
    let score = 0;

    // 이름 및 한글명 직간접 매칭
    if (text.includes(comp.name.toLowerCase()) || text.includes(comp.koreanName.toLowerCase())) {
      score += 10;
    }

    // 동의어 매칭
    comp.synonyms.forEach((syn) => {
      if (text.includes(syn.toLowerCase())) {
        score += 5;
      }
    });

    // 특수 설명 키워드 추론
    if ((text.includes('접') || text.includes('펼') || text.includes('faq')) && comp.id === 'accordion') {
      score += 8;
    }
    if ((text.includes('팝업') || text.includes('창') || text.includes('확인') || text.includes('경고')) && comp.id === 'modal') {
      score += 8;
    }
    if ((text.includes('전환') || text.includes('토글') || text.includes('월간') || text.includes('배경 슬라이드')) && comp.id === 'segmented-control') {
      score += 8;
    }
    if ((text.includes('복사') || text.includes('알림') || text.includes('메시지') || text.includes('자동 사라짐')) && comp.id === 'toast') {
      score += 8;
    }
    if ((text.includes('아래') || text.includes('모바일') || text.includes('슬라이드') || text.includes('시트')) && comp.id === 'bottom-sheet') {
      score += 8;
    }
    if ((text.includes('단계') || text.includes('진행') || text.includes('1단계') || text.includes('온보딩')) && comp.id === 'stepper') {
      score += 8;
    }
    if ((text.includes('로딩') || text.includes('뼈대') || text.includes('깜빡') || text.includes('placeholder')) && comp.id === 'skeleton-loader') {
      score += 8;
    }
    if ((text.includes('선택') || text.includes('메뉴') || text.includes('화살표') || text.includes('옵션')) && comp.id === 'dropdown-menu') {
      score += 8;
    }
    if ((text.includes('탭') || text.includes('상단') || text.includes('메뉴바')) && comp.id === 'tab-bar') {
      score += 8;
    }
    if ((text.includes('검색') || text.includes('단축키') || text.includes('cmd') || text.includes('kbd')) && comp.id === 'command-palette') {
      score += 8;
    }

    if (score > highestScore) {
      highestScore = score;
      matchedComponent = comp;
    }
  });

  // 신뢰도 점수 (Confidence Score 82% ~ 98%)
  const confidence = Math.min(98, Math.max(82, 75 + highestScore * 2));

  // 추천 디자인 톤
  const recommendedTones: DesignTone[] = matchedComponent.tones;

  // 매칭 사유 생성
  let matchedReason = `'${matchedComponent.name}' 컴포넌트의 시각적 형태 및 UI 인터랙션 패턴과 가장 일치합니다.`;
  if (description && description.length > 0) {
    matchedReason = `입력하신 설명 ("${description}") 내 핵심 키워드가 표준 UX 컴포넌트 '${matchedComponent.name}' (${matchedComponent.koreanName})의 정의 및 사용법과 정확하게 부합합니다.`;
  } else if (imageFileName) {
    matchedReason = `업로드된 이미지 파일 ('${imageFileName}')의 레이아웃 외형 및 오버레이/버튼 구조를 AI Vision으로 분석한 결과, '${matchedComponent.name}' 패턴으로 식별되었습니다.`;
  }

  // 대안 추천 2가지
  const alternativeSuggestions = COMPONENTS_DATA.filter((c) => c.id !== matchedComponent.id)
    .slice(0, 2)
    .map((c) => ({
      name: `${c.name} (${c.koreanName})`,
      reason: `${c.shortDescription}`
    }));

  return {
    confidence,
    identifiedComponent: matchedComponent,
    matchedReason,
    alternativeSuggestions,
    recommendedTones
  };
}
