# 📄 PRD: UX/UI 컴포넌트 레퍼런스 플랫폼

---

## 1. 프로젝트 개요 (Overview)

* **서비스명**: UX/UI 컴포넌트 레퍼런스 (UX/UI Component Reference)
* **한 줄 설명**: AI(LLM) 기반 컴포넌트 명칭 탐색 및 디자인 톤 필터링 레퍼런스 검색 도구
* **프로젝트 배경 & 목적**:
  * 신입 및 주니어 UX/UI 디자이너(1~3년차)는 특정 UI 패턴의 정확한 컴포넌트 명칭(예: Segmented Control, Accordion, Toast, Bottom Sheet 등)을 떠올리지 못해 효율적인 레퍼런스 탐색에 어려움을 겪습니다.
  * 본 서비스는 이미지나 자연어 설명만으로 정확한 UI 컴포넌트 명칭을 식별해 주는 LLM 엔진과, 브랜드 스타일에 맞는 디자인 톤(미니멀, 모노톤, 세련 등)별 필터링 기능을 제공하여 디자이너의 레퍼런스 수집 및 탐색 시간을 획기적으로 단축하는 것을 목적으로 합니다.

---

## 2. 타겟 유저 (Target Audience)

* **주 타겟**: 1 ~ 3년차 UX/UI 디자이너 및 신입 프로덕트 디자이너
* **유저 페르소나**:
  * **이름**: 김디자인 (25세, 2년차 UX/UI 디자이너)
  * **Pain Point**: 
    * "이 화면 구성 요소 이름이 정확히 뭐였지?" 컴포넌트의 정확한 용어를 몰라 핀터레스트나 비핸스에서 비효율적인 검색어로 시간을 허비함.
    * 프로젝트 톤앤매너(미니멀/모노톤 등)에 들어맞는 정돈된 컴포넌트 레퍼런스만 모아서 빠르게 비교해보고 싶음.

---

## 3. 핵심 기능 요구사항 (Core Features)

### 3.1. LLM 기반 컴포넌트 명칭 식별 (AI Component Identifier)
* **기능 설명**: 디자이너가 찾고자 하는 UI 이미지나 자연어 묘사(예: "클릭하면 아래로 접혔다 펼쳐지는 목록")를 입력하면 LLM이 표준 UX/UI 컴포넌트 명칭을 식별하여 안내합니다.
* **상세 기능**:
  * 이미지 업로드 및 드래그 앤 드롭 분석 지원 (Multimodal Vision LLM)
  * 자연어 질문/설명 입력창 제공
  * 식별된 컴포넌트의 표준 명칭, 관련 용어(동의어), 사용 추천 가이드라인 제공

### 3.2. 스마트 컴포넌트 검색 (Smart Search & Keyword Recommendation)
* **기능 설명**: 키워드 입력 시 컴포넌트 명칭뿐만 아니라 연관 UI 패턴, 유연한 동의어 검색어를 제안합니다.
* **상세 기능**:
  * 실시간 자동완성 및 추천 검색어 노출 (예: '팝업' 입력 시 `Modal`, `Dialog`, `Alert`, `BottomSheet` 제안)
  * 인기 컴포넌트 키워드 태그 칩 제공

### 3.3. 디자인 톤별 필터링 시스템 (Design Tone Filter)
* **기능 설명**: 검색된 컴포넌트 레퍼런스를 서비스의 브랜드 이미지 및 디자인 콘셉트에 맞게 톤별로 필터링합니다.
* **상세 기능**:
  * 주요 톤 필터: `미니멀 (Minimal)`, `모노톤 (Monotone)`, `세련된/모던 (Sleek & Modern)`, `네오브루탈리즘 (Neobrutalism)`, `다크모드 (Dark)`
  * 복수 필터 선택 및 실시간 결과 카드 반응형 그리드 렌더링

---

## 4. 디자인 톤 & 시스템 (Design & UI/UX Style)

* **디자인 콘셉트**: 미니멀 (Minimalist), 모노톤 (Monotone), 세련됨 (Sleek & Sophisticated)
* **컬러 팔레트**:
  * Primary Background: `#FFFFFF` / `#09090B` (Dark Zinc)
  * Surface & Card: `#F4F4F5` / `#18181B`
  * Text: Main `#09090B`, Muted `#71717A`
  * Accent Point: `#3F3F46` / `#FAFAFA` (High-contrast Monotone with Subtle Accent)
* **타이포그래피**: Clean Sans-Serif (Inter / Pretendard)
* **UI 요소**:
  * 깔끔하고 선명한 테두리 (1px Border)와 부드러운 호버 마이크로 인터랙션
  * 시각적 노이즈를 최소화한 가독성 중심 그리드 레이아웃

---

## 5. 기술 스택 (Tech Stack)

* **Frontend**: Next.js 14+ (App Router), React 18+
* **Styling**: Tailwind CSS, Lucide React Icons
* **AI / API**: OpenAI API (GPT-4o Vision) 또는 Google Gemini API
* **State Management**: React Hooks (useState, useEffect, useMemo)
* **Deployment**: Vercel

---

## 6. 유저 플로우 (User Flow)

```
[메인 홈 화면]
   │
   ├──▶ 1. [AI 컴포넌트 식별] ──▶ 이미지 업로드/자연어 입력 ──▶ LLM 결과 (컴포넌트 명칭 확인)
   │                                                                      │
   └──▶ 2. [검색어 입력] ──────────────────────────────────────────────────┤
                                                                          ▼
                                                            [컴포넌트 결과 목록 페이지]
                                                                          │
                                                            3. [디자인 톤 필터 적용] (미니멀, 모노톤 등)
                                                                          │
                                                                          ▼
                                                            [필터링된 컴포넌트 카드 뷰 / 상세 레퍼런스]
```

---

## 7. 성공 지표 (Key Success Metrics)

1. **컴포넌트 탐색 성공률**: 디자이너가 입력한 의도/이미지 대비 원하는 컴포넌트 명칭을 정확히 식별한 비율 (85% 이상 목표)
2. **평균 탐색 시간 단축**: 디자이너의 레퍼런스 수집 시간 기존 대비 50% 이상 감소
3. **디자인 톤 필터 활용도**: 전체 검색 세션 중 디자인 톤 필터 클릭 및 재검색 비중 (60% 이상 목표)

---

## 8. 향후 로드맵 (Future Roadmap)

* **Phase 1 (MVP)**: LLM 컴포넌트 명칭 식별기 + 스마트 검색 + 3가지 핵심 디자인 톤 필터 구축
* **Phase 2**: 레퍼런스별 Figma 디자인 템플릿 링크 및 React/Tailwind 코드 스니펫 복사 기능 추가
* **Phase 3**: Figma 플러그인 개발을 통해 Figma 작업 화면 내에서 직접 검색 및 적용 지원
