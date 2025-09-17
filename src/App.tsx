import { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./components/pages/HomePage";
import { ProjectsPage } from "./components/pages/ProjectsPage";
import { CertificationsPage } from "./components/pages/CertificationsPage";
import { ExperiencePage } from "./components/pages/ExperiencePage";
import { EducationPage } from "./components/pages/EducationPage";
import { ServicesPage } from "./components/pages/ServicesPage";
import { TestimonialsPage } from "./components/pages/TestimonialsPage";
import { AboutPage } from "./components/pages/AboutPage";
import { ContactPage } from "./components/pages/ContactPage";
import { CookiePolicyPage } from "./components/pages/CookiePolicyPage";
import { PrivacyPolicyPage } from "./components/pages/PrivacyPolicyPage";
import { NotFoundPage } from "./components/pages/NotFoundPage";
import { Footer } from "./components/Footer";
import { CookieBanner } from "./components/CookieBanner";
import { ScrollToTop } from "./components/ScrollToTop";
import { ThemeProvider } from "./components/ThemeProvider";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { SEOHead } from "./components/SEOHead";
import { StructuredData } from "./components/StructuredData";
import { WebVitals } from "./components/WebVitals";
import { PWAProvider } from "./components/PWAProvider";
import { Analytics, useAnalytics } from "./components/Analytics";
import { FaviconGenerator } from "./components/FaviconGenerator";
import { Toaster } from "./components/ui/sonner";

type PageType = 'home' | 'projects' | 'certifications' | 'experience' | 'education' | 'services' | 'testimonials' | 'about' | 'contact' | 'cookie-policy' | 'privacy-policy' | '404';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [is404, setIs404] = useState(false);

  const pageTitle = {
    home: 'NexusTech - Alberto Agreda | Desarrollador Java',
    projects: 'Proyectos - NexusTech | Portfolio de Desarrollo Java',
    certifications: 'Certificaciones - NexusTech | 18 Certificaciones Técnicas',
    experience: 'Experiencia - NexusTech | Desarrollador Internacional',
    education: 'Estudios - NexusTech | Formación Técnica Especializada',
    services: 'Servicios Especializados - NexusTech | Soluciones Tecnológicas',
    testimonials: 'Testimonios - NexusTech | Clientes Satisfechos',
    about: 'Sobre mí - NexusTech | Alberto Agreda Desarrollador',
    contact: 'Contacto - NexusTech | Desarrollador Java Disponible',
    'cookie-policy': 'Política de Cookies - NexusTech',
    'privacy-policy': 'Política de Privacidad - NexusTech',
    '404': 'Página no encontrada - NexusTech'
  };

  const pageDescriptions = {
    home: 'Desarrollador Java con experiencia internacional en España y Alemania. Especializado en desarrollo backend, Spring Boot, arquitectura de software y optimización de procesos. 18 certificaciones técnicas.',
    projects: 'Explora mis proyectos de desarrollo Java, aplicaciones backend con Spring Boot, APIs REST y soluciones empresariales con arquitectura sólida.',
    certifications: 'Mis 18 certificaciones técnicas especializadas en Java, Spring Boot, testing con JUnit, bases de datos SQL y metodologías ágiles.',
    experience: 'Mi experiencia profesional como desarrollador Java senior en España y Alemania. Más de 2 años de experiencia internacional en equipos multiculturales.',
    education: 'Formación académica en Desarrollo de Aplicaciones Multiplataforma y cursos especializados en tecnologías Java y desarrollo de software.',
    services: 'Servicios especializados en desarrollo de software: Chatbots IA, automatización N8N, desarrollo web & apps, infraestructura, marketing digital e edición multimedia. Soluciones tecnológicas integrales.',
    testimonials: 'Opiniones y testimonios de clientes satisfechos de España y Alemania sobre proyectos de desarrollo Java y consultoría técnica.',
    about: 'Conoce mi historia como desarrollador Java, mi experiencia internacional en Alemania y mi pasión por crear soluciones técnicas innovadoras.',
    contact: 'Ponte en contacto conmigo para proyectos de desarrollo Java, consultoría técnica y desarrollo de aplicaciones backend. Disponible para nuevos proyectos.',
    'cookie-policy': 'Política de cookies de NexusTech - Información sobre el uso de cookies en nuestro sitio web.',
    'privacy-policy': 'Política de privacidad de NexusTech - Cómo protegemos y utilizamos tu información personal.',
    '404': 'Página no encontrada en NexusTech. La página que buscas no existe, pero puedes navegar a otras secciones del portfolio.'
  };

  useEffect(() => {
    document.title = pageTitle[currentPage];
  }, [currentPage]);

  const handlePageChange = (page: string) => {
    const validPages = ['home', 'projects', 'certifications', 'experience', 'education', 'services', 'testimonials', 'about', 'contact', 'cookie-policy', 'privacy-policy'];
    
    if (validPages.includes(page)) {
      setCurrentPage(page as PageType);
      setIs404(false);
    } else {
      setCurrentPage('404');
      setIs404(true);
    }
    
    // Track page change for analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_title: pageTitle[page as PageType] || pageTitle['404'],
        page_location: window.location.href,
        custom_parameter: is404 ? 'error_page' : 'regular_page'
      });
    }
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handlePageChange} />;
      case 'projects':
        return <ProjectsPage onNavigate={handlePageChange} />;
      case 'certifications':
        return <CertificationsPage />;
      case 'experience':
        return <ExperiencePage />;
      case 'education':
        return <EducationPage />;
      case 'services':
        return <ServicesPage />;
      case 'testimonials':
        return <TestimonialsPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'cookie-policy':
        return <CookiePolicyPage />;
      case 'privacy-policy':
        return <PrivacyPolicyPage />;
      case '404':
        return <NotFoundPage onNavigate={handlePageChange} />;
      default:
        return <NotFoundPage onNavigate={handlePageChange} />;
    }
  };

  return (
    <ThemeProvider defaultTheme="system" storageKey="nexustech-ui-theme">
      <ErrorBoundary>
        <div className="min-h-screen bg-background">
          <SEOHead 
            title={pageTitle[currentPage]}
            description={pageDescriptions[currentPage]}
            type={currentPage === 'projects' ? 'article' : 'website'}
            canonicalUrl={typeof window !== 'undefined' ? window.location.href : ''}
          />
          <StructuredData page={currentPage} />
          <WebVitals trackingId="G-XXXXXXXXXX" />
          <FaviconGenerator />
          <Analytics trackingId="G-XXXXXXXXXX" />
          <PWAProvider />
          
          {!is404 && <Navigation currentPage={currentPage} onPageChange={handlePageChange} />}
          {is404 && <Navigation currentPage="home" onPageChange={handlePageChange} />}
          
          <main className="transition-all duration-500 ease-in-out">
            {renderCurrentPage()}
          </main>
          
          {!is404 && <Footer onNavigate={handlePageChange} />}
          
          <ScrollToTop />
          <CookieBanner />
          <Toaster />
        </div>
      </ErrorBoundary>
    </ThemeProvider>
  );
}