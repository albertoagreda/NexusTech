import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award,
  BookOpen,
  Code,
  Layers,
  Target
} from "lucide-react";

const education = [
  {
    degree: "Ciclo Formativo de Grado Superior",
    field: "Desarrollo de Aplicaciones",
    institution: "MEDAC",
    location: "España",
    period: "Sept. 2024 - Jun. 2026",
    status: "En curso",
    logo: "🎓",
    color: "from-blue-500 to-indigo-600",
    description: "Formación integral en desarrollo de software con enfoque práctico en las tecnologías más demandadas del mercado.",
    skills: ["HTML", "JavaScript", "Hojas de estilos en cascada (CSS)"],
    highlights: [
      "Desarrollo de aplicaciones multiplataforma",
      "Metodologías ágiles de desarrollo",
      "Diseño de bases de datos",
      "Programación orientada a objetos",
      "Desarrollo web frontend y backend"
    ]
  },
  {
    degree: "Bachillerato",
    field: "Civil Engineering Technologies/Technicians",
    institution: "Altair",
    location: "España", 
    period: "2017 - 2019",
    status: "Completado",
    logo: "🔧",
    color: "from-orange-500 to-red-600",
    description: "Formación técnica especializada en tecnologías de ingeniería civil con base sólida en matemáticas y física aplicada.",
    skills: ["Matemáticas", "Física", "Tecnología", "Dibujo técnico"],
    highlights: [
      "Base sólida en matemáticas y física",
      "Resolución de problemas complejos",
      "Pensamiento analítico y lógico",
      "Fundamentos de ingeniería"
    ]
  },
  {
    degree: "Educación Secundaria Obligatoria (ESO)",
    field: "Educación General",
    institution: "Claret Sevilla",
    location: "Sevilla, España",
    period: "2013 - 2017",
    status: "Completado",
    logo: "📚",
    color: "from-green-500 to-emerald-600",
    description: "Educación secundaria integral con énfasis en ciencias y tecnología, sentando las bases para el desarrollo académico posterior.",
    skills: ["Ciencias", "Matemáticas", "Tecnología", "Idiomas"],
    highlights: [
      "Formación académica integral",
      "Desarrollo de habilidades básicas",
      "Introducción a la tecnología",
      "Competencias comunicativas"
    ]
  }
];

const additionalTraining = [
  {
    title: "Formación Autodidacta Continua",
    period: "2023 - Presente",
    icon: Target,
    items: [
      "18+ Certificaciones técnicas",
      "Desarrollo de proyectos personales",
      "Participación en comunidades tech",
      "Cursos online especializados"
    ]
  },
  {
    title: "Experiencia Internacional",
    period: "2021 - 2023",
    icon: MapPin,
    items: [
      "Adaptación cultural en Alemania",
      "Desarrollo de soft skills",
      "Competencia multilingüe",
      "Perspectiva global del mercado"
    ]
  }
];

export function EducationPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <GraduationCap className="h-4 w-4" />
            <span className="text-sm font-medium">Mi trayectoria académica</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Educación</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un recorrido académico que combina formación técnica especializada con 
            experiencia práctica internacional, construyendo una base sólida para el desarrollo profesional.
          </p>
        </div>

        {/* Educational Timeline */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-center mb-12">Formación Académica</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <Card 
                key={index}
                className="transition-all duration-300 hover:scale-105 hover:shadow-xl group relative overflow-hidden"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <CardContent className="p-8 relative">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Logo and Status */}
                    <div className="flex-shrink-0">
                      <div className={`relative p-4 rounded-2xl bg-gradient-to-br ${edu.color} shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                        <span className="text-3xl filter drop-shadow-sm">{edu.logo}</span>
                        <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="mt-4 text-center">
                        <Badge 
                          variant={edu.status === "En curso" ? "default" : "secondary"}
                          className="font-medium"
                        >
                          {edu.status}
                        </Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      {/* Header */}
                      <div>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                            {edu.degree}
                          </h3>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>{edu.period}</span>
                          </div>
                        </div>
                        <p className="text-lg font-medium text-primary mb-1">{edu.field}</p>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <span className="font-medium">{edu.institution}</span>
                          <span>•</span>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-3 w-3" />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed">
                        {edu.description}
                      </p>

                      {/* Skills */}
                      {edu.skills.length > 0 && (
                        <div>
                          <h4 className="text-sm font-semibold mb-2 flex items-center space-x-2">
                            <Code className="h-4 w-4" />
                            <span>Tecnologías y habilidades:</span>
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.skills.map((skill, i) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Highlights */}
                      <div>
                        <h4 className="text-sm font-semibold mb-3 flex items-center space-x-2">
                          <Award className="h-4 w-4" />
                          <span>Aspectos destacados:</span>
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {edu.highlights.map((highlight, i) => (
                            <div key={i} className="flex items-center space-x-2 text-sm">
                              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                              <span>{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Training */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-center mb-12">Formación Complementaria</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {additionalTraining.map((training, index) => {
              const Icon = training.icon;
              return (
                <Card 
                  key={index}
                  className="transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold group-hover:text-primary transition-colors">
                          {training.title}
                        </h3>
                        <p className="text-xs text-muted-foreground">{training.period}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {training.items.map((item, i) => (
                        <li key={i} className="flex items-center space-x-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Educational Philosophy */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-8">Filosofía de Aprendizaje</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: "🎯",
                title: "Aprendizaje Continuo",
                description: "La tecnología evoluciona constantemente, por eso nunca dejo de aprender y actualizarme."
              },
              {
                icon: "🔬",
                title: "Práctica Reflexiva",
                description: "Combino teoría con práctica, reflexionando sobre cada experiencia para mejorar continuamente."
              },
              {
                icon: "🌱",
                title: "Crecimiento Adaptativo",
                description: "Me adapto a nuevas metodologías y tecnologías, viendo cada desafío como una oportunidad de crecimiento."
              }
            ].map((philosophy, index) => (
              <Card 
                key={index}
                className="transition-all duration-300 hover:scale-105 hover:shadow-lg text-center group"
              >
                <CardContent className="p-6">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {philosophy.icon}
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {philosophy.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {philosophy.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}