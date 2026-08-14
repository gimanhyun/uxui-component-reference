import mixpanel from 'mixpanel-browser';

const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN || '';

let isInitialized = false;

export const initMixpanel = () => {
  if (typeof window !== 'undefined' && MIXPANEL_TOKEN && !isInitialized) {
    mixpanel.init(MIXPANEL_TOKEN, {
      debug: process.env.NODE_ENV !== 'production',
      track_pageview: false, // 수동 컨트롤을 위해 자동 탑재 끄기
      persistence: 'localStorage'
    });
    isInitialized = true;
  }
};

export const trackPageView = (pageName: string, properties?: Record<string, any>) => {
  if (typeof window !== 'undefined') {
    initMixpanel();
    mixpanel.track('Page View', {
      page: pageName,
      path: window.location.pathname,
      ...properties
    });
  }
};

export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  if (typeof window !== 'undefined') {
    initMixpanel();
    mixpanel.track(eventName, properties);
  }
};

export default mixpanel;
