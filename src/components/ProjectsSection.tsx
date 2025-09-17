import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, Github, ArrowRight, Clock, Users, TrendingUp } from "lucide-react";
import { useState } from "react";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "EcoShop - E-commerce Sostenible",
      description: "Plataforma de comercio electrónico con integración de IA para recomendaciones personalizadas y sistema de puntos de sostenibilidad.",
      image: "https://images.unsplash.com/photo-1554306274-f23873d9a26c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3QlMjBzY3JlZW58ZW58MXx8fHwxNzU4MDk2NTk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "E-commerce",
      technologies: ["React", "Node.js", "PostgreSQL", "OpenAI API", "Stripe"],
      duration: "4 meses",
      team: "3 personas",
      results: "+150% conversión",
      problem: "Una empresa de productos ecológicos necesitaba una plataforma que no solo vendiera productos, sino que educara a los usuarios sobre sostenibilidad.",
      solution: "Desarrollé un e-commerce con IA que recomienda productos basados en hábitos de compra y objetivos de sostenibilidad. Incluye gamificación con puntos verdes y contenido educativo.",
      role: "Lead Developer & Product Owner",
      tools: ["React", "Next.js", "TypeScript", "PostgreSQL", "OpenAI API", "Stripe", "Tailwind CSS"],
      achievements: [
        "Incremento del 150% en la tasa de conversión",
        "Tiempo de permanencia promedio de 8 minutos",
        "Sistema de recomendaciones con 85% de precisión",
        "Integración de pagos con múltiples métodos"
      ],
      liveUrl: "https://ecoshop-demo.com",
      githubUrl: "https://github.com/usuario/ecoshop"
    },
    {
      id: 2,
      title: "MediAssist - Chatbot Médico",
      description: "Asistente virtual inteligente para clínicas que automatiza citas, consultas básicas y seguimiento de pacientes.",
      image: "https://images.unsplash.com/photo-1640694514279-090bb1b09ee9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkYXNoYm9hcmQlMjBkZXNpZ258ZW58MXx8fHwxNzU4MDk2NTk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "IA & Salud",
      technologies: ["Python", "OpenAI", "WhatsApp API", "MongoDB", "N8N"],
      duration: "6 meses",
      team: "2 personas",
      results: "-70% llamadas",
      problem: "Una clínica dental recibía más de 200 llamadas diarias para citas y consultas básicas, saturando al personal administrativo.",
      solution: "Creé un chatbot multicanal (WhatsApp, web, Telegram) que maneja citas, responde preguntas frecuentes y deriva casos complejos al personal médico.",
      role: "IA Developer & Integration Specialist",
      tools: ["Python", "OpenAI GPT-4", "WhatsApp Business API", "MongoDB", "N8N", "FastAPI", "Docker"],
      achievements: [
        "Reducción del 70% en llamadas telefónicas",
        "Automatización del 80% de citas",
        "Tiempo de respuesta de menos de 2 segundos",
        "Integración con sistema de gestión existente"
      ],
      liveUrl: "https://mediassist-demo.com",
      githubUrl: "https://github.com/usuario/mediassist"
    },
    {
      id: 3,
      title: "AutoFlow - Automatización N8N",
      description: "Suite de automatizaciones para empresas que conecta CRM, facturación, marketing y atención al cliente.",
      image: "https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBjb2Rpbmd8ZW58MXx8fHwxNzU4MDEyOTI5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Automatización",
      technologies: ["N8N", "Zapier", "HubSpot API", "Google Sheets", "Slack"],
      duration: "3 meses",
      team: "1 persona",
      results: "15h/semana ahorradas",
      problem: "Una agencia de marketing gastaba 15 horas semanales en tareas repetitivas como actualizar CRM, enviar facturas y reportes.",
      solution: "Diseñé un ecosistema de automatizaciones que conecta todas sus herramientas, desde lead capture hasta facturación automática.",
      role: "Automation Specialist",
      tools: ["N8N", "HubSpot", "QuickBooks", "Google Workspace", "Slack", "Webhook", "Cron Jobs"],
      achievements: [
        "Ahorro de 15 horas semanales de trabajo manual",
        "Reducción del 95% en errores de entrada de datos",
        "Automatización de 12 procesos críticos",
        "ROI del 400% en el primer año"
      ],
      liveUrl: "https://autoflow-demo.com",
      githubUrl: "https://github.com/usuario/autoflow"
    }
  ];

  const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
      <div className="aspect-video relative overflow-hidden">
        <ImageWithFallback
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <Badge variant="secondary" className="mb-2">
            {project.category}
          </Badge>
          <h3 className="text-white">{project.title}</h3>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
        
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

        <div className="grid grid-cols-3 gap-4 mb-6 text-center">
          <div className="flex flex-col items-center">
            <Clock className="h-4 w-4 text-muted-foreground mb-1" />
            <span className="text-xs text-muted-foreground">{project.duration}</span>
          </div>
          <div className="flex flex-col items-center">
            <Users className="h-4 w-4 text-muted-foreground mb-1" />
            <span className="text-xs text-muted-foreground">{project.team}</span>
          </div>
          <div className="flex flex-col items-center">
            <TrendingUp className="h-4 w-4 text-muted-foreground mb-1" />
            <span className="text-xs text-muted-foreground">{project.results}</span>
          </div>
        </div>

        <div className="flex gap-2">
          <Button 
            size="sm" 
            className="flex-1"
            onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
          >
            {selectedProject === project.id ? "Ocultar detalles" : "Ver caso de estudio"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="sm" variant="outline">
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );

  const ProjectDetail = ({ project }: { project: typeof projects[0] }) => (
    <Card className="p-8 mt-8 border-primary/20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <h4 className="mb-3 text-primary">El Problema</h4>
            <p className="text-muted-foreground">{project.problem}</p>
          </div>
          
          <div>
            <h4 className="mb-3 text-primary">La Solución</h4>
            <p className="text-muted-foreground">{project.solution}</p>
          </div>

          <div>
            <h4 className="mb-3 text-primary">Mi Rol</h4>
            <p className="text-muted-foreground">{project.role}</p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="mb-3 text-primary">Herramientas Utilizadas</h4>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <Badge key={tool} variant="outline">
                  {tool}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-primary">Resultados Obtenidos</h4>
            <ul className="space-y-2">
              {project.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-2 text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  {achievement}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-3">
            <Button variant="outline" className="flex-1">
              <ExternalLink className="mr-2 h-4 w-4" />
              Ver proyecto
            </Button>
            <Button variant="outline" className="flex-1">
              <Github className="mr-2 h-4 w-4" />
              Ver código
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );

  return (
    <section id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="px-3 py-1 mb-4">
            Proyectos Destacados
          </Badge>
          <h2 className="mb-4">
            Casos de Estudio y 
            <span className="text-primary"> Resultados Reales</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cada proyecto cuenta una historia de transformación digital. Desde el problema inicial 
            hasta los resultados medibles, estos casos muestran cómo la tecnología puede generar valor real.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {selectedProject && (
          <ProjectDetail 
            project={projects.find(p => p.id === selectedProject)!} 
          />
        )}

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            ¿Quieres ver más proyectos o discutir tu próxima idea?
          </p>
          <Button size="lg" onClick={() => {
            const element = document.getElementById('contacto');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}>
            Hablemos de tu proyecto
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}