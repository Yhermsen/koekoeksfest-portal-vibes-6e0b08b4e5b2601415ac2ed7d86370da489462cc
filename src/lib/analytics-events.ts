import { trackEvent, trackCustomEvent } from './analytics';

// Track ticket purchase attempts
export const trackTicketPurchase = (ticketType: string) => {
  trackEvent('purchase_attempt', 'tickets', ticketType);
};

// Track ticket link clicks
export const trackTicketLinkClick = (source: string) => {
  trackCustomEvent('ticket_link_click', {
    source: source,
    timestamp: new Date().toISOString(),
    url: window.location.href
  });
};

// Track video views
export const trackVideoView = (videoName: string) => {
  trackEvent('video_view', 'media', videoName);
};

// Track artist interactions
export const trackArtistInteraction = (artistName: string, action: string) => {
  trackEvent(action, 'artist', artistName);
};

// Track navigation
export const trackNavigation = (from: string, to: string) => {
  trackCustomEvent('navigation', {
    from_page: from,
    to_page: to,
    timestamp: new Date().toISOString()
  });
};

// Track form submissions
export const trackFormSubmission = (formName: string, success: boolean) => {
  trackEvent('form_submission', 'forms', formName, success ? 1 : 0);
};

// Track social media clicks
export const trackSocialClick = (platform: string) => {
  trackEvent('social_click', 'social', platform);
};

// Track search queries
export const trackSearch = (query: string, resultsCount: number) => {
  trackCustomEvent('search', {
    query,
    results_count: resultsCount,
    timestamp: new Date().toISOString()
  });
}; 