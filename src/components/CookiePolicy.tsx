import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import { Cookie, Settings, BarChart3, Shield, Info } from "lucide-react";

export function CookiePolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Cookie className="h-8 w-8 text-primary" />
          <h1>Política de Cookies</h1>
        </div>
        <p className="text-muted-foreground">
          Última actualización: 17 de septiembre de 2025
        </p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" />
              ¿Qué son las cookies?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando 
              visita nuestro sitio web. Nos ayudan a mejorar su experiencia de navegación, 
              recordar sus preferencias y analizar cómo utiliza nuestro sitio.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5 text-primary" />
              Tipos de cookies que utilizamos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="mb-3 flex items-center gap-2">
                <Shield className="h-4 w-4 text-green-600" />
                Cookies estrictamente necesarias
              </h4>
              <p className="text-muted-foreground mb-2">
                Estas cookies son esenciales para el funcionamiento del sitio web.
              </p>
              <ul className="space-y-1 text-muted-foreground ml-4 text-sm">
                <li>• Cookies de sesión para mantener su navegación</li>
                <li>• Cookies de seguridad para proteger contra ataques</li>
                <li>• Cookies de funcionalidad básica del sitio</li>
              </ul>
              <div className="mt-2 text-sm">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                  Siempre activas
                </span>
              </div>
            </div>

            <Separator />

            <div>
              <h4 className="mb-3 flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-blue-600" />
                Cookies de análisis
              </h4>
              <p className="text-muted-foreground mb-2">
                Nos ayudan a entender cómo interactúa con nuestro sitio web.
              </p>
              <ul className="space-y-1 text-muted-foreground ml-4 text-sm">
                <li>• Google Analytics para análisis de tráfico</li>
                <li>• Métricas de rendimiento del sitio</li>
                <li>• Información sobre páginas más visitadas</li>
              </ul>
              <div className="mt-2 text-sm">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  Opcional - Requiere consentimiento
                </span>
              </div>
            </div>

            <Separator />

            <div>
              <h4 className="mb-3 flex items-center gap-2">
                <Settings className="h-4 w-4 text-purple-600" />
                Cookies de funcionalidad
              </h4>
              <p className="text-muted-foreground mb-2">
                Mejoran la funcionalidad y personalización del sitio.
              </p>
              <ul className="space-y-1 text-muted-foreground ml-4 text-sm">
                <li>• Preferencias de idioma</li>
                <li>• Configuración de tema (claro/oscuro)</li>
                <li>• Recordar formularios completados</li>
              </ul>
              <div className="mt-2 text-sm">
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">
                  Opcional - Requiere consentimiento
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cookies de terceros</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Algunos servicios externos que utilizamos pueden establecer sus propias cookies:
            </p>
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h4 className="mb-2">Google Analytics</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Servicio de análisis web que nos ayuda a entender cómo los usuarios 
                  interactúan con nuestro sitio.
                </p>
                <p className="text-xs text-muted-foreground">
                  Más información: 
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                    Política de Privacidad de Google
                  </a>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Gestión de cookies</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Puede gestionar sus preferencias de cookies de las siguientes maneras:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• <strong>Banner de cookies:</strong> Al visitar nuestro sitio por primera vez</li>
              <li>• <strong>Configuración del navegador:</strong> Puede deshabilitar cookies en la configuración</li>
              <li>• <strong>Herramientas de terceros:</strong> Opt-out de Google Analytics</li>
            </ul>
            
            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-sm text-amber-800">
                <strong>Nota importante:</strong> Deshabilitar cookies puede afectar la funcionalidad 
                del sitio web y su experiencia de navegación.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Duración de las cookies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <h4 className="text-sm">Cookies de sesión</h4>
                <p className="text-sm text-muted-foreground">
                  Se eliminan automáticamente cuando cierra su navegador.
                </p>
              </div>
              <div>
                <h4 className="text-sm">Cookies persistentes</h4>
                <p className="text-sm text-muted-foreground">
                  Se mantienen durante un período específico (generalmente entre 1 mes y 2 años).
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contacto</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Si tiene preguntas sobre nuestra política de cookies:
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p><strong>Email:</strong> albertguiver@gmail.com</p>
              <p><strong>Teléfono:</strong> +34 611 456 367</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Separator className="my-8" />

      <div className="text-center text-sm text-muted-foreground">
        <p>
          Esta política de cookies puede ser actualizada periódicamente. 
          Cualquier cambio será notificado en esta página.
        </p>
      </div>
    </div>
  );
}