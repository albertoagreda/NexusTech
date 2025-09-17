import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Home, ArrowLeft, Search, Mail } from "lucide-react";
import { Logo } from "../Logo";

interface NotFoundPageProps {
  onNavigate: (page: string) => void;
}

export function NotFoundPage({ onNavigate }: NotFoundPageProps) {
  const handleGoHome = () => {
    onNavigate('home');
    
    // Track 404 error recovery
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'error_recovery', {
        event_category: '404',
        event_label: 'home_redirect',
        value: 1
      });
    }
  };

  const handleGoBack = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      window.history.back();
      
      // Track back navigation
      if ((window as any).gtag) {
        (window as any).gtag('event', 'error_recovery', {
          event_category: '404',
          event_label: 'back_navigation',
          value: 1
        });
      }
    } else {
      handleGoHome();
    }
  };

  // Track 404 error
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'exception', {
      description: '404_page_not_found',
      fatal: false,
      custom_parameter: window.location.pathname
    });
  }

  return (
    <div className="min-h-screen pt-16 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <Card className="p-8 sm:p-12">
          <CardContent className="space-y-8">
            {/* Logo */}
            <div className="flex justify-center">
              <Logo size="lg" showText={true} />
            </div>

            {/* 404 Display */}
            <div className="space-y-4">
              <div className="relative">
                <div className="text-8xl sm:text-9xl font-bold text-primary/20 select-none">
                  404
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl sm:text-5xl font-bold text-primary animate-pulse">
                    ¡Ups!
                  </div>
                </div>
              </div>
              
              <h1 className="text-3xl sm:text-4xl font-bold">
                Página no encontrada
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-md mx-auto">
                Lo siento, la página que buscas no existe o ha sido movida. 
                Pero no te preocupes, puedo ayudarte a encontrar lo que necesitas.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="space-y-6">
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  onClick={handleGoHome}
                  size="lg"
                  className="group transition-all duration-300 hover:scale-105"
                >
                  <Home className="mr-2 h-4 w-4" />
                  Ir al inicio
                </Button>
                
                <Button 
                  variant="outline"
                  onClick={handleGoBack}
                  size="lg"
                  className="group transition-all duration-300 hover:scale-105"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Volver atrás
                </Button>
              </div>

              {/* Quick Links */}
              <div className="border-t pt-6">
                <h3 className="font-semibold mb-4">Enlaces útiles:</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { name: 'Ver proyectos', page: 'projects', icon: Search },
                    { name: 'Mi experiencia', page: 'experience', icon: Search },
                    { name: 'Certificaciones', page: 'certifications', icon: Search },
                    { name: 'Contactar', page: 'contact', icon: Mail },
                  ].map((link) => (
                    <Button
                      key={link.page}
                      variant="ghost"
                      onClick={() => onNavigate(link.page)}
                      className="justify-start h-auto p-3 transition-all duration-300 hover:scale-105"
                    >
                      <link.icon className="mr-2 h-4 w-4" />
                      {link.name}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="border-t pt-6 space-y-4">
              <p className="text-sm text-muted-foreground">
                ¿No encuentras lo que buscas?
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open('mailto:albertguiver@gmail.com', '_blank')}
                  className="transition-all duration-300 hover:scale-105"
                >
                  <Mail className="mr-2 h-3 w-3" />
                  Contáctame
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open('https://wa.me/34611456367', '_blank')}
                  className="transition-all duration-300 hover:scale-105"
                >
                  WhatsApp
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}