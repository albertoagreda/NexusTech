import { useEffect } from "react";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

interface AnalyticsProps {
  trackingId?: string;
}

export function Analytics({ trackingId = "G-XXXXXXXXXX" }: AnalyticsProps) {
  useEffect(() => {
    // Solo en producción y si se proporciona un tracking ID válido
    if (process.env.NODE_ENV !== 'production' || trackingId === "G-XXXXXXXXXX") {
      console.log("Analytics deshabilitado en desarrollo o sin tracking ID válido");
      return;
    }

    // Cargar Google Analytics
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${trackingId}', {
        page_title: document.title,
        page_location: window.location.href
      });
    `;
    document.head.appendChild(script2);

    // Configurar tracking de eventos personalizados
    window.gtag = window.gtag || function() {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(arguments);
    };

    // Track página inicial
    window.gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href
    });

    return () => {
      // Cleanup si es necesario
      const scripts = document.querySelectorAll(`script[src*="googletagmanager"]`);
      scripts.forEach(script => script.remove());
    };
  }, [trackingId]);

  return null;
}

// Hook para tracking de eventos
export const useAnalytics = () => {
  const trackEvent = (
    eventName: string, 
    parameters: { [key: string]: any } = {}
  ) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, parameters);
    } else {
      console.log('Analytics Event:', eventName, parameters);
    }
  };

  const trackPageView = (page: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: `${page} - NexusTech`,
        page_location: window.location.href
      });
    }
  };

  const trackDownload = (fileName: string) => {
    trackEvent('file_download', {
      file_name: fileName,
      event_category: 'Downloads'
    });
  };

  const trackContact = (method: string) => {
    trackEvent('contact', {
      method: method,
      event_category: 'Contact'
    });
  };

  const trackProjectView = (projectName: string) => {
    trackEvent('project_view', {
      project_name: projectName,
      event_category: 'Projects'
    });
  };

  return {
    trackEvent,
    trackPageView,
    trackDownload,
    trackContact,
    trackProjectView
  };
};