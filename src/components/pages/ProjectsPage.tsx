import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ExternalLink, Github, ArrowLeft, Calendar, Users, Target, Zap } from "lucide-react";

interface ProjectsPageProps {
  onNavigate: (page: string) => void;
}

const projects = [
  {
    id: 1,
    title: "Mi Proyecto",
    description: "Proyecto personal de desarrollo que incluye funcionalidades diversas y demostración de habilidades técnicas.",
    image: "https://images.unsplash.com/photo-1517309561013-16f6e4020305?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGxhbmRpbmclMjBwYWdlfGVufDF8fHx8MTc1ODA5Nzk3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["Java", "HTML", "CSS", "JavaScript"],
    status: "Completado",
    githubUrl: "https://github.com/albertoagreda/mi-proyecto",
    demoUrl: null,
    problem: "Necesidad de crear un proyecto que demuestre conocimientos en desarrollo web y programación orientada a objetos.",
    solution: "Desarrollo de una aplicación completa utilizando Java para la lógica backend y tecnologías web frontend para la interfaz de usuario.",
    tools: ["Java 17", "HTML5", "CSS3", "JavaScript", "Git"],
    results: [
      "Aplicación funcional completa",
      "Código limpio y documentado",
      "Interfaz de usuario intuitiva",
      "Buenas prácticas de programación",
      "Control de versiones con Git"
    ]
  },
  {
    id: 2,
    title: "FilmFest RSS",
    description: "Sistema de gestión de feeds RSS para festivales de cine con análisis de contenido y notificaciones.",
    image: "https://images.unsplash.com/photo-1627133805103-ce2d34ccdd37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwZmVzdGl2YWwlMjBjaW5lbWElMjByc3MlMjBuZXdzfGVufDF8fHx8MTc1ODEwNDI1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["Java", "XML", "RSS", "HTTP"],
    status: "Completado",
    githubUrl: "https://github.com/albertoagreda/filmfest-rss",
    demoUrl: null,
    problem: "Necesidad de agregar y procesar información de múltiples fuentes RSS relacionadas con festivales de cine de manera automatizada.",
    solution: "Aplicación Java que procesa feeds RSS, extrae información relevante de festivales de cine y proporciona un sistema de notificaciones y análisis.",
    tools: ["Java 17", "XML Parser", "HTTP Client", "Maven", "RSS Libraries"],
    results: [
      "Procesamiento automático de feeds RSS",
      "Extracción de datos estructurados",
      "Sistema de notificaciones en tiempo real",
      "Análisis de tendencias en festivales",
      "Interfaz de administración simple"
    ]
  },
  {
    id: 3,
    title: "Proyecto Pruebas JUnit",
    description: "Proyecto enfocado en testing con JUnit5, implementando pruebas unitarias, de integración y TDD.",
    image: "https://images.unsplash.com/photo-1565687981296-535f09db714e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqdW5pdCUyMHRlc3RpbmclMjBzb2Z0d2FyZSUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc1ODEwNDI1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["Java", "JUnit5", "Mockito", "Maven"],
    status: "Completado",
    githubUrl: "https://github.com/albertoagreda/ProyectoPruebasJUnit",
    demoUrl: null,
    problem: "Demostrar conocimientos avanzados en testing automatizado y metodologías de desarrollo guiado por pruebas (TDD).",
    solution: "Implementación completa de un proyecto con cobertura de testing del 95%, incluyendo pruebas unitarias, de integración y mocks.",
    tools: ["Java 17", "JUnit 5", "Mockito", "Maven", "Jacoco Coverage"],
    results: [
      "Cobertura de código del 95%",
      "Implementación de TDD completa",
      "Pruebas unitarias y de integración",
      "Uso avanzado de Mockito",
      "Reportes automatizados de cobertura"
    ]
  },
  {
    id: 4,
    title: "Sistema Reserva Taller",
    description: "Sistema completo de gestión de reservas para talleres mecánicos con administración de citas y clientes.",
    image: "https://images.unsplash.com/photo-1583773192617-ff7374bc5844?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvJTIwd29ya3Nob3AlMjBtYW5hZ2VtZW50JTIwc3lzdGVtfGVufDF8fHx8MTc1ODEwNDI1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["Java", "JavaFX", "MySQL", "FXML"],
    status: "Completado",
    githubUrl: "https://github.com/albertoagreda/sistema_reserva_taller.",
    demoUrl: null,
    problem: "Crear un sistema integral para gestionar reservas, clientes, servicios y horarios en un taller mecánico.",
    solution: "Aplicación de escritorio con JavaFX que permite gestión completa de reservas, calendario de citas, base de datos de clientes y reportes.",
    tools: ["Java 17", "JavaFX", "MySQL", "FXML", "Maven", "Scene Builder"],
    results: [
      "Sistema completo de reservas",
      "Gestión de clientes y servicios",
      "Calendario visual interactivo",
      "Base de datos relacional optimizada",
      "Reportes y estadísticas automáticas"
    ]
  },
  {
    id: 5,
    title: "NexusTech Portfolio",
    description: "Portfolio profesional multi-página con navegación, proyectos, certificaciones y formulario de contacto funcional.",
    image: "https://images.unsplash.com/photo-1649000808933-1f4aac7cad9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc1ODA0NDY0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    status: "Activo",
    githubUrl: "https://github.com/albertoagreda/nexustech-portfolio",
    demoUrl: null,
    problem: "Necesidad de una presencia web profesional para mostrar proyectos, habilidades y facilitar contacto con potenciales empleadores.",
    solution: "Portfolio web multi-página responsive con React y TypeScript, incluyendo páginas de proyectos, certificaciones, experiencia y formulario de contacto.",
    tools: ["React 18", "TypeScript", "Tailwind CSS", "Motion React", "Vite"],
    results: [
      "Portfolio completamente profesional",
      "8 páginas interconectadas",
      "Animaciones y microinteracciones",
      "Responsive design completo",
      "Formulario de contacto funcional"
    ]
  }
];

export function ProjectsPage({ onNavigate }: ProjectsPageProps) {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  if (selectedProject) {
    return (
      <div className="min-h-screen pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Button
            variant="ghost"
            onClick={() => setSelectedProject(null)}
            className="mb-8 transition-all duration-200 hover:scale-105"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a proyectos
          </Button>

          <div className="space-y-8">
            {/* Header */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Badge variant="secondary">{selectedProject.status}</Badge>
                <Badge variant="outline">
                  <Calendar className="w-3 h-3 mr-1" />
                  2023-2024
                </Badge>
              </div>
              <h1 className="text-4xl font-bold mb-4">{selectedProject.title}</h1>
              <p className="text-xl text-muted-foreground">{selectedProject.description}</p>
            </div>

            {/* Image */}
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 sm:h-80 object-cover"
              />
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Tecnologías utilizadas</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Problem */}
              <Card className="transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Target className="h-5 w-5 text-destructive" />
                    <span>Problema</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{selectedProject.problem}</p>
                </CardContent>
              </Card>

              {/* Solution */}
              <Card className="transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Zap className="h-5 w-5 text-primary" />
                    <span>Solución</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{selectedProject.solution}</p>
                </CardContent>
              </Card>
            </div>

            {/* Tools */}
            <Card className="transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle>Herramientas y Tecnologías</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tools.map((tool) => (
                    <Badge key={tool} variant="outline">{tool}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            <Card className="transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle>Resultados y Métricas</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {selectedProject.results.map((result, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{result}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Project Links */}
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                className="transition-all duration-300 hover:scale-105"
              >
                <Github className="mr-2 h-4 w-4" />
                Ver en GitHub
              </Button>
              {selectedProject.demoUrl && (
                <Button 
                  variant="outline"
                  onClick={() => window.open(selectedProject.demoUrl, '_blank')}
                  className="transition-all duration-300 hover:scale-105"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Ver Demo
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Proyectos Realizados</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Una selección de proyectos que demuestran mi experiencia en desarrollo de software, 
            desde aplicaciones web con React hasta sistemas de escritorio con Java y APIs REST.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="group transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
              onClick={() => setSelectedProject(project)}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                    {project.status}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <CardTitle className="mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="mb-4 line-clamp-3">
                  {project.description}
                </CardDescription>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                >
                  Ver caso de estudio
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}