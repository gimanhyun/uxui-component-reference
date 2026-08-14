import mixpanel from 'mixpanel-browser';

// Vercel 환경 변수가 등록되지 않은 경우를 대비한 토큰 폴백
const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN || 'ad8a490d85a859b3462f3b497d2c7d17';

let isInitialized = false;

export const initMixpanel = () => {
  if (typeof window !== 'undefined' && MIXPANEL_TOKEN && !isInitialized) {
    try {
      mixpanel.init(MIXPANEL_TOKEN, {
        debug: false,
        track_pageview: false,
        persistence: 'localStorage',
        ignore_dnt: true
      });
      isInitialized = true;
    } catch (e) {
      console.warn('Mixpanel init failed:', e);
    }
  }
};

export const trackPageView = (pageName: string, properties?: Record<string, any>) => {
  if (typeof window === 'undefined') return;
  try {
    initMixpanel();
    if (isInitialized) {
      mixpanel.track('Page View', {
        page: pageName,
        path: window.location.pathname,
        ...properties
      });
    }
  } catch (e) {
    console.warn('Mixpanel trackPageView failed:', e);
  }
};

export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  if (typeof window === 'undefined') return;
  try {
    initMixpanel();
    if (isInitialized) {
      mixpanel.track(eventName, properties);
    }
  } catch (e) {
    console.warn('Mixpanel trackEvent failed:', e);
  }
};

export default mixpanel;
