import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { 
  MessageCircle, 
  Workflow, 
  Code, 
  Server, 
  TrendingUp, 
  Video,
  Phone,
  Mail,
  ExternalLink,
  CheckCircle
} from "lucide-react";

export function ServicesPage() {
  const services = [
    {
      title: "Chatbots Inteligentes",
      description: "Desarrollo de chatbots conversacionales con IA para atención al cliente, soporte técnico y automatización de consultas.",
      icon: MessageCircle,
      image: "https://images.unsplash.com/photo-1684487747720-1ba29cda82f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGF0Ym90JTIwYXJ0aWZpY2lhbCUyMGludGVsbGlnZW5jZXxlbnwxfHx8fDE3NTgwOTEzNTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["WhatsApp", "Telegram", "Web", "IA"],
      services: [
        "Integración con WhatsApp Business",
        "Procesamiento de lenguaje natural",
        "Respuestas personalizadas",
        "Análisis de conversaciones"
      ],
      color: "bg-green-500/10 text-green-600 border-green-200 dark:border-green-800"
    },
    {
      title: "Automatización N8N",
      description: "Creación de flujos de trabajo automatizados que conectan diferentes herramientas y servicios para optimizar procesos empresariales.",
      icon: Workflow,
      image: "https://images.unsplash.com/photo-1720036236694-d0a231c52563?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbWF0aW9uJTIwd29ya2Zsb3clMjBuOG58ZW58MXx8fHwxNzU4MTA3OTkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["N8N", "Zapier", "APIs", "Workflows"],
      services: [
        "Sincronización de datos",
        "Notificaciones automáticas",
        "Integración de CRM",
        "Generación de reportes"
      ],
      color: "bg-purple-500/10 text-purple-600 border-purple-200 dark:border-purple-800"
    },
    {
      title: "Desarrollo Web & Apps",
      description: "Desarrollo full stack de aplicaciones web y móviles modernas, desde landing pages hasta sistemas complejos de gestión.",
      icon: Code,
      image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMG1vYmlsZSUyMGFwcHN8ZW58MXx8fHwxNzU4MTA3OTk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React", "Node.js", "Flutter", "Full Stack"],
      services: [
        "Aplicaciones web responsive",
        "Apps móviles nativas",
        "Dashboards interactivos",
        "E-commerce personalizado"
      ],
      color: "bg-blue-500/10 text-blue-600 border-blue-200 dark:border-blue-800"
    },
    {
      title: "Infraestructura & Servidores",
      description: "Configuración, administración y mantenimiento de servidores, diagnóstico de errores y optimización de infraestructura.",
      icon: Server,
      image: "https://images.unsplash.com/photo-1489436969537-cf0c1dc69cba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2ZXIlMjBpbmZyYXN0cnVjdHVyZSUyMGNsb3VkfGVufDF8fHx8MTc1ODEwNzk5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["AWS", "Docker", "Linux", "DevOps"],
      services: [
        "Configuración de servidores",
        "Diagnóstico de errores",
        "Optimización de rendimiento",
        "Monitoreo y alertas"
      ],
      color: "bg-orange-500/10 text-orange-600 border-orange-200 dark:border-orange-800"
    },
    {
      title: "Marketing Digital con IA",
      description: "Estrategias de marketing digital potenciadas con inteligencia artificial para maximizar ROI y generar leads de calidad.",
      icon: TrendingUp,
      image: "https://images.unsplash.com/photo-1599658880436-c61792e70672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc1ODA2NzMzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["SEO", "SEM", "Social Media", "IA"],
      services: [
        "Posicionamiento SEO avanzado",
        "Campañas publicitarias IA",
        "Búsqueda de leads potenciales",
        "Automatización de marketing"
      ],
      color: "bg-pink-500/10 text-pink-600 border-pink-200 dark:border-pink-800"
    },
    {
      title: "Edición Multimedia",
      description: "Edición profesional de fotos y videos para contenido digital, marketing y presentaciones empresariales.",
      icon: Video,
      image: "https://images.unsplash.com/photo-1663560453399-f972f1e58d03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmclMjBtdWx0aW1lZGlhfGVufDF8fHx8MTc1ODEwODAwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Photoshop", "Premiere", "After Effects", "Canva"],
      services: [
        "Retoque fotográfico profesional",
        "Edición de video corporativo",
        "Animaciones y motion graphics",
        "Contenido para redes sociales"
      ],
      color: "bg-cyan-500/10 text-cyan-600 border-cyan-200 dark:border-cyan-800"
    }
  ];

  const handleContactService = (serviceName: string, method: 'whatsapp' | 'email' | 'phone') => {
    const message = `Hola Alberto, estoy interesado en tu servicio de ${serviceName}. Me gustaría obtener más información.`;
    
    switch (method) {
      case 'whatsapp':
        window.open(`https://wa.me/34611456367?text=${encodeURIComponent(message)}`, '_blank');
        break;
      case 'email':
        window.open(`mailto:albertguiver@gmail.com?subject=Consulta sobre ${serviceName}&body=${encodeURIComponent(message)}`, '_blank');
        break;
      case 'phone':
        window.open('tel:+34611456367', '_blank');
        break;
    }

    // Track service interest
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'service_interest', {
        event_category: 'Services',
        event_label: serviceName,
        service_name: serviceName,
        contact_method: method,
        value: 1
      });
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Workflow className="mr-2 h-4 w-4" />
            <span className="text-sm font-medium">Servicios Especializados</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Servicios Especializados
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ofrezco soluciones tecnológicas integrales que transforman la manera en que tu empresa 
            opera, automatizando procesos y mejorando la eficiencia operacional.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:gap-12 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border-2 hover:border-primary/20"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative overflow-hidden">
                  <div className="aspect-[4/3] lg:aspect-[3/2]">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-500" />
                    
                    {/* Service Icon */}
                    <div className="absolute top-6 left-6">
                      <div className={`p-3 rounded-xl ${service.color} backdrop-blur-md shadow-lg border`}>
                        <service.icon className="h-6 w-6" />
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex flex-wrap gap-2">
                        {service.tags.map((tag, tagIndex) => (
                          <Badge 
                            key={tagIndex} 
                            variant="secondary" 
                            className="bg-background/90 text-foreground backdrop-blur-md hover:bg-background transition-all duration-300"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 lg:p-8 flex flex-col justify-between">
                  <div className="space-y-6">
                    <div>
                      <CardTitle className="text-2xl lg:text-3xl mb-4 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </CardTitle>
                      <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Services Included */}
                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">Incluye:</h4>
                      <ul className="space-y-2">
                        {service.services.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start space-x-3">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm lg:text-base">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Contact Actions */}
                  <div className="mt-6 pt-6 border-t space-y-4">
                    <p className="text-sm text-muted-foreground">
                      ¿Interesado en este servicio? Contacta conmigo:
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button
                        onClick={() => handleContactService(service.title, 'whatsapp')}
                        size="sm"
                        className="bg-green-600 hover:bg-green-700 text-white transition-all duration-300 hover:scale-105"
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        WhatsApp
                      </Button>
                      <Button
                        onClick={() => handleContactService(service.title, 'email')}
                        variant="outline"
                        size="sm"
                        className="transition-all duration-300 hover:scale-105"
                      >
                        <Mail className="mr-2 h-4 w-4" />
                        Email
                      </Button>
                      <Button
                        onClick={() => handleContactService(service.title, 'phone')}
                        variant="outline"
                        size="sm"
                        className="transition-all duration-300 hover:scale-105"
                      >
                        <Phone className="mr-2 h-4 w-4" />
                        Llamar
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="text-center p-8 lg:p-12 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-primary/20">
          <CardContent className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">
              ¿Listo para transformar tu negocio?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Contacta conmigo para discutir cómo mis servicios pueden ayudar a tu empresa 
              a alcanzar el siguiente nivel de eficiencia y automatización.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button
                onClick={() => window.open('https://wa.me/34611456367?text=Hola Alberto, me interesan tus servicios especializados. ¿Podemos agendar una consulta?', '_blank')}
                size="lg"
                className="transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Consulta Gratuita
              </Button>
              <Button
                onClick={() => window.open('mailto:albertguiver@gmail.com?subject=Consulta sobre Servicios Especializados&body=Hola Alberto, me interesan tus servicios especializados. Me gustaría agendar una consulta para discutir mis necesidades.', '_blank')}
                variant="outline"
                size="lg"
                className="transition-all duration-300 hover:scale-105"
              >
                <Mail className="mr-2 h-5 w-5" />
                Enviar Email
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}