// Type declarations for Google Analytics
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Google Analytics 4 Measurement ID
export const GA_MEASUREMENT_ID = 'G-ZQ0R882GLV';

let isGAInitialized = false;

// Initialize Google Analytics
export const initGA = () => {
  if (isGAInitialized) return;
  
  try {
    // Load the Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, {
      page_path: window.location.pathname,
    });

    // Make gtag available globally
    window.gtag = gtag;
    isGAInitialized = true;
  } catch (error) {
    console.warn('Failed to initialize Google Analytics:', error);
  }
};

// Track page views
export const trackPageView = (url: string) => {
  if (!isGAInitialized) {
    console.warn('Google Analytics not initialized');
    return;
  }
  
  try {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  } catch (error) {
    console.warn('Failed to track page view:', error);
  }
};

// Track events
export const trackEvent = (action: string, category: string, label: string, value?: number) => {
  if (!isGAInitialized) {
    console.warn('Google Analytics not initialized');
    return;
  }
  
  try {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  } catch (error) {
    console.warn('Failed to track event:', error);
  }
};

// Track custom events
export const trackCustomEvent = (name: string, params?: Record<string, any>) => {
  if (!isGAInitialized) {
    console.warn('Google Analytics not initialized');
    return;
  }
  
  try {
    window.gtag('event', name, params);
  } catch (error) {
    console.warn('Failed to track custom event:', error);
  }
}; 