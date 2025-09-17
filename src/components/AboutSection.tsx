import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Download, Code, Brain, Zap, Users, Award } from "lucide-react";

export function AboutSection() {
  const skills = [
    { name: "JavaScript/TypeScript", level: 95, category: "Desarrollo" },
    { name: "React & Next.js", level: 90, category: "Frontend" },
    { name: "Node.js & APIs", level: 88, category: "Backend" },
    { name: "Python & IA", level: 85, category: "Automatización" },
    { name: "N8N Workflows", level: 92, category: "Automatización" },
    { name: "Marketing Digital", level: 80, category: "Marketing" }
  ];

  const achievements = [
    {
      icon: Code,
      title: "50+ Proyectos",
      description: "Aplicaciones web y móviles desarrolladas"
    },
    {
      icon: Brain,
      title: "20+ Chatbots IA",
      description: "Sistemas inteligentes implementados"
    },
    {
      icon: Zap,
      title: "100+ Automatizaciones",
      description: "Procesos optimizados con N8N"
    },
    {
      icon: Users,
      title: "30+ Clientes",
      description: "Satisfechos en toda España"
    }
  ];

  return (
    <section id="sobre-mi" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="px-3 py-1 mb-4">
            Sobre Mí
          </Badge>
          <h2 className="mb-4">
            Transformando Ideas en 
            <span className="text-primary"> Soluciones Digitales</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Con más de 8 años de experiencia en desarrollo y automatización, ayudo a empresas 
            a escalar sus operaciones mediante tecnología innovadora.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Información personal y foto */}
          <div className="space-y-8">
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1731951039706-0e793240bb32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTgwNTIxODF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Perfil profesional"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg">
                <Award className="h-8 w-8" />
              </div>
            </div>

            <Card className="p-6">
              <h3 className="mb-4">Mi Historia</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Comenzé mi carrera como desarrollador full-stack, pero pronto descubrí mi pasión 
                  por la automatización y la inteligencia artificial. Esta combinación única me permite 
                  ofrecer soluciones que no solo funcionan, sino que evolucionan.
                </p>
                <p>
                  Desde mi base en Sevilla, he trabajado con startups locales y empresas 
                  internacionales, especializándome en la creación de sistemas que automatizan 
                  procesos complejos y mejoran la experiencia del usuario.
                </p>
                <p>
                  Mi enfoque se centra en entender primero el problema real del negocio, 
                  para luego aplicar la tecnología más adecuada. No se trata solo de código, 
                  sino de crear valor tangible.
                </p>
              </div>
            </Card>
          </div>

          {/* Habilidades y logros */}
          <div className="space-y-8">
            {/* Logros */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="p-4 text-center hover:shadow-lg transition-shadow">
                  <achievement.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h4 className="mb-1">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </Card>
              ))}
            </div>

            {/* Habilidades */}
            <Card className="p-6">
              <h3 className="mb-6">Habilidades Técnicas</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm">{skill.name}</span>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {skill.category}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                    </div>
                    <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Formación */}
            <Card className="p-6">
              <h3 className="mb-4">Formación & Certificaciones</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm">Ingeniería Informática</h4>
                    <p className="text-sm text-muted-foreground">Universidad de Sevilla • 2016-2020</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm">Certificación AWS Solutions Architect</h4>
                    <p className="text-sm text-muted-foreground">Amazon Web Services • 2022</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm">Google Analytics & Ads Certified</h4>
                    <p className="text-sm text-muted-foreground">Google • 2023</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* CTA para descargar CV */}
            <Button className="w-full" size="lg">
              <Download className="mr-2 h-4 w-4" />
              Descargar CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}