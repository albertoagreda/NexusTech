import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  Bot, Zap, BarChart3, Code, MessageSquare, Workflow, Database, Globe,
  Smartphone, Server, Search, Image, Target, Settings, TrendingUp, Video
} from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      title: "Chatbots Inteligentes",
      description: "Desarrollo de chatbots conversacionales con IA para atención al cliente, soporte técnico y automatización de consultas.",
      image: "https://images.unsplash.com/photo-1684487747720-1ba29cda82f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGF0Ym90JTIwYXJ0aWZpY2lhbCUyMGludGVsbGlnZW5jZXxlbnwxfHx8fDE3NTgwOTEzNTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: Bot,
      tags: ["WhatsApp", "Telegram", "Web", "IA"],
      features: [
        "Integración con WhatsApp Business",
        "Procesamiento de lenguaje natural",
        "Respuestas personalizadas",
        "Análisis de conversaciones"
      ]
    },
    {
      title: "Automatización N8N",
      description: "Creación de flujos de trabajo automatizados que conectan diferentes herramientas y servicios para optimizar procesos empresariales.",
      image: "https://images.unsplash.com/photo-1638231463565-8a89bea6f32c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbWF0aW9uJTIwd29ya2Zsb3clMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1ODA2MDQzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: Zap,
      tags: ["N8N", "Zapier", "APIs", "Workflows"],
      features: [
        "Sincronización de datos",
        "Notificaciones automáticas",
        "Integración de CRM",
        "Generación de reportes"
      ]
    },
    {
      title: "Desarrollo Web & Apps",
      description: "Desarrollo full stack de aplicaciones web y móviles modernas, desde landing pages hasta sistemas complejos de gestión.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NTgwMTA4OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: Code,
      tags: ["React", "Node.js", "Flutter", "Full Stack"],
      features: [
        "Aplicaciones web responsive",
        "Apps móviles nativas",
        "Dashboards interactivos",
        "E-commerce personalizado"
      ]
    },
    {
      title: "Infraestructura & Servidores",
      description: "Configuración, administración y mantenimiento de servidores, diagnóstico de errores y optimización de infraestructura.",
      image: "https://images.unsplash.com/photo-1746893737268-81fe686e6a51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2ZXIlMjBpbmZyYXN0cnVjdHVyZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU4MDgyOTY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: Server,
      tags: ["AWS", "Docker", "Linux", "DevOps"],
      features: [
        "Configuración de servidores",
        "Diagnóstico de errores",
        "Optimización de rendimiento",
        "Monitoreo y alertas"
      ]
    },
    {
      title: "Marketing Digital con IA",
      description: "Estrategias de marketing digital potenciadas con inteligencia artificial para maximizar ROI y generar leads de calidad.",
      image: "https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTRU8lMjBtYXJrZXRpbmclMjBkaWdpdGFsfGVufDF8fHx8MTc1ODA5MTc0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: TrendingUp,
      tags: ["SEO", "SEM", "Social Media", "IA"],
      features: [
        "Posicionamiento SEO avanzado",
        "Campañas publicitarias IA",
        "Búsqueda de leads potenciales",
        "Automatización de marketing"
      ]
    },
    {
      title: "Edición Multimedia",
      description: "Edición profesional de fotos y videos para contenido digital, marketing y presentaciones empresariales.",
      image: "https://images.unsplash.com/photo-1727847455678-2c54916d01a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90byUyMHZpZGVvJTIwZWRpdGluZyUyMGNyZWF0aXZlfGVufDF8fHx8MTc1ODA5MTczOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: Video,
      tags: ["Photoshop", "Premiere", "After Effects", "Canva"],
      features: [
        "Retoque fotográfico profesional",
        "Edición de video corporativo",
        "Animaciones y motion graphics",
        "Contenido para redes sociales"
      ]
    }
  ];

  return (
    <section id="servicios" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">Servicios Especializados</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ofrezco soluciones tecnológicas integrales que transforman la manera en que tu empresa 
            opera, automatizando procesos y mejorando la eficiencia operacional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-background/90 backdrop-blur-sm p-2 rounded-lg">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {service.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="text-sm text-muted-foreground">Incluye:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <MessageSquare className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-sm text-muted-foreground">WhatsApp</div>
            </div>
            <div className="text-center">
              <Workflow className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-sm text-muted-foreground">N8N</div>
            </div>
            <div className="text-center">
              <Database className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-sm text-muted-foreground">Bases de Datos</div>
            </div>
            <div className="text-center">
              <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-sm text-muted-foreground">APIs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}