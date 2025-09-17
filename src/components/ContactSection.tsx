import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Mail, Phone, MessageCircle, Calendar, ExternalLink } from "lucide-react";

export function ContactSection() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Respuesta en 24 horas",
      value: "albertguiver@gmail.com",
      action: "mailto:albertguiver@gmail.com",
      buttonText: "Enviar email"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Respuesta inmediata",
      value: "+34 611 456 367",
      action: "https://wa.me/34611456367",
      buttonText: "Abrir WhatsApp"
    },
    {
      icon: Phone,
      title: "Teléfono",
      description: "Horario de oficina",
      value: "+34 611 456 367",
      action: "tel:+34611456367",
      buttonText: "Llamar ahora"
    },
    {
      icon: Calendar,
      title: "Reunión Online",
      description: "Agenda una videollamada",
      value: "30 min gratuitos",
      action: "https://calendly.com/albertguiver",
      buttonText: "Agendar cita"
    }
  ];

  return (
    <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">Hablemos de tu Proyecto</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes una idea o necesitas automatizar procesos en tu empresa? 
            Contacta conmigo para una consulta gratuita y veamos cómo puedo ayudarte.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{method.title}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{method.value}</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group"
                    onClick={() => window.open(method.action, '_blank')}
                  >
                    {method.buttonText}
                    <ExternalLink className="ml-2 h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="mb-4">¿Listo para automatizar tu negocio?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Obtén una consulta gratuita de 30 minutos donde analizaremos tus procesos actuales 
            y identificaremos oportunidades de automatización que pueden ahorrarte tiempo y dinero.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => window.open('https://wa.me/34611456367', '_blank')}
            >
              Consulta gratuita
              <MessageCircle className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open('mailto:albertguiver@gmail.com', '_blank')}
            >
              Enviar email
              <Mail className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}