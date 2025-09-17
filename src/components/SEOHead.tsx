import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  locale?: string;
  alternateLocales?: string[];
  canonicalUrl?: string;
}

export function SEOHead({ 
  title = "NexusTech - Alberto Agreda | Desarrollador Java",
  description = "Desarrollador Java con experiencia internacional en España y Alemania. Especializado en desarrollo backend, Spring Boot, arquitectura de software y optimización de procesos. 18 certificaciones técnicas.",
  keywords = "desarrollador java, programador backend, spring boot, sql, testing, junit, alemania, sevilla, españa, arquitectura software, alberto agreda, nexustech",
  image = typeof window !== 'undefined' ? `${window.location.origin}/og-image.jpg` : '/og-image.jpg',
  url = typeof window !== 'undefined' ? window.location.href : '',
  type = "website",
  author = "Alberto Agreda",
  publishedTime,
  modifiedTime,
  locale = "es_ES",
  alternateLocales = ["en_US", "de_DE"],
  canonicalUrl
}: SEOHeadProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper function to update or create meta tag
    const updateMetaTag = (selector: string, content: string, attribute: string = 'content') => {
      if (!content) return;
      
      let element = document.querySelector(selector);
      if (element) {
        element.setAttribute(attribute, content);
      } else {
        element = document.createElement('meta');
        const selectorParts = selector.replace(/[\[\]']/g, '').split('=');
        if (selectorParts[0] === 'meta[name') {
          element.setAttribute('name', selectorParts[1]);
        } else if (selectorParts[0] === 'meta[property') {
          element.setAttribute('property', selectorParts[1]);
        } else if (selectorParts[0] === 'meta[itemprop') {
          element.setAttribute('itemprop', selectorParts[1]);
        }
        element.setAttribute(attribute, content);
        document.head.appendChild(element);
      }
    };

    // Helper function to update or create link tag
    const updateLinkTag = (rel: string, href: string, additional?: Record<string, string>) => {
      if (!href) return;
      
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (element) {
        element.setAttribute('href', href);
      } else {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        element.setAttribute('href', href);
        if (additional) {
          Object.entries(additional).forEach(([key, value]) => {
            element!.setAttribute(key, value);
          });
        }
        document.head.appendChild(element);
      }
    };

    // Basic meta tags
    updateMetaTag('meta[name="description"]', description);
    updateMetaTag('meta[name="keywords"]', keywords);
    updateMetaTag('meta[name="author"]', author);
    updateMetaTag('meta[name="viewport"]', 'width=device-width, initial-scale=1.0');
    updateMetaTag('meta[name="robots"]', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    updateMetaTag('meta[name="googlebot"]', 'index, follow');

    // Theme and branding
    updateMetaTag('meta[name="theme-color"]', '#3b82f6');
    updateMetaTag('meta[name="msapplication-TileColor"]', '#3b82f6');
    updateMetaTag('meta[name="msapplication-config"]', '/browserconfig.xml');

    // Open Graph (Facebook, LinkedIn)
    updateMetaTag('meta[property="og:title"]', title);
    updateMetaTag('meta[property="og:description"]', description);
    updateMetaTag('meta[property="og:image"]', image);
    updateMetaTag('meta[property="og:image:width"]', '1200');
    updateMetaTag('meta[property="og:image:height"]', '630');
    updateMetaTag('meta[property="og:image:alt"]', `${author} - Portfolio profesional`);
    updateMetaTag('meta[property="og:url"]', url);
    updateMetaTag('meta[property="og:type"]', type);
    updateMetaTag('meta[property="og:site_name"]', 'NexusTech - Portfolio Profesional');
    updateMetaTag('meta[property="og:locale"]', locale);
    
    // Alternate locales
    alternateLocales?.forEach(altLocale => {
      updateMetaTag(`meta[property="og:locale:alternate"][content="${altLocale}"]`, altLocale);
    });

    // Article specific (for blog posts, projects)
    if (type === 'article' && publishedTime) {
      updateMetaTag('meta[property="article:published_time"]', publishedTime);
      updateMetaTag('meta[property="article:author"]', author);
      updateMetaTag('meta[property="article:section"]', 'Technology');
      updateMetaTag('meta[property="article:tag"]', keywords);
    }
    if (modifiedTime) {
      updateMetaTag('meta[property="article:modified_time"]', modifiedTime);
    }

    // Twitter Cards (optimized for professional sharing)
    updateMetaTag('meta[name="twitter:card"]', 'summary_large_image');
    updateMetaTag('meta[name="twitter:title"]', title);
    updateMetaTag('meta[name="twitter:description"]', description);
    updateMetaTag('meta[name="twitter:image"]', image);
    updateMetaTag('meta[name="twitter:image:alt"]', `${author} - Desarrollador Java Portfolio`);
    updateMetaTag('meta[name="twitter:creator"]', '@albertoagreda');
    updateMetaTag('meta[name="twitter:site"]', '@nexustech_dev');

    // Schema.org microdata
    updateMetaTag('meta[itemprop="name"]', title);
    updateMetaTag('meta[itemprop="description"]', description);
    updateMetaTag('meta[itemprop="image"]', image);

    // Professional/Business specific
    updateMetaTag('meta[name="geo.region"]', 'ES-AN');
    updateMetaTag('meta[name="geo.placename"]', 'Sevilla');
    updateMetaTag('meta[name="geo.position"]', '37.3891;-5.9845');
    updateMetaTag('meta[name="ICBM"]', '37.3891, -5.9845');

    // Language and internationalization
    updateMetaTag('meta[name="language"]', 'Spanish');
    updateMetaTag('meta[http-equiv="content-language"]', 'es', 'http-equiv');

    // Professional credentials
    updateMetaTag('meta[name="skills"]', 'Java, Spring Boot, SQL, Testing, Backend Development, Software Architecture');
    updateMetaTag('meta[name="experience"]', '2+ years international experience');
    updateMetaTag('meta[name="location"]', 'Sevilla, Spain');

    // Canonical URL
    updateLinkTag('canonical', canonicalUrl || url);

    // Preconnect to external domains
    updateLinkTag('preconnect', 'https://fonts.googleapis.com');
    updateLinkTag('preconnect', 'https://fonts.gstatic.com', { crossorigin: 'anonymous' });
    updateLinkTag('dns-prefetch', '//www.googletagmanager.com');

    // PWA manifest
    updateLinkTag('manifest', '/manifest.json');

    // Favicons and app icons
    updateLinkTag('apple-touch-icon', '/icons/icon-192x192.png', { sizes: '192x192' });
    updateLinkTag('icon', '/icons/icon-32x32.png', { sizes: '32x32', type: 'image/png' });
    updateLinkTag('icon', '/icons/icon-16x16.png', { sizes: '16x16', type: 'image/png' });

    // RSS feed (if you have one)
    updateLinkTag('alternate', '/feed.xml', { type: 'application/rss+xml', title: 'NexusTech Blog Feed' });

  }, [title, description, keywords, image, url, type, author, publishedTime, modifiedTime, locale, alternateLocales, canonicalUrl]);

  return null;
}