import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Badge } from "../ui/badge";
import { CVDownload } from "../CVDownload";
import { AvailabilityIndicator } from "../AvailabilityIndicator";
import { toast } from "sonner@2.0.3";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Clock,
  CheckCircle,
  Globe,
  MessageSquare
} from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "Respuesta en 24 horas",
    value: "albertguiver@gmail.com",
    href: "mailto:albertguiver@gmail.com",
    color: "text-blue-600"
  },
  {
    icon: Phone,
    title: "Teléfono",
    description: "Disponible 9:00 - 18:00",
    value: "+34 611 456 367",
    href: "tel:+34611456367",
    color: "text-green-600"
  },
  {
    icon: MessageSquare,
    title: "WhatsApp",
    description: "Disponible 9:00 - 21:00",
    value: "+34 611 456 367",
    href: "https://wa.me/34611456367",
    color: "text-green-600"
  },
  {
    icon: MapPin,
    title: "Ubicación",
    description: "Disponible para remoto",
    value: "Sevilla, España",
    href: "#",
    color: "text-purple-600"
  }
];

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/albertoagre",
    color: "hover:text-blue-600",
    description: "Perfil profesional"
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/albertoagreda",
    color: "hover:text-gray-900 dark:hover:text-gray-100",
    description: "Código y proyectos"
  }
];

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envío del formulario
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success("¡Mensaje enviado con éxito!", {
        description: "Te responderé lo antes posible. ¡Gracias por contactar!"
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Error al enviar el mensaje", {
        description: "Por favor, inténtalo de nuevo o contacta directamente por email."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <MessageSquare className="h-4 w-4" />
            <span className="text-sm font-medium">¡Hablemos!</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Contacto</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            ¿Tienes un proyecto en mente? ¿Quieres saber más sobre mi experiencia? 
            ¡Me encantaría escuchar de ti y discutir cómo podemos trabajar juntos!
          </p>
          <div className="flex justify-center">
            <AvailabilityIndicator variant="full" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Send className="h-5 w-5 text-primary" />
                  <span>Envíame un mensaje</span>
                </CardTitle>
                <CardDescription>
                  Completa el formulario y me pondré en contacto contigo lo antes posible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre completo</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="transition-all duration-200 focus:scale-105"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="transition-all duration-200 focus:scale-105"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Cuéntame sobre tu proyecto o pregunta..."
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="transition-all duration-200 focus:scale-105 resize-none"
                    />
                  </div>

                  <div className="space-y-3">
                    <Button 
                      type="submit" 
                      className="w-full transition-all duration-300 hover:scale-105"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Enviar mensaje
                        </>
                      )}
                    </Button>
                    
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-2">
                        ¿Prefieres conocer más sobre mi experiencia?
                      </p>
                      <CVDownload 
                        variant="outline" 
                        size="sm" 
                        className="w-full"
                      />
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Información de contacto</h2>
              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <Card 
                      key={index}
                      className="transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
                      onClick={() => method.href !== "#" && window.open(method.href, "_blank")}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 rounded-full bg-primary/10">
                            <Icon className={`h-6 w-6 ${method.color}`} />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold">{method.title}</h3>
                            <p className="text-sm text-muted-foreground mb-1">{method.description}</p>
                            <p className="font-medium">{method.value}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Sígueme en redes</h2>
              <div className="grid gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <Card 
                      key={index}
                      className="transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer group"
                      onClick={() => window.open(social.href, "_blank")}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <Icon className={`h-6 w-6 transition-colors ${social.color}`} />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold group-hover:text-primary transition-colors">
                              {social.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">{social.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Availability */}
            <Card className="transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 rounded-full bg-green-100 dark:bg-green-900">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <h3 className="font-semibold">Disponibilidad</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Estado:</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      Disponible
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Modalidad:</span>
                    <span>Remoto / Híbrido</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Respuesta:</span>
                    <span>24-48 horas</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Zona horaria:</span>
                    <span>CET (UTC+1)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-center mb-12">Preguntas frecuentes</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "¿Qué tipo de proyectos buscas?",
                answer: "Me interesan especialmente proyectos de desarrollo backend con Java, aplicaciones empresariales y sistemas que requieran arquitectura sólida."
              },
              {
                question: "¿Trabajas de forma remota?",
                answer: "Sí, tengo experiencia trabajando de forma remota y estoy abierto tanto a posiciones remotas como híbridas o presenciales."
              },
              {
                question: "¿Cuál es tu disponibilidad?",
                answer: "Actualmente estoy disponible para nuevos proyectos. Puedo comenzar en un plazo de 2-4 semanas según el proyecto."
              },
              {
                question: "¿Ofreces servicios de consultoría?",
                answer: "Sí, ofrezco servicios de consultoría técnica, especialmente en arquitectura de software, optimización de procesos y metodologías de desarrollo."
              }
            ].map((faq, index) => (
              <Card key={index} className="transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}