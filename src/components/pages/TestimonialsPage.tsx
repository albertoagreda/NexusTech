import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Star, Quote, Building, MapPin, Calendar } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "María García",
    role: "CTO",
    company: "TechSolutions España",
    location: "Madrid, España",
    date: "2024",
    rating: 5,
    testimonial: "Albert desarrolló nuestro sistema de gestión de empleados con Java y MySQL. Su trabajo fue excepcional, entregando código limpio, bien documentado y con pruebas unitarias completas. Su experiencia internacional se nota en la calidad del desarrollo.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b526?w=150",
    skills: ["Java", "MySQL", "Testing", "Documentación"],
    project: "Sistema de Gestión de Empleados"
  },
  {
    id: 2,
    name: "Thomas Mueller",
    role: "Lead Developer",
    company: "Berlin Tech GmbH",
    location: "Berlín, Alemania",
    date: "2023",
    rating: 5,
    testimonial: "Working with Albert during his time in Germany was excellent. His Java expertise and understanding of Spring Boot helped us deliver a complex REST API project ahead of schedule. His code quality and attention to detail are outstanding.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    skills: ["Spring Boot", "API REST", "Microservicios", "Docker"],
    project: "Microservicios Backend"
  },
  {
    id: 3,
    name: "Carlos Rodríguez",
    role: "Project Manager",
    company: "Innovate Corp",
    location: "Barcelona, España",
    date: "2024",
    rating: 5,
    testimonial: "Colaboramos con Albert en el desarrollo de una landing page corporativa. Su dominio de React y TypeScript resultó en una página web responsive, optimizada y con un diseño moderno. Cumplió todos los plazos establecidos.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    skills: ["React", "TypeScript", "Responsive Design", "Performance"],
    project: "Landing Page Corporativa"
  },
  {
    id: 4,
    name: "Anna Schmidt",
    role: "Technical Lead",
    company: "Hamburg Software",
    location: "Hamburgo, Alemania", 
    date: "2023",
    rating: 5,
    testimonial: "Albert's work on our currency converter application demonstrated his ability to integrate external APIs effectively. His JavaFX interface was intuitive and the error handling was robust. Great communication skills in both German and Spanish.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    skills: ["JavaFX", "API Integration", "UI/UX", "Error Handling"],
    project: "Conversor de Divisas"
  },
  {
    id: 5,
    name: "Roberto Martín",
    role: "Senior Developer",
    company: "DevHub Valencia",
    location: "Valencia, España",
    date: "2024",
    rating: 5,
    testimonial: "Albert implementó una calculadora científica con Java que superó nuestras expectativas. El código seguía principios SOLID, tenía una cobertura de tests del 90% y la arquitectura era escalable. Recomiendo su trabajo sin dudas.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
    skills: ["Java", "Arquitectura", "SOLID", "JUnit"],
    project: "Calculadora Científica"
  },
  {
    id: 6,
    name: "Sofia Andersson",
    role: "Product Owner",
    company: "Nordic Development",
    location: "Frankfurt, Alemania",
    date: "2023-2024",
    rating: 5,
    testimonial: "During Albert's time working in Germany, he demonstrated exceptional problem-solving skills and adaptability. His portfolio website showcases his full-stack capabilities perfectly. A reliable professional with international experience.",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150",
    skills: ["Full-Stack", "Problem Solving", "Adaptabilidad", "Portfolio"],
    project: "Desarrollo Full-Stack"
  }
];

export function TestimonialsPage() {
  const averageRating = testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length;
  const totalTestimonials = testimonials.length;

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Testimonios</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Opiniones de clientes y colegas con los que he trabajado en proyectos de desarrollo de software, 
            tanto en España como durante mi experiencia internacional en Alemania.
          </p>
          
          {/* Stats */}
          <div className="flex justify-center items-center space-x-8 mb-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < Math.floor(averageRating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
                <span className="ml-2 font-semibold">{averageRating.toFixed(1)}</span>
              </div>
              <p className="text-sm text-muted-foreground">Calificación promedio</p>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">{totalTestimonials}</div>
              <p className="text-sm text-muted-foreground">Testimonios recibidos</p>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="group transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-6">
                  <Quote className="h-8 w-8 text-primary/20 flex-shrink-0" />
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.testimonial}"
                </blockquote>

                {/* Skills Used */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {testimonial.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Project Info */}
                <div className="mb-6 p-3 bg-muted/50 rounded-lg">
                  <p className="text-sm font-medium text-primary mb-1">Proyecto:</p>
                  <p className="text-sm text-muted-foreground">{testimonial.project}</p>
                </div>

                {/* Author Info */}
                <div className="flex items-start space-x-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-semibold truncate">{testimonial.name}</h4>
                      <Badge variant="outline" className="text-xs">
                        <Calendar className="w-3 h-3 mr-1" />
                        {testimonial.date}
                      </Badge>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-2">
                      {testimonial.role}
                    </p>
                    
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Building className="w-3 h-3" />
                        <span className="truncate">{testimonial.company}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-3 h-3" />
                        <span>{testimonial.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-primary/5 to-blue-600/5 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4">¿Quieres trabajar conmigo?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Si necesitas un desarrollador Java con experiencia internacional y enfoque en calidad, 
            estaré encantado de colaborar en tu próximo proyecto.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => window.open('mailto:albertguiver@gmail.com', '_blank')}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Contactar por email
            </button>
            <button 
              onClick={() => window.open('https://wa.me/34611456367', '_blank')}
              className="px-6 py-3 border border-primary text-primary rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-primary-foreground"
            >
              WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}