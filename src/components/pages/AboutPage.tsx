import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import profileImage from "figma:asset/51804a6513ee810c3f488586897518b82988bbe0.png";
import { 
  User, 
  Heart, 
  Target, 
  BookOpen, 
  Code, 
  Database, 
  Server, 
  Shield, 
  Terminal, 
  Cpu,
  GraduationCap,
  MapPin,
  Languages
} from "lucide-react";

const values = [
  {
    title: "Excelencia Técnica",
    description: "Compromiso con el código limpio, las mejores prácticas y la mejora continua.",
    icon: Code,
    color: "text-blue-600"
  },
  {
    title: "Aprendizaje Continuo",
    description: "Pasión por mantenerse actualizado con las últimas tecnologías y metodologías.",
    icon: BookOpen,
    color: "text-green-600"
  },
  {
    title: "Colaboración",
    description: "Creencia en el poder del trabajo en equipo y la comunicación efectiva.",
    icon: Heart,
    color: "text-red-600"
  },
  {
    title: "Orientación a Resultados",
    description: "Enfoque en entregar soluciones que generen valor real para el negocio.",
    icon: Target,
    color: "text-purple-600"
  }
];

const technicalSkills = [
  { 
    name: "Java", 
    level: 95, 
    category: "Lenguajes",
    logo: "☕",
    color: "from-orange-500 to-red-600"
  },
  { 
    name: "SQL", 
    level: 90, 
    category: "Bases de datos",
    logo: "🗄️",
    color: "from-blue-500 to-indigo-600"
  },
  { 
    name: "HTML/CSS", 
    level: 85, 
    category: "Frontend",
    logo: "🎨",
    color: "from-pink-500 to-purple-600"
  },
  { 
    name: "Linux", 
    level: 85, 
    category: "Sistemas",
    logo: "🐧",
    color: "from-gray-700 to-black"
  },
  { 
    name: "JavaFX", 
    level: 85, 
    category: "UI/UX",
    logo: "🖥️",
    color: "from-teal-500 to-cyan-600"
  },
  { 
    name: "JUnit5", 
    level: 90, 
    category: "Testing",
    logo: "🧪",
    color: "from-green-500 to-emerald-600"
  },
  { 
    name: "Redes", 
    level: 80, 
    category: "Infraestructura",
    logo: "🌐",
    color: "from-violet-500 to-purple-600"
  },
  { 
    name: "SOLID", 
    level: 85, 
    category: "Arquitectura",
    logo: "🏗️",
    color: "from-amber-500 to-orange-600"
  }
];

const education = [
  {
    degree: "Formación Autodidacta en Desarrollo de Software",
    institution: "Aprendizaje Continuo",
    period: "2023 - Presente",
    description: "Especialización en desarrollo Java, arquitectura de software y metodologías ágiles a través de certificaciones y proyectos prácticos.",
    highlights: ["18 certificaciones técnicas", "Proyectos prácticos reales", "Metodologías ágiles"]
  },
  {
    degree: "Experiencia Profesional Internacional",
    institution: "Sector Logístico - Alemania",
    period: "2021 - 2023",
    description: "Desarrollo de habilidades técnicas y de liderazgo en entornos multinacionales, con enfoque en optimización de procesos.",
    highlights: ["Liderazgo de equipos", "Optimización de procesos", "Adaptabilidad cultural"]
  }
];

export function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <User className="h-4 w-4" />
            <span className="text-sm font-medium">Conoce más sobre mí</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Sobre mí</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un viaje desde la experiencia internacional hasta la especialización técnica, 
            impulsado por la pasión por la tecnología y la mejora continua.
          </p>
        </div>

        {/* Bio Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-6">Mi historia</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Mi trayectoria profesional comenzó en el sector de la hostelería en Sevilla, 
                  donde desarrollé habilidades fundamentales de atención al cliente y trabajo en equipo. 
                  Esta experiencia me enseñó la importancia de la excelencia en el servicio y la adaptabilidad.
                </p>
                <p>
                  En 2021, decidí dar un salto internacional y trasladarme a Alemania, donde trabajé 
                  en diferentes sectores logísticos y aeroportuarios. Esta experiencia no solo me 
                  permitió desarrollar mi competencia en idiomas y adaptabilidad cultural, sino que 
                  también despertó mi interés por la optimización de procesos y la tecnología.
                </p>
                <p>
                  Durante mi tiempo en Alemania, comencé a interesarme por el desarrollo de software 
                  como una forma de automatizar y mejorar los procesos que veía diariamente. 
                  Esta curiosidad se convirtió en pasión, y decidí enfocar mi carrera hacia la programación 
                  y el desarrollo de sistemas.
                </p>
                <p>
                  Actualmente, me especializo en desarrollo Java, arquitectura de software y metodologías 
                  ágiles, combinando mi experiencia práctica en diferentes industrias con sólidos 
                  conocimientos técnicos adquiridos a través de certificaciones y proyectos reales.
                </p>
              </div>
            </div>

            {/* Personal Details */}
            <Card className="transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Información personal</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Sevilla, España (Disponible para remoto/internacional)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Languages className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Español (nativo), Alemán (B2), Inglés (B2)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Target className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Enfocado en desarrollo backend y arquitectura de sistemas</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600 rounded-2xl blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative">
                <img
                  src={profileImage}
                  alt="Albert Guiver - Desarrollador Java"
                  className="w-full max-w-md h-96 object-cover rounded-2xl shadow-2xl transition-transform hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-center mb-12">Mis valores</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card 
                  key={index}
                  className="transition-all duration-300 hover:scale-105 hover:shadow-lg text-center"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-6">
                    <Icon className={`h-8 w-8 mx-auto mb-4 ${value.color}`} />
                    <h3 className="font-semibold mb-3">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Technical Skills */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-center mb-12">Habilidades técnicas detalladas</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {technicalSkills.map((skill, index) => {
              return (
                <Card 
                  key={index}
                  className="transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`relative p-3 rounded-xl bg-gradient-to-br ${skill.color} shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                          <span className="text-2xl filter drop-shadow-sm">{skill.logo}</span>
                          <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div>
                          <h3 className="font-semibold group-hover:text-primary transition-colors">{skill.name}</h3>
                          <p className="text-xs text-muted-foreground">{skill.category}</p>
                        </div>
                      </div>
                      <Badge variant="secondary" className="font-semibold">{skill.level}%</Badge>
                    </div>
                    <div className="relative">
                      <Progress value={skill.level} className="h-3 bg-muted/50" />
                      <div 
                        className={`absolute top-0 left-0 h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out opacity-90`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Education */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-center mb-12">Formación y desarrollo</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <Card 
                key={index}
                className="transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <h3 className="font-semibold text-lg">{edu.degree}</h3>
                        <Badge variant="outline">{edu.period}</Badge>
                      </div>
                      <p className="text-primary font-medium mb-3">{edu.institution}</p>
                      <p className="text-muted-foreground mb-4">{edu.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.highlights.map((highlight, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Hobbies e Intereses */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-center mb-12">Hobbies e intereses</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { 
                icon: "📈", 
                title: "Trading", 
                description: "Análisis técnico y fundamental de mercados financieros como hobby y aprendizaje personal" 
              },
              { 
                icon: "🚀", 
                title: "Nuevas tecnologías", 
                description: "Siempre explorando las últimas tendencias en desarrollo de software" 
              },
              { 
                icon: "📖", 
                title: "Lectura técnica", 
                description: "Libros sobre arquitectura de software, patrones de diseño y metodologías ágiles" 
              },
              { 
                icon: "🎮", 
                title: "Desarrollo de juegos", 
                description: "Experimentando con game development como proyecto personal" 
              },
              { 
                icon: "🌱", 
                title: "Open Source", 
                description: "Contribuyendo a proyectos de código abierto cuando es posible" 
              },
              { 
                icon: "🎯", 
                title: "Resolución de problemas", 
                description: "Disfruto resolviendo challenges de programación y algoritmos" 
              }
            ].map((hobby, index) => (
              <Card 
                key={index}
                className="transition-all duration-300 hover:scale-105 hover:shadow-lg text-center"
              >
                <CardContent className="p-6">
                  <div className="text-3xl mb-3">{hobby.icon}</div>
                  <h3 className="font-semibold mb-2">{hobby.title}</h3>
                  <p className="text-sm text-muted-foreground">{hobby.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Fun Facts */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-12">Datos curiosos</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: "🌍", title: "2 países", description: "He trabajado profesionalmente en España y Alemania" },
              { icon: "📚", title: "18 certificaciones", description: "Obtenidas en menos de 12 meses" },
              { icon: "💼", title: "5+ sectores", description: "Experiencia en hostelería, logística, aviación y tecnología" },
              { icon: "🔧", title: "Autodidacta", description: "Apasionado por el aprendizaje autónomo" },
              { icon: "⚡", title: "Optimización", description: "Siempre buscando formas de mejorar procesos" },
              { icon: "🤝", title: "Colaborativo", description: "Creo en el poder del trabajo en equipo" }
            ].map((fact, index) => (
              <Card 
                key={index}
                className="transition-all duration-300 hover:scale-105 hover:shadow-lg text-center"
              >
                <CardContent className="p-6">
                  <div className="text-3xl mb-3">{fact.icon}</div>
                  <h3 className="font-semibold mb-2">{fact.title}</h3>
                  <p className="text-sm text-muted-foreground">{fact.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}