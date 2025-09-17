import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "María González",
    company: "E-Commerce Plus",
    role: "CEO",
    content: "NexusTech transformó completamente nuestro proceso de atención al cliente con su chatbot IA. Hemos reducido los tiempos de respuesta un 80% y aumentado la satisfacción del cliente significativamente.",
    rating: 5,
    avatar: "/api/placeholder/150/150",
    initials: "MG"
  },
  {
    id: 2,
    name: "Carlos Ruíz",
    company: "Automations Pro",
    role: "CTO",
    content: "La automatización con N8N que desarrollaron nos ahorra 20 horas semanales de trabajo manual. El ROI fue evidente desde el primer mes. Profesionalismo y calidad excepcionales.",
    rating: 5,
    avatar: "/api/placeholder/150/150",
    initials: "CR"
  },
  {
    id: 3,
    name: "Ana Martínez",
    company: "Digital Marketing Solutions",
    role: "Directora de Marketing",
    content: "Su estrategia de marketing digital con IA nos ayudó a aumentar nuestras conversiones en un 150%. El análisis de datos y la segmentación fueron impresionantes.",
    rating: 5,
    avatar: "/api/placeholder/150/150",
    initials: "AM"
  },
  {
    id: 4,
    name: "Roberto Jiménez",
    company: "StartUp Innovadora",
    role: "Fundador",
    content: "Desarrollaron nuestra aplicación web desde cero con tecnologías modernas. El resultado superó nuestras expectativas. Altamente recomendados para proyectos complejos.",
    rating: 5,
    avatar: "/api/placeholder/150/150",
    initials: "RJ"
  },
  {
    id: 5,
    name: "Isabel Torres",
    company: "Retail Experience",
    role: "Gerente de Operaciones",
    content: "La infraestructura que implementaron es sólida y escalable. El SEO técnico mejoró nuestro ranking considerablemente. Soporte técnico excepcional.",
    rating: 5,
    avatar: "/api/placeholder/150/150",
    initials: "IT"
  },
  {
    id: 6,
    name: "Diego Fernández",
    company: "Tech Consulting",
    role: "Director de Proyectos",
    content: "Trabajar con NexusTech fue una experiencia excelente. Entregaron el proyecto a tiempo, dentro del presupuesto y con una calidad superior a la esperada.",
    rating: 5,
    avatar: "/api/placeholder/150/150",
    initials: "DF"
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">
            Lo que dicen nuestros
            <span className="text-primary"> clientes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Más de 50 empresas confían en nuestras soluciones tecnológicas. 
            Descubre por qué somos la opción preferida para la transformación digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-card/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <div className="relative mb-4">
                  <Quote className="h-8 w-8 text-primary/20 absolute -top-2 -left-2" />
                  <p className="text-sm leading-relaxed pl-6">
                    {testimonial.content}
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role} en {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="flex justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">50+</span>
              <span>Proyectos completados</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">98%</span>
              <span>Satisfacción del cliente</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">24/7</span>
              <span>Soporte técnico</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}