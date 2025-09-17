import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import profileImage from "figma:asset/51804a6513ee810c3f488586897518b82988bbe0.png";
import { ArrowRight } from "lucide-react";
import { Logo } from "../Logo";
import { CVDownload } from "../CVDownload";
import { AvailabilityIndicator } from "../AvailabilityIndicator";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const skills = [
  { 
    name: "HTML", 
    level: 90, 
    logo: "🌐",
    color: "from-orange-500 to-red-600"
  },
  { 
    name: "CSS", 
    level: 85, 
    logo: "🎨",
    color: "from-blue-500 to-indigo-600"
  },
  { 
    name: "Java", 
    level: 95, 
    logo: "☕",
    color: "from-orange-500 to-red-600"
  },
  { 
    name: "SQL", 
    level: 90, 
    logo: "🗄️",
    color: "from-blue-500 to-indigo-600"
  },
  { 
    name: "Linux", 
    level: 85, 
    logo: "🐧",
    color: "from-gray-700 to-black"
  },
  { 
    name: "Redes", 
    level: 80, 
    logo: "🌐",
    color: "from-violet-500 to-purple-600"
  },
  { 
    name: "JavaFX", 
    level: 85, 
    logo: "🖥️",
    color: "from-teal-500 to-cyan-600"
  },
  { 
    name: "JUnit5", 
    level: 90, 
    logo: "🧪",
    color: "from-green-500 to-emerald-600"
  },
  { 
    name: "SOLID", 
    level: 85, 
    logo: "🏗️",
    color: "from-amber-500 to-orange-600"
  },
  { 
    name: "Testing", 
    level: 88, 
    logo: "✅",
    color: "from-green-500 to-emerald-600"
  },
  { 
    name: "TDD", 
    level: 85, 
    logo: "🔄",
    color: "from-purple-500 to-pink-600"
  },
];

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            {/* Profile Title */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Desarrollador
                <span className="text-primary"> Java</span>
              </h1>
              
              {/* Profile Image */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                  <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-background shadow-2xl transition-transform hover:scale-105">
                    <img
                      src={profileImage}
                      alt="Albert Guiver - Desarrollador Java"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Description below image */}
              <div className="max-w-2xl mx-auto space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Desarrollador Java con experiencia internacional. Especializado en 
                  desarrollo backend, arquitectura de software y optimización de procesos.
                </p>
                
                {/* Availability badge */}
                <div className="flex justify-center">
                  <AvailabilityIndicator variant="full" />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <Button 
                onClick={() => onNavigate('projects')}
                size="lg"
                className="group transition-all duration-300 hover:scale-105"
              >
                Ver proyectos
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <CVDownload 
                variant="outline"
                size="lg"
                className="transition-all duration-300 hover:scale-105"
              />
              <Button 
                variant="outline" 
                onClick={() => onNavigate('contact')}
                size="lg"
                className="transition-all duration-300 hover:scale-105"
              >
                Contactar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "2+", label: "Años en Alemania", sublabel: "Experiencia internacional" },
              { number: "18", label: "Certificaciones", sublabel: "Técnicas especializadas" },
              { number: "5+", label: "Tecnologías", sublabel: "Stack principal" },
              { number: "100%", label: "Compromiso", sublabel: "Con la calidad" },
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-lg bg-gradient-to-br from-background to-muted/50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Habilidades Técnicas</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Una combinación sólida de lenguajes de programación, herramientas de desarrollo 
              y metodologías modernas para crear soluciones robustas.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              return (
                <Card 
                  key={skill.name}
                  className="group transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`relative p-3 rounded-xl bg-gradient-to-br ${skill.color} shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                        <span className="text-xl filter drop-shadow-sm">{skill.logo}</span>
                        <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <span className="font-semibold group-hover:text-primary transition-colors">{skill.name}</span>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Nivel</span>
                        <span className="font-medium">{skill.level}%</span>
                      </div>
                      <div className="relative">
                        <div className="w-full bg-muted/50 rounded-full h-3"></div>
                        <div 
                          className={`absolute top-0 left-0 h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out opacity-90`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para empezar tu proyecto?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contacta conmigo y hablemos sobre cómo puedo ayudarte a alcanzar tus objetivos técnicos.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              onClick={() => window.open('mailto:albertguiver@gmail.com', '_blank')}
              size="lg"
              className="transition-all duration-300 hover:scale-105"
            >
              Enviar email
            </Button>
            <Button 
              variant="outline"
              onClick={() => window.open('https://wa.me/34611456367', '_blank')}
              size="lg"
              className="transition-all duration-300 hover:scale-105"
            >
              WhatsApp
            </Button>
            <Button 
              variant="outline"
              onClick={() => onNavigate('contact')}
              size="lg"
              className="transition-all duration-300 hover:scale-105"
            >
              Formulario de contacto
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}