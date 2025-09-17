import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Cookie, X, Settings } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Switch } from "./ui/switch";
import { Separator } from "./ui/separator";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    functionality: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookie-consent');
    if (!cookieConsent) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    const consent = {
      necessary: true,
      analytics: true,
      functionality: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookie-consent', JSON.stringify(consent));
    setIsVisible(false);
  };

  const acceptNecessary = () => {
    const consent = {
      necessary: true,
      analytics: false,
      functionality: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookie-consent', JSON.stringify(consent));
    setIsVisible(false);
  };

  const savePreferences = () => {
    const consent = {
      ...preferences,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookie-consent', JSON.stringify(consent));
    setIsVisible(false);
  };

  const handlePreferenceChange = (key: keyof typeof preferences, value: boolean) => {
    if (key === 'necessary') return; // Can't disable necessary cookies
    setPreferences(prev => ({ ...prev, [key]: value }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="max-w-4xl mx-auto shadow-2xl border-2">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <Cookie className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="mb-2">🍪 Uso de Cookies</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Utilizamos cookies para mejorar su experiencia de navegación, analizar el tráfico 
                del sitio y personalizar el contenido. Puede elegir qué tipos de cookies acepta.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button onClick={acceptAll} size="sm">
                  Aceptar todas
                </Button>
                <Button variant="outline" onClick={acceptNecessary} size="sm">
                  Solo necesarias
                </Button>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost" size="sm" className="flex items-center gap-2">
                      <Settings className="h-4 w-4" />
                      Personalizar
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-2">
                        <Settings className="h-5 w-5" />
                        Preferencias de Cookies
                      </DialogTitle>
                      <DialogDescription>
                        Gestione sus preferencias de cookies. Las cookies necesarias no se pueden desactivar.
                      </DialogDescription>
                    </DialogHeader>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-sm">Cookies necesarias</h4>
                          <p className="text-xs text-muted-foreground">
                            Esenciales para el funcionamiento del sitio
                          </p>
                        </div>
                        <Switch 
                          checked={preferences.necessary} 
                          disabled 
                        />
                      </div>
                      
                      <Separator />
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-sm">Cookies de análisis</h4>
                          <p className="text-xs text-muted-foreground">
                            Nos ayudan a mejorar el sitio web
                          </p>
                        </div>
                        <Switch 
                          checked={preferences.analytics} 
                          onCheckedChange={(checked) => handlePreferenceChange('analytics', checked)}
                        />
                      </div>
                      
                      <Separator />
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-sm">Cookies de funcionalidad</h4>
                          <p className="text-xs text-muted-foreground">
                            Mejoran la experiencia de usuario
                          </p>
                        </div>
                        <Switch 
                          checked={preferences.functionality} 
                          onCheckedChange={(checked) => handlePreferenceChange('functionality', checked)}
                        />
                      </div>
                    </div>
                    
                    <div className="flex gap-2 pt-4">
                      <Button onClick={savePreferences} size="sm" className="flex-1">
                        Guardar preferencias
                      </Button>
                    </div>
                    
                    <p className="text-xs text-muted-foreground text-center">
                      Para más información, consulte nuestra{" "}
                      <a href="/politica-cookies" className="text-primary hover:underline">
                        Política de Cookies
                      </a>
                    </p>
                  </DialogContent>
                </Dialog>
              </div>
              
              <p className="text-xs text-muted-foreground mt-3">
                Al continuar navegando, acepta nuestro uso de cookies. 
                <a href="/politica-privacidad" className="text-primary hover:underline ml-1">
                  Política de Privacidad
                </a>
              </p>
            </div>
            
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setIsVisible(false)}
              className="flex-shrink-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}