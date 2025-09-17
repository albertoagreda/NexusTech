import { Card, CardContent } from "./ui/card";
import { MapPin, Clock, Navigation } from "lucide-react";
import { Button } from "./ui/button";

export function LocationSection() {
  const openInMaps = () => {
    window.open('https://maps.google.com/?q=Sevilla,+España', '_blank');
  };

  return (
    <section id="ubicacion" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-blue-500/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">Ubicación</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Basado en Sevilla, España. Trabajando con clientes a nivel nacional e internacional 
            a través de herramientas digitales y reuniones online.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3>Sevilla, España</h3>
                <p className="text-muted-foreground">
                  Ubicado en el corazón de Andalucía, ofreciendo servicios 
                  tecnológicos a nivel nacional e internacional.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4>Horario de Atención</h4>
                <p className="text-muted-foreground">
                  Lunes a Viernes: 9:00 - 18:00 (CET)<br />
                  Disponibilidad flexible para proyectos urgentes
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Navigation className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4>Trabajo Remoto</h4>
                <p className="text-muted-foreground">
                  Colaboración online efectiva con clientes en toda España 
                  y Europa mediante videollamadas y herramientas digitales.
                </p>
              </div>
            </div>

            <Button onClick={openInMaps} size="lg" className="w-full sm:w-auto">
              Ver en Google Maps
              <Navigation className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d403701.3642533687!2d-6.2293559!3d37.3828318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126c1114be6291%3A0x34f018621cfe5648!2sSeville%2C%20Spain!5e0!3m2!1sen!2ses!4v1690000000000!5m2!1sen!2ses"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa de Sevilla, España"
                  className="rounded-lg"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center p-6">
            <div className="text-2xl text-primary mb-2">🇪🇸</div>
            <h4>España</h4>
            <p className="text-muted-foreground text-sm">
              Servicios en todo el territorio nacional
            </p>
          </Card>
          <Card className="text-center p-6">
            <div className="text-2xl text-primary mb-2">🇪🇺</div>
            <h4>Europa</h4>
            <p className="text-muted-foreground text-sm">
              Colaboración con clientes europeos
            </p>
          </Card>
          <Card className="text-center p-6">
            <div className="text-2xl text-primary mb-2">🌐</div>
            <h4>Internacional</h4>
            <p className="text-muted-foreground text-sm">
              Proyectos remotos globales
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}