import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Download, X, RefreshCw } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
}

export function PWAProvider() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [showUpdatePrompt, setShowUpdatePrompt] = useState(false);
  const [registration, setRegistration] = useState<ServiceWorkerRegistration | null>(null);

  useEffect(() => {
    // Register service worker
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      navigator.serviceWorker
        .register('/sw.js')
        .then((reg) => {
          console.log('🚀 NexusTech: Service Worker registered');
          setRegistration(reg);

          // Check for updates
          reg.addEventListener('updatefound', () => {
            const newWorker = reg.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  setShowUpdatePrompt(true);
                }
              });
            }
          });
        })
        .catch((error) => {
          console.error('🚨 NexusTech: Service Worker registration failed:', error);
        });
    }

    // Handle install prompt
    const handleBeforeInstallPrompt = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      setDeferredPrompt(e);
      
      // Only show install prompt if not already installed and user hasn't dismissed it recently
      const dismissedTime = localStorage.getItem('pwa-install-dismissed');
      const daysSinceDismissed = dismissedTime ? 
        (Date.now() - parseInt(dismissedTime)) / (1000 * 60 * 60 * 24) : 999;
      
      if (daysSinceDismissed > 7) { // Show again after 7 days
        setTimeout(() => {
          setShowInstallPrompt(true);
        }, 30000); // Show after 30 seconds
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt as EventListener);

    // Check if app is already installed
    window.addEventListener('appinstalled', () => {
      console.log('🎉 NexusTech: PWA installed');
      setShowInstallPrompt(false);
      setDeferredPrompt(null);
      
      // Track installation
      if ((window as any).gtag) {
        (window as any).gtag('event', 'pwa_install', {
          event_category: 'PWA',
          event_label: 'app_installed',
          value: 1
        });
      }

      toast.success('¡Aplicación instalada!', {
        description: 'Ahora puedes acceder a NexusTech desde tu escritorio',
        duration: 5000,
      });
    });

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt as EventListener);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    try {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      
      console.log(`🎯 NexusTech: Install prompt result: ${outcome}`);
      
      // Track user choice
      if ((window as any).gtag) {
        (window as any).gtag('event', 'pwa_install_prompt', {
          event_category: 'PWA',
          event_label: outcome,
          value: outcome === 'accepted' ? 1 : 0
        });
      }

      if (outcome === 'dismissed') {
        localStorage.setItem('pwa-install-dismissed', Date.now().toString());
      }

      setDeferredPrompt(null);
      setShowInstallPrompt(false);
    } catch (error) {
      console.error('🚨 NexusTech: Install prompt error:', error);
    }
  };

  const handleDismissInstall = () => {
    setShowInstallPrompt(false);
    localStorage.setItem('pwa-install-dismissed', Date.now().toString());
    
    // Track dismissal
    if ((window as any).gtag) {
      (window as any).gtag('event', 'pwa_install_dismissed', {
        event_category: 'PWA',
        event_label: 'user_dismissed',
        value: 1
      });
    }
  };

  const handleUpdate = () => {
    if (!registration || !registration.waiting) return;

    // Tell the service worker to skip waiting
    registration.waiting.postMessage({ type: 'SKIP_WAITING' });
    
    // Reload the page to load the new version
    window.location.reload();
    
    // Track update
    if ((window as any).gtag) {
      (window as any).gtag('event', 'pwa_update', {
        event_category: 'PWA',
        event_label: 'app_updated',
        value: 1
      });
    }
  };

  return (
    <>
      {/* Install Prompt */}
      {showInstallPrompt && (
        <div className="fixed bottom-4 right-4 z-50 max-w-sm">
          <Card className="shadow-lg border-2 border-primary/20">
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Download className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm">Instalar NexusTech</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Acceso rápido desde tu escritorio o móvil
                  </p>
                  <div className="flex space-x-2 mt-3">
                    <Button
                      onClick={handleInstall}
                      size="sm"
                      className="h-8 text-xs"
                    >
                      Instalar
                    </Button>
                    <Button
                      onClick={handleDismissInstall}
                      variant="outline"
                      size="sm"
                      className="h-8 text-xs"
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Update Prompt */}
      {showUpdatePrompt && (
        <div className="fixed top-4 right-4 z-50 max-w-sm">
          <Card className="shadow-lg border-2 border-blue-200 bg-blue-50 dark:bg-blue-950 dark:border-blue-800">
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <RefreshCw className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm">Actualización disponible</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Nueva versión de NexusTech lista
                  </p>
                  <div className="flex space-x-2 mt-3">
                    <Button
                      onClick={handleUpdate}
                      size="sm"
                      className="h-8 text-xs"
                    >
                      Actualizar
                    </Button>
                    <Button
                      onClick={() => setShowUpdatePrompt(false)}
                      variant="outline"
                      size="sm"
                      className="h-8 text-xs"
                    >
                      Después
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}