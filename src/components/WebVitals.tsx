import { useEffect } from 'react';

interface WebVitalsProps {
  trackingId?: string;
}

// Web Vitals thresholds (Google recommendations)
const VITALS_THRESHOLDS = {
  CLS: { good: 0.1, needs_improvement: 0.25 },
  FID: { good: 100, needs_improvement: 300 },
  FCP: { good: 1800, needs_improvement: 3000 },
  LCP: { good: 2500, needs_improvement: 4000 },
  TTFB: { good: 800, needs_improvement: 1800 },
  INP: { good: 200, needs_improvement: 500 }
};

export function WebVitals({ trackingId }: WebVitalsProps) {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    const sendToAnalytics = (metric: any) => {
      // Send to Google Analytics if available
      if (trackingId && (window as any).gtag) {
        (window as any).gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          custom_parameter_1: getRating(metric),
          custom_parameter_2: metric.navigationType || 'navigate',
          non_interaction: true
        });
      }

      // Console log for development
      if (process.env.NODE_ENV === 'development') {
        console.log(`🔍 Web Vital: ${metric.name}`, {
          value: metric.value,
          rating: getRating(metric),
          id: metric.id,
          delta: metric.delta,
          entries: metric.entries
        });
      }

      // Send to custom endpoint (optional - for production monitoring)
      if (process.env.NODE_ENV === 'production') {
        fetch('/api/vitals', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: metric.name,
            value: metric.value,
            rating: getRating(metric),
            id: metric.id,
            url: window.location.href,
            timestamp: Date.now()
          })
        }).catch(() => {
          // Silently fail if endpoint doesn't exist
        });
      }
    };

    const getRating = (metric: any): 'good' | 'needs-improvement' | 'poor' => {
      const thresholds = VITALS_THRESHOLDS[metric.name as keyof typeof VITALS_THRESHOLDS];
      if (!thresholds) return 'good';
      
      if (metric.value <= thresholds.good) return 'good';
      if (metric.value <= thresholds.needs_improvement) return 'needs-improvement';
      return 'poor';
    };

    // Performance observer for Core Web Vitals
    const observeWebVitals = () => {
      // Largest Contentful Paint (LCP)
      if ('PerformanceObserver' in window) {
        try {
          const lcpObserver = new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            const lastEntry = entries[entries.length - 1];
            
            sendToAnalytics({
              name: 'LCP',
              value: lastEntry.startTime,
              id: generateUniqueId(),
              delta: lastEntry.startTime,
              entries: [lastEntry]
            });
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch (e) {
          console.warn('LCP observation failed:', e);
        }

        // First Input Delay (FID)
        try {
          const fidObserver = new PerformanceObserver((entryList) => {
            entryList.getEntries().forEach((entry: any) => {
              sendToAnalytics({
                name: 'FID',
                value: entry.processingStart - entry.startTime,
                id: generateUniqueId(),
                delta: entry.processingStart - entry.startTime,
                entries: [entry]
              });
            });
          });
          fidObserver.observe({ entryTypes: ['first-input'] });
        } catch (e) {
          console.warn('FID observation failed:', e);
        }

        // Cumulative Layout Shift (CLS)
        try {
          let clsValue = 0;
          const clsObserver = new PerformanceObserver((entryList) => {
            entryList.getEntries().forEach((entry: any) => {
              if (!entry.hadRecentInput) {
                clsValue += entry.value;
              }
            });

            sendToAnalytics({
              name: 'CLS',
              value: clsValue,
              id: generateUniqueId(),
              delta: clsValue,
              entries: entryList.getEntries()
            });
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch (e) {
          console.warn('CLS observation failed:', e);
        }

        // First Contentful Paint (FCP)
        try {
          const fcpObserver = new PerformanceObserver((entryList) => {
            entryList.getEntries().forEach((entry) => {
              if (entry.name === 'first-contentful-paint') {
                sendToAnalytics({
                  name: 'FCP',
                  value: entry.startTime,
                  id: generateUniqueId(),
                  delta: entry.startTime,
                  entries: [entry]
                });
              }
            });
          });
          fcpObserver.observe({ entryTypes: ['paint'] });
        } catch (e) {
          console.warn('FCP observation failed:', e);
        }

        // Time to First Byte (TTFB)
        try {
          const navigationEntries = performance.getEntriesByType('navigation');
          if (navigationEntries.length > 0) {
            const navEntry = navigationEntries[0] as PerformanceNavigationTiming;
            const ttfb = navEntry.responseStart - navEntry.requestStart;
            
            sendToAnalytics({
              name: 'TTFB',
              value: ttfb,
              id: generateUniqueId(),
              delta: ttfb,
              entries: [navEntry]
            });
          }
        } catch (e) {
          console.warn('TTFB measurement failed:', e);
        }
      }
    };

    const generateUniqueId = (): string => {
      return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    };

    // Start observing when page is loaded
    if (document.readyState === 'complete') {
      observeWebVitals();
    } else {
      window.addEventListener('load', observeWebVitals);
    }

    // Cleanup function
    return () => {
      window.removeEventListener('load', observeWebVitals);
    };
  }, [trackingId]);

  return null; // This component doesn't render anything
}