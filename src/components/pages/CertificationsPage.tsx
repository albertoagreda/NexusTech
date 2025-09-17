import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Calendar, Award, ExternalLink, Star } from "lucide-react";

const certifications = [
  { 
    name: "AWS Cloud Practitioner", 
    date: "Enero 2025", 
    category: "Cloud",
    level: "Foundational",
    icon: "☁️",
    description: "Fundamentos de servicios AWS y arquitectura en la nube"
  },
  { 
    name: "LPIC-1 101/102", 
    date: "Febrero-Marzo 2025", 
    category: "Linux",
    level: "Professional",
    icon: "🐧",
    description: "Administración completa de sistemas Linux"
  },
  { 
    name: "Redes Inalámbricas 5G", 
    date: "Marzo 2025", 
    category: "Redes",
    level: "Advanced",
    icon: "📡",
    description: "Tecnologías avanzadas de comunicación inalámbrica"
  },
  { 
    name: "Alta Disponibilidad SQL", 
    date: "Marzo 2025", 
    category: "Base de Datos",
    level: "Advanced",
    icon: "🗄️",
    description: "Diseño de sistemas de bases de datos resilientes"
  },
  { 
    name: "DHCP Linux", 
    date: "Marzo 2025", 
    category: "Redes",
    level: "Intermediate",
    icon: "🌐",
    description: "Configuración y gestión de servicios DHCP"
  },
  { 
    name: "Testing", 
    date: "Marzo 2025", 
    category: "Desarrollo",
    level: "Professional",
    icon: "🧪",
    description: "Metodologías avanzadas de testing de software"
  },
  { 
    name: "Redes TCP/IP", 
    date: "Marzo 2025", 
    category: "Redes",
    level: "Professional",
    icon: "🔗",
    description: "Protocolos de red y arquitectura TCP/IP"
  },
  { 
    name: "SQL", 
    date: "Marzo 2025", 
    category: "Base de Datos",
    level: "Professional",
    icon: "📊",
    description: "Desarrollo avanzado con bases de datos SQL"
  },
  { 
    name: "TDD", 
    date: "Marzo 2025", 
    category: "Metodología",
    level: "Professional",
    icon: "🔄",
    description: "Test-Driven Development y buenas prácticas"
  },
  { 
    name: "OSI Capa 3 y 7", 
    date: "Marzo 2025", 
    category: "Redes",
    level: "Advanced",
    icon: "🏗️",
    description: "Protocolos de red y aplicación del modelo OSI"
  },
  { 
    name: "Seguridad de red OSI Capa 2", 
    date: "Marzo 2025", 
    category: "Seguridad",
    level: "Advanced",
    icon: "🔒",
    description: "Seguridad en la capa de enlace de datos"
  },
  { 
    name: "SOLID", 
    date: "Marzo 2025", 
    category: "Arquitectura",
    level: "Professional",
    icon: "🏛️",
    description: "Principios de diseño de software orientado a objetos"
  },
  { 
    name: "Java XML", 
    date: "Marzo 2025", 
    category: "Desarrollo",
    level: "Intermediate",
    icon: "☕",
    description: "Procesamiento de documentos XML en Java"
  },
  { 
    name: "JUnit5", 
    date: "Marzo 2025", 
    category: "Testing",
    level: "Professional",
    icon: "✅",
    description: "Framework de testing unitario para Java"
  },
  { 
    name: "HTML5/CSS3", 
    date: "Marzo 2025", 
    category: "Frontend",
    level: "Professional",
    icon: "🌐",
    description: "Desarrollo web moderno con estándares actuales"
  },
  { 
    name: "Backups Linux", 
    date: "Marzo 2025", 
    category: "Administración",
    level: "Professional",
    icon: "💾",
    description: "Estrategias de respaldo y recuperación en Linux"
  },
  { 
    name: "JavaFX", 
    date: "Marzo 2025", 
    category: "Desarrollo",
    level: "Professional",
    icon: "🖥️",
    description: "Desarrollo de interfaces gráficas modernas"
  },
  { 
    name: "Curso de Pseudocódigo", 
    date: "Agosto 2025", 
    category: "Lógica",
    level: "Foundational",
    icon: "📝",
    description: "Fundamentos de algoritmia y lógica de programación"
  },
];

const categories = [
  { name: "Todos", count: certifications.length, color: "default" },
  { name: "Desarrollo", count: certifications.filter(c => c.category === "Desarrollo").length, color: "blue" },
  { name: "Redes", count: certifications.filter(c => c.category === "Redes").length, color: "green" },
  { name: "Base de Datos", count: certifications.filter(c => c.category === "Base de Datos").length, color: "purple" },
  { name: "Linux", count: certifications.filter(c => c.category === "Linux").length, color: "orange" },
  { name: "Cloud", count: certifications.filter(c => c.category === "Cloud").length, color: "cyan" },
];

const levelColors = {
  "Foundational": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  "Intermediate": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  "Professional": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  "Advanced": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
};

export function CertificationsPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Award className="h-4 w-4" />
            <span className="text-sm font-medium">18 Certificaciones Técnicas</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Certificaciones y Formación</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Formación continua en tecnologías modernas y metodologías de desarrollo. 
            Certificaciones que validan mi expertise técnico y compromiso con la excelencia.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { label: "Total Certificaciones", value: "18", icon: Award, color: "text-primary" },
            { label: "Completadas en 2025", value: "17", icon: Calendar, color: "text-green-600" },
            { label: "Categorías", value: "8", icon: Star, color: "text-purple-600" },
            { label: "Nivel Avanzado", value: "4", icon: ExternalLink, color: "text-red-600" },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <Icon className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Badge 
              key={category.name}
              variant="secondary"
              className="px-4 py-2 cursor-pointer transition-all duration-200 hover:scale-105"
            >
              {category.name} ({category.count})
            </Badge>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={index}
              className="group transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3 transition-transform group-hover:scale-110">
                    {cert.icon}
                  </div>
                  <Badge 
                    className={`mb-2 ${levelColors[cert.level as keyof typeof levelColors]}`}
                    variant="secondary"
                  >
                    {cert.level}
                  </Badge>
                </div>
                
                <h3 className="font-semibold mb-2 text-center group-hover:text-primary transition-colors">
                  {cert.name}
                </h3>
                
                <p className="text-xs text-muted-foreground text-center mb-3 line-clamp-2">
                  {cert.description}
                </p>
                
                <div className="flex items-center justify-between text-xs">
                  <Badge variant="outline" className="text-xs">
                    {cert.category}
                  </Badge>
                  <div className="flex items-center space-x-1 text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>{cert.date}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievement Timeline */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-center mb-12">Línea de Tiempo de Logros</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-primary to-blue-600 h-full rounded-full"></div>
              
              {[
                { period: "Agosto 2025", count: 1, highlight: "Pseudocódigo" },
                { period: "Marzo 2025", count: 15, highlight: "Mayor expansión técnica" },
                { period: "Febrero 2025", count: 1, highlight: "LPIC-1 Linux" },
                { period: "Enero 2025", count: 1, highlight: "AWS Cloud" },
              ].map((milestone, index) => (
                <div key={index} className="relative flex items-center mb-8">
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                  <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-1/2 md:pr-8 md:text-right' : 'md:ml-1/2 md:pl-8'}`}>
                    <Card className="transition-all duration-300 hover:shadow-lg">
                      <CardContent className="p-4">
                        <div className="font-semibold text-primary">{milestone.period}</div>
                        <div className="text-sm text-muted-foreground">
                          {milestone.count} certificación{milestone.count > 1 ? 'es' : ''}
                        </div>
                        <div className="text-xs font-medium">{milestone.highlight}</div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}