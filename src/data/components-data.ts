import { UIComponentData } from '@/types/component';

export const COMPONENTS_DATA: UIComponentData[] = [
  {
    id: 'accordion',
    name: 'Accordion',
    koreanName: '아코디언 / 디스클로저',
    shortDescription: '헤더 클릭 시 하위 콘텐츠 영역이 아래로 접혔다 펼쳐지는 수직 컨테이너 패턴',
    category: 'Layout',
    tones: ['minimal', 'monotone', 'sleek'],
    synonyms: ['접기', '펼치기', 'collapse', 'disclosure', 'faq', 'tree view', 'expandable'],
    usageGuidelines: {
      dos: [
        '자주 묻는 질문(FAQ)이나 많은 양의 수직 정보를 그룹화할 때 사용하세요.',
        '펼침/접힘 상태를 아코디언 우측Chevron 아이콘 회전으로 명확히 표현하세요.'
      ],
      donts: [
        '모든 콘텐츠를 한 번에 열어두어야 하는 핵심 작업 절차에는 사용하지 마세요.',
        '아코디언 내부에 또 다른 복잡한 아코디언을 중첩(Nesting)하지 마세요.'
      ],
      bestFor: 'FAQ 페이지, 대용량 설정 메뉴, 보조 정보 아카이빙'
    },
    figmaTokenInfo: {
      padding: 'p-4 (16px)',
      borderRadius: 'rounded-xl (12px)',
      shadow: 'none (1px solid border)',
      typography: 'Text-sm Medium / Text-xs Regular'
    },
    codeSnippet: {
      react: `'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function AccordionItem({ title, content }: { title: string; content: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden transition-all">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left font-medium text-zinc-900 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-900/50"
      >
        <span>{title}</span>
        <ChevronDown className={\`w-4 h-4 transition-transform duration-200 \${isOpen ? 'rotate-180' : ''}\`} />
      </button>
      {isOpen && (
        <div className="p-4 pt-0 text-sm text-zinc-600 dark:text-zinc-400 border-t border-zinc-100 dark:border-zinc-800/60 mt-1">
          {content}
        </div>
      )}
    </div>
  );
}`,
      tailwind: `/* Tailwind CSS Key Classes */
border border-zinc-200 dark:border-zinc-800 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-transform duration-200 rotate-180`
    }
  },
  {
    id: 'modal',
    name: 'Modal / Dialog',
    koreanName: '모달 / 대화상자 / 팝업',
    shortDescription: '메인 화면 위에 레이어를 덮어 주요 대화 및 작업 승인을 요구하는 오버레이 패턴',
    category: 'Overlays',
    tones: ['minimal', 'monotone', 'sleek', 'dark'],
    synonyms: ['팝업', 'dialog', 'popup', 'alert', 'overlay', '대화상자', 'window'],
    usageGuidelines: {
      dos: [
        '사용자의 즉각적인 확인이나 중요한 데이터 입력이 필요할 때 사용하세요.',
        '모달 바깥 오버레이(Backdrop)를 클릭하거나 Esc 키를 누르면 닫히도록 구현하세요.'
      ],
      donts: [
        '단순 안내 메시지에 잦은 모달 사용으로 사용자의 흐름을 방해하지 마세요.',
        '모달 위에서 또 다른 모달을 띄우는 중첩 모달을 피하세요.'
      ],
      bestFor: '삭제 확인 팝업, 중요 폼 입력, 시스템 경고'
    },
    figmaTokenInfo: {
      padding: 'p-6 (24px)',
      borderRadius: 'rounded-2xl (16px)',
      shadow: 'shadow-2xl / Backdrop Blur 4px',
      typography: 'Text-base Bold / Text-sm Regular'
    },
    codeSnippet: {
      react: `'use client';
import { useState } from 'react';
import { X } from 'lucide-react';

export function ModalDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg text-sm font-medium hover:opacity-90 transition"
      >
        모달 열기
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 max-w-md w-full shadow-2xl relative">
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600">
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">모달 타이틀</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">필수 승인 작업을 수행하거나 확인 버튼을 누르세요.</p>
            <div className="mt-6 flex justify-end gap-2">
              <button onClick={() => setIsOpen(false)} className="px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg text-sm font-medium">취소</button>
              <button onClick={() => setIsOpen(false)} className="px-4 py-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg text-sm font-medium">확인</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}`,
      tailwind: `/* Backdrop & Modal Styling */
fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 shadow-2xl rounded-2xl border border-zinc-200 dark:border-zinc-800`
    }
  },
  {
    id: 'segmented-control',
    name: 'Segmented Control',
    koreanName: '세그먼티드 컨트롤',
    shortDescription: '상호 배타적인 2개 이상의 선택지 간을 슬라이딩 피드백으로 전환하는 탭 버튼',
    category: 'Navigation',
    tones: ['minimal', 'monotone', 'sleek'],
    synonyms: ['토글버튼', 'toggle switch', 'tab switch', 'segmented', 'pill button', '선택기'],
    usageGuidelines: {
      dos: [
        '동일한 맥락 안에서 뷰 모드(예: 리스트 뷰 vs 그리드 뷰)를 전환할 때 사용하세요.',
        '선택된 탭 배경에 인디케이터 슬라이드 애니메이션을 적용해 조작감을 높이세요.'
      ],
      donts: [
        '옵션이 4개 이상으로 너무 많을 때는 드롭다운이나 일반 탭을 고려하세요.',
        '각 선택지의 텍스트 길이가 너무 길면 레이아웃이 깨지므로 1~2단어로 제한하세요.'
      ],
      bestFor: '뷰 모드 전환(Grid/List), 월간/연간 선택, 온/오프 상태 전환'
    },
    figmaTokenInfo: {
      padding: 'p-1 (4px container), p-2 (8px button)',
      borderRadius: 'rounded-xl (container), rounded-lg (active tab)',
      shadow: 'shadow-sm on active tab',
      typography: 'Text-xs Semibold'
    },
    codeSnippet: {
      react: `'use client';
import { useState } from 'react';

export function SegmentedControlDemo() {
  const [selected, setSelected] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <div className="inline-flex p-1 bg-zinc-100 dark:bg-zinc-800/80 rounded-xl border border-zinc-200/60 dark:border-zinc-700/50">
      <button
        onClick={() => setSelected('monthly')}
        className={\`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all \${
          selected === 'monthly'
            ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-sm'
            : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900'
        }\`}
      >
        월간 결제
      </button>
      <button
        onClick={() => setSelected('yearly')}
        className={\`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all \${
          selected === 'yearly'
            ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-sm'
            : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900'
        }\`}
      >
        연간 결제 (20% 할인)
      </button>
    </div>
  );
}`,
      tailwind: `inline-flex p-1 bg-zinc-100 dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 active-tab:bg-white active-tab:shadow-sm`
    }
  },
  {
    id: 'toast',
    name: 'Toast Notification',
    koreanName: '토스트 알림',
    shortDescription: '화면 모서리나 상단에 일시적으로 나타났다가 자동으로 사라지는 비침습적 알림',
    category: 'Feedback',
    tones: ['minimal', 'monotone', 'sleek', 'dark'],
    synonyms: ['알림', 'toast', 'notification', 'snack bar', '스낵바', '메시지', 'alert badge'],
    usageGuidelines: {
      dos: [
        '작업 완료, 복사 완료, 네트워크 상태 변경 등 짧은 승인 알림에 사용하세요.',
        '약 3~5초 후 자동으로 사라지는 애니메이션(Dismiss)을 포함하세요.'
      ],
      donts: [
        '사용자의 필수 확인 클릭이 필요한 중요한 경고문에는 토스트 대신 모달을 사용하세요.',
        '토스트에 너무 많은 텍스트나 복잡한 입력 폼을 넣지 마세요.'
      ],
      bestFor: '클립보드 복사 완료, 클라우드 저장 완료 메시지, 단순 정보 알림'
    },
    figmaTokenInfo: {
      padding: 'px-4 py-3 (16px x 12px)',
      borderRadius: 'rounded-xl (12px)',
      shadow: 'shadow-lg',
      typography: 'Text-xs Medium'
    },
    codeSnippet: {
      react: `'use client';
import { useState } from 'react';
import { CheckCircle2, X } from 'lucide-react';

export function ToastDemo() {
  const [show, setShow] = useState(false);

  const triggerToast = () => {
    setShow(true);
    setTimeout(() => setShow(false), 3000);
  };

  return (
    <div className="relative">
      <button 
        onClick={triggerToast}
        className="px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg text-xs font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
      >
        토스트 알림 띄우기
      </button>

      {show && (
        <div className="mt-3 flex items-center gap-3 px-4 py-3 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 rounded-xl shadow-lg animate-bounce-subtle text-xs font-medium">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 dark:text-emerald-600" />
          <span>링크가 클립보드에 복사되었습니다!</span>
          <button onClick={() => setShow(false)} className="ml-2 opacity-60 hover:opacity-100">
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </div>
  );
}`,
      tailwind: `flex items-center gap-3 px-4 py-3 bg-zinc-900 text-white rounded-xl shadow-lg transition-all animate-bounce-subtle text-xs`
    }
  },
  {
    id: 'bottom-sheet',
    name: 'Bottom Sheet',
    koreanName: '바텀 시트',
    shortDescription: '화면 하단에서 위로 슬라이드되어 나타나는 모바일 친화적 오버레이 패널',
    category: 'Overlays',
    tones: ['minimal', 'monotone', 'sleek', 'dark'],
    synonyms: ['하단시트', 'bottom sheet', 'slide up', 'mobile drawer', '바텀모달', 'action sheet'],
    usageGuidelines: {
      dos: [
        '모바일 환경에서 정렬 옵션, 공유하기, 빠른 필터 설정 시 사용하세요.',
        '상단 드래그 핸들 바(Handle Bar)를 배치하여 드래그 닫기 힌트를 제공하세요.'
      ],
      donts: [
        '데스크톱 레이아웃에 직접적인 바텀 시트를 오용하지 마세요 (데스크톱은 Popover/Modal 선호).',
        '시트 내부 콘텐츠 스크롤과 시트 닫기 제스처가 충돌하지 않도록 조심하세요.'
      ],
      bestFor: '모바일 정렬/필터 옵션, 공유 패널, 옵션 선택기'
    },
    figmaTokenInfo: {
      padding: 'p-6 (24px)',
      borderRadius: 'rounded-t-3xl (24px Top Only)',
      shadow: 'shadow-2xl Top',
      typography: 'Text-base Bold / Text-sm Medium'
    },
    codeSnippet: {
      react: `'use client';
import { useState } from 'react';
import { Check, X } from 'lucide-react';

export function BottomSheetDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-lg text-xs font-semibold hover:bg-zinc-200 transition"
      >
        바텀 시트 열기
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-end flex-col animate-fade-in">
          <div className="bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 rounded-t-3xl p-6 shadow-2xl max-w-lg mx-auto w-full animate-slide-up">
            <div className="w-12 h-1.5 bg-zinc-300 dark:bg-zinc-700 rounded-full mx-auto mb-4" />
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-bold text-zinc-900 dark:text-zinc-100">정렬 옵션 선택</h4>
              <button onClick={() => setIsOpen(false)}><X className="w-4 h-4 text-zinc-400" /></button>
            </div>
            <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <li className="p-3 bg-zinc-50 dark:bg-zinc-800/60 rounded-xl flex items-center justify-between font-medium">
                <span>최신순 정렬</span>
                <Check className="w-4 h-4 text-zinc-900 dark:text-zinc-100" />
              </li>
              <li className="p-3 hover:bg-zinc-50 dark:hover:bg-zinc-800/40 rounded-xl flex items-center justify-between cursor-pointer">
                <span>인기순 정렬</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}`,
      tailwind: `fixed inset-0 bg-black/40 flex flex-col justify-end rounded-t-3xl border-t border-zinc-200 dark:border-zinc-800 animate-slide-up`
    }
  },
  {
    id: 'stepper',
    name: 'Stepper / Wizard',
    koreanName: '스테퍼 / 다단계 위저드',
    shortDescription: '다단계 작업 진행 상황(1단계 -> 2단계 -> 완료)을 시각적으로 안내하는 프로세스 표시기',
    category: 'Navigation',
    tones: ['minimal', 'monotone', 'sleek'],
    synonyms: ['단계', 'stepper', 'wizard', 'progress indicator', '진행도', '다단계', 'step bar'],
    usageGuidelines: {
      dos: [
        '회원가입, 결제 절차, 설문조사 등 연속적인 3단계 이상의 과정에 배치하세요.',
        '현재 단계, 완료된 단계, 대기 단계를 색상과 체크 아이콘으로 명확히 구분하세요.'
      ],
      donts: [
        '순서가 불분명하거나 임의로 단계를 건너뛸 수 있는 페이지에는 일반 탭을 사용하세요.',
        '단계 수가 6개를 초과하면 가로 모바일 화면에서 답답해 보이므로 축소 표현을 사용하세요.'
      ],
      bestFor: '온보딩 과정, 회원가입/인증, 결제 진행 단계'
    },
    figmaTokenInfo: {
      padding: 'py-2 px-4',
      borderRadius: 'rounded-full (indicators)',
      shadow: 'none',
      typography: 'Text-xs Bold (Number) / Text-xs Medium (Label)'
    },
    codeSnippet: {
      react: `'use client';
import { useState } from 'react';
import { Check } from 'lucide-react';

export function StepperDemo() {
  const [currentStep, setCurrentStep] = useState(2);

  const steps = [
    { num: 1, label: '정보 입력' },
    { num: 2, label: '인증 진행' },
    { num: 3, label: '완료' }
  ];

  return (
    <div className="w-full max-w-xs mx-auto">
      <div className="flex items-center justify-between relative">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-zinc-200 dark:bg-zinc-800 -translate-y-1/2 z-0" />
        {steps.map((step) => {
          const isDone = step.num < currentStep;
          const isCurrent = step.num === currentStep;

          return (
            <button
              key={step.num}
              onClick={() => setCurrentStep(step.num)}
              className="relative z-10 flex flex-col items-center gap-1 group focus:outline-none"
            >
              <div
                className={\`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all \${
                  isDone
                    ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
                    : isCurrent
                    ? 'bg-zinc-900 text-white ring-4 ring-zinc-200 dark:ring-zinc-800 dark:bg-zinc-100 dark:text-zinc-900'
                    : 'bg-zinc-100 text-zinc-400 dark:bg-zinc-800 dark:text-zinc-500'
                }\`}
              >
                {isDone ? <Check className="w-4 h-4" /> : step.num}
              </div>
              <span className="text-[11px] font-medium text-zinc-600 dark:text-zinc-400">{step.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}`,
      tailwind: `relative z-10 w-8 h-8 rounded-full flex items-center justify-center text-xs ring-4 ring-zinc-200 dark:ring-zinc-800`
    }
  },
  {
    id: 'skeleton-loader',
    name: 'Skeleton Loader',
    koreanName: '스켈레톤 로더 / 플레이스홀더',
    shortDescription: '데이터를 로딩하는 동안 비동기적으로 레이아웃 뼈대 형태를 미리 보여주는 로딩 UI',
    category: 'Feedback',
    tones: ['minimal', 'monotone', 'sleek', 'dark'],
    synonyms: ['로딩', 'skeleton', 'placeholder', 'loading animation', '뼈대', 'pulse loader', 'shim'],
    usageGuidelines: {
      dos: [
        '실제 데이터가 로드되었을 때 배치될 카드나 텍스트의 크기와 모양에 맞춰 배치하세요.',
        '잔잔한 은폐 애니메이션(Pulse 또는 Shimmer)을 적용하여 앱이 정상 동작 중임을 전달하세요.'
      ],
      donts: [
        '초 단위 이하로 너무 짧게 끝나는 단순 버튼 클릭에는 스피너(Spinner)를 사용하세요.',
        '스켈레톤 색상이 너무 튀거나 강렬한 원색을 사용하지 않도록 회색조(Zinc/Slate)를 유지하세요.'
      ],
      bestFor: '피드 카드 로딩, 프로필 로딩, 대시보드 그래프 로딩'
    },
    figmaTokenInfo: {
      padding: 'n/a',
      borderRadius: 'rounded-md / rounded-full',
      shadow: 'none',
      typography: 'n/a (Block shapes)'
    },
    codeSnippet: {
      react: `'use client';
import { useState } from 'react';

export function SkeletonLoaderDemo() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs text-zinc-500 font-medium">로딩 상태 확인</span>
        <button 
          onClick={() => setIsLoading(!isLoading)}
          className="text-xs text-zinc-800 dark:text-zinc-200 underline font-semibold"
        >
          {isLoading ? '데이터 로드 완료 보기' : '로딩 상태로 전환'}
        </button>
      </div>

      {isLoading ? (
        <div className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-xl space-y-3 animate-pulse">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-zinc-200 dark:bg-zinc-800 rounded-full" />
            <div className="space-y-1.5 flex-1">
              <div className="h-3.5 bg-zinc-200 dark:bg-zinc-800 rounded w-2/3" />
              <div className="h-2.5 bg-zinc-200 dark:bg-zinc-800 rounded w-1/3" />
            </div>
          </div>
          <div className="h-12 bg-zinc-200 dark:bg-zinc-800 rounded-lg w-full" />
        </div>
      ) : (
        <div className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-xl space-y-3 bg-white dark:bg-zinc-900">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-zinc-900 text-white rounded-full flex items-center justify-center font-bold text-xs">UX</div>
            <div>
              <h5 className="text-xs font-bold text-zinc-900 dark:text-zinc-100">디자인 레퍼런스 카드</h5>
              <p className="text-[11px] text-zinc-500">2분 전 업데이트됨</p>
            </div>
          </div>
          <p className="text-xs text-zinc-600 dark:text-zinc-400">데이터가 성공적으로 전송되어 UI가 렌더링되었습니다.</p>
        </div>
      )}
    </div>
  );
}`,
      tailwind: `animate-pulse bg-zinc-200 dark:bg-zinc-800 rounded-lg rounded-full`
    }
  },
  {
    id: 'dropdown-menu',
    name: 'Dropdown / Select Menu',
    koreanName: '드롭다운 / 셀렉트 메뉴',
    shortDescription: '버튼을 클릭했을 때 하단에 옵션 목록 레이어가 펼쳐지는 콤보 박스 패턴',
    category: 'Data Entry',
    tones: ['minimal', 'monotone', 'sleek'],
    synonyms: ['드롭다운', 'dropdown', 'select', 'combo box', '옵션선택', 'context menu', '메뉴'],
    usageGuidelines: {
      dos: [
        '5개 이상의 선택지 중에서 사용자가 하나를 고를 때 화면 공간을 절약하기 위해 사용하세요.',
        '선택된 현재 상태와 드롭다운 열림 화살표(Chevron) 상태를 매칭하세요.'
      ],
      donts: [
        '옵션이 2~3개 이하일 때는 라디오 버튼이나 세그먼티드 컨트롤을 고려하세요.',
        '드롭다운 목록이 너무 길어 화면 아래쪽을 벗어나지 않도록 스크롤 영역(`max-h-60 overflow-y-auto`)을 지정하세요.'
      ],
      bestFor: '국가/언어 선택, 필터 조건 지정, 계정 프로필 옵션'
    },
    figmaTokenInfo: {
      padding: 'py-2 px-3 (Trigger), py-1 (Menu container)',
      borderRadius: 'rounded-xl (12px)',
      shadow: 'shadow-xl',
      typography: 'Text-xs Medium'
    },
    codeSnippet: {
      react: `'use client';
import { useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';

export function DropdownDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('미니멀 톤 (Minimal)');

  const options = ['미니멀 톤 (Minimal)', '모노톤 (Monotone)', '세련된 모던 (Sleek)', '네오브루탈리즘 (Neobrutalism)'];

  return (
    <div className="relative inline-block text-left w-full max-w-xs">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-3.5 py-2 text-xs font-medium bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition"
      >
        <span className="text-zinc-900 dark:text-zinc-100">{selected}</span>
        <ChevronDown className={\`w-4 h-4 text-zinc-500 transition-transform \${isOpen ? 'rotate-180' : ''}\`} />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-1.5 w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-xl z-30 py-1.5 animate-fade-in">
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => {
                setSelected(opt);
                setIsOpen(false);
              }}
              className="w-full flex items-center justify-between px-3.5 py-2 text-xs text-left text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
            >
              <span>{opt}</span>
              {selected === opt && <Check className="w-3.5 h-3.5 text-zinc-900 dark:text-zinc-100" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}`,
      tailwind: `absolute left-0 mt-1.5 w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-xl z-30 py-1.5`
    }
  },
  {
    id: 'tab-bar',
    name: 'Tab Bar',
    koreanName: '탭 바 / 네비게이션 탭',
    shortDescription: '관련된 병렬 섹션 간을 빠르게 전환할 수 있는 평면 상단/하단 네비게이션 메뉴',
    category: 'Navigation',
    tones: ['minimal', 'monotone', 'sleek'],
    synonyms: ['탭', 'tab', 'tab bar', 'navigation tabs', '메뉴탭', '상단탭', '분류'],
    usageGuidelines: {
      dos: [
        '동일한 정보 계층구조 수준에 있는 카테고리 간 이동 시 사용하세요.',
        '활성화된 탭 하단에 선명한 인디케이터 바(Border-b-2)를 배치하세요.'
      ],
      donts: [
        '단계별 순서가 존재하는 프로세스에는 탭 대신 스테퍼(Stepper)를 사용하세요.',
        '탭 텍스트가 너무 길어 한 줄을 초과하지 않게 직관적인 명사로 짧게 작성하세요.'
      ],
      bestFor: '마이페이지 메뉴 구분, 대시보드 뷰 전환, 카테고리 탐색'
    },
    figmaTokenInfo: {
      padding: 'pb-2.5 px-4',
      borderRadius: 'none (Border Bottom Active Indicator)',
      shadow: 'none',
      typography: 'Text-xs Semibold'
    },
    codeSnippet: {
      react: `'use client';
import { useState } from 'react';

export function TabBarDemo() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: '개요 (Overview)' },
    { id: 'design', label: '디자인 가이드' },
    { id: 'code', label: '코드 스니펫' }
  ];

  return (
    <div className="border-b border-zinc-200 dark:border-zinc-800 w-full">
      <nav className="flex gap-4">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={\`pb-2 px-1 text-xs font-semibold border-b-2 transition-all \${
                isActive
                  ? 'border-zinc-900 text-zinc-900 dark:border-zinc-100 dark:text-zinc-100'
                  : 'border-transparent text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300'
              }\`}
            >
              {tab.label}
            </button>
          );
        })}
      </nav>
    </div>
  );
}`,
      tailwind: `flex gap-4 border-b border-zinc-200 dark:border-zinc-800 pb-2 border-b-2 border-zinc-900 dark:border-zinc-100`
    }
  },
  {
    id: 'command-palette',
    name: 'Command Palette (KBar)',
    koreanName: '커맨드 팔레트 / ⌘K 빠른 탐색',
    shortDescription: '키보드 단축키(⌘K 또는 Ctrl+K)로 빠른 탐색 및 명령어 실행이 가능한 전역 검색 바',
    category: 'Navigation',
    tones: ['minimal', 'monotone', 'sleek', 'dark'],
    synonyms: ['커맨드', 'command', 'command palette', 'kbar', 'spotlight', 'quick search', '단축키검색', '모노톤 검색'],
    usageGuidelines: {
      dos: [
        '숙련된 사용자나 키보드 중심 작업 디자이너의 생산성을 높이기 위해 탑재하세요.',
        '최근 검색어, 주요 이동 경로, 바로가기 단축키 표기(예: `⌘+K`, `Esc`)를 조합하세요.'
      ],
      donts: [
        '일반 마우스 중심 유저도 접근할 수 있도록 상단 헤더에 검색 버튼으로도 노출해야 합니다.',
        '결과 항목이 너무 비대할 때는 카테고리별 헤더(예: `컴포넌트`, `디자인 톤`)로 묶어주세요.'
      ],
      bestFor: '생산성 앱, 디자인 레퍼런스 사이트, 파워유저용 빠른 탐색'
    },
    figmaTokenInfo: {
      padding: 'p-4 (16px Search), py-2 px-3 (Item)',
      borderRadius: 'rounded-2xl (16px Overlay)',
      shadow: 'shadow-2xl Backdrop Blur',
      typography: 'Text-sm Medium / Text-xs Regular'
    },
    codeSnippet: {
      react: `'use client';
import { useState, useEffect } from 'react';
import { Search, Command, ArrowRight } from 'lucide-react';

export function CommandPaletteDemo() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/80 rounded-xl text-xs text-zinc-500 hover:text-zinc-900 transition"
      >
        <Search className="w-3.5 h-3.5" />
        <span>빠른 검색...</span>
        <kbd className="ml-2 px-1.5 py-0.5 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded text-[10px] font-mono text-zinc-700 dark:text-zinc-300">
          ⌘K
        </kbd>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-start justify-center pt-20 p-4">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl max-w-md w-full shadow-2xl overflow-hidden animate-fade-in">
            <div className="flex items-center gap-3 p-4 border-b border-zinc-100 dark:border-zinc-800">
              <Command className="w-4 h-4 text-zinc-400" />
              <input
                type="text"
                placeholder="컴포넌트 명칭 또는 톤 검색..."
                className="w-full bg-transparent text-xs text-zinc-900 dark:text-zinc-100 focus:outline-none"
                autoFocus
              />
              <button onClick={() => setIsOpen(false)} className="text-[10px] bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded">ESC</button>
            </div>
            <div className="p-2 space-y-1 text-xs">
              <div className="px-2 py-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg flex items-center justify-between cursor-pointer">
                <span>Accordion (아코디언)</span>
                <ArrowRight className="w-3 h-3 text-zinc-400" />
              </div>
              <div className="px-2 py-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg flex items-center justify-between cursor-pointer">
                <span>Segmented Control (세그먼티드)</span>
                <ArrowRight className="w-3 h-3 text-zinc-400" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}`,
      tailwind: `fixed inset-0 bg-black/50 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl`
    }
  }
];
