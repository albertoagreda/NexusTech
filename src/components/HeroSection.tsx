import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowRight, Bot, Zap, Code } from "lucide-react";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto text-center relative">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <Badge variant="secondary" className="px-3 py-1">
              Disponible para proyectos
            </Badge>
          </div>
          
          <h1 className="mb-6">
            Soluciones Tecnológicas
            <br />
            <span className="text-primary">de Próxima Generación</span>
          </h1>
          
          <p className="mb-8 text-muted-foreground max-w-2xl mx-auto">
            En NexusTech desarrollamos automatizaciones inteligentes, chatbots con IA, 
            marketing digital y aplicaciones web/móvil que revolucionan tu negocio. 
            Transformamos ideas en soluciones tecnológicas innovadoras desde Sevilla, España.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('servicios')}
              className="group"
            >
              Ver mis servicios
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('contacto')}
            >
              Contactar ahora
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 p-4 rounded-lg border bg-card/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <Bot className="h-6 w-6 text-primary" />
              <span>Chatbots IA</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 rounded-lg border bg-card/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <Zap className="h-6 w-6 text-primary" />
              <span>Automatización N8N</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 rounded-lg border bg-card/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <Code className="h-6 w-6 text-primary" />
              <span>Desarrollo Full Stack</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}