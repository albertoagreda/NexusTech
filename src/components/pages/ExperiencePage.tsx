import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { MapPin, Calendar, Building2, Briefcase, Globe, Users, TrendingUp } from "lucide-react";

const experiences = [
  {
    company: "FIEGE",
    position: "Controlador de mercancías",
    period: "Febrero 2023 - Septiembre 2023",
    location: "Alemania",
    type: "Tiempo completo",
    description: "Responsable del control de calidad y gestión de inventario en una de las principales empresas logísticas de Europa. Implementé mejoras en los procesos de verificación que redujeron los errores en un 40%.",
    achievements: [
      "Reducción del 40% en errores de inventario",
      "Optimización de procesos de control de calidad",
      "Gestión de más de 1000 productos diarios",
      "Colaboración en equipo internacional"
    ],
    skills: ["Control de calidad", "Gestión de inventario", "Procesos logísticos", "Trabajo en equipo"],
    logo: "🏭",
    color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
  },
  {
    company: "Office People",
    position: "Ayudante de rampa",
    period: "Febrero 2022 - Febrero 2023",
    location: "Alemania",
    type: "Tiempo completo",
    description: "Operaciones aeroportuarias especializadas en carga y descarga de aeronaves. Responsable de la seguridad y eficiencia en operaciones críticas bajo estrictos protocolos internacionales.",
    achievements: [
      "100% cumplimiento de protocolos de seguridad",
      "Manejo de carga especializada y peligrosa",
      "Trabajo en turnos rotativos 24/7",
      "Certificación en seguridad aeroportuaria"
    ],
    skills: ["Seguridad aeroportuaria", "Protocolos internacionales", "Trabajo bajo presión", "Atención al detalle"],
    logo: "✈️",
    color: "bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-200"
  },
  {
    company: "Shusterman",
    position: "Responsable de selección de pedidos",
    period: "Septiembre 2021 - Febrero 2022",
    location: "Alemania",
    type: "Tiempo completo",
    description: "Liderazgo de equipo en operaciones de picking y preparación de pedidos. Implementé metodologías lean que mejoraron la productividad del equipo en un 25%.",
    achievements: [
      "Mejora del 25% en productividad del equipo",
      "Implementación de metodologías lean",
      "Supervisión de 8 personas",
      "Reducción de tiempos de procesamiento"
    ],
    skills: ["Liderazgo de equipo", "Metodologías lean", "Gestión de operaciones", "Optimización de procesos"],
    logo: "📦",
    color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
  },
  {
    company: "Sitel",
    position: "Teleoperador",
    period: "Julio 2021 - Septiembre 2021",
    location: "Sevilla, España",
    type: "Tiempo completo",
    description: "Atención al cliente multicanal para clientes internacionales. Resolución de incidencias técnicas y comerciales con altos estándares de calidad y satisfacción del cliente.",
    achievements: [
      "95% de satisfacción del cliente",
      "Resolución de +50 casos diarios",
      "Formación en protocolos de calidad",
      "Manejo de múltiples idiomas"
    ],
    skills: ["Atención al cliente", "Resolución de problemas", "Comunicación efectiva", "Idiomas"],
    logo: "📞",
    color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
  },
  {
    company: "Bar Oriza",
    position: "Camarero",
    period: "Febrero 2019 - Septiembre 2020",
    location: "Sevilla, España",
    type: "Tiempo parcial",
    description: "Servicio de hostelería en establecimiento de alta rotación. Desarrollo de habilidades de multitarea, gestión del estrés y atención personalizada en ambiente dinámico.",
    achievements: [
      "Gestión de hasta 100 clientes por turno",
      "Incremento de ventas por recomendaciones",
      "Trabajo en equipo bajo presión",
      "Excelente feedback de clientes regulares"
    ],
    skills: ["Atención al cliente", "Multitarea", "Gestión del estrés", "Trabajo en equipo"],
    logo: "🍺",
    color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
  }
];

const stats = [
  { label: "Años de experiencia", value: "5+", icon: Calendar },
  { label: "Países trabajados", value: "2", icon: Globe },
  { label: "Sectores diferentes", value: "4", icon: Building2 },
  { label: "Posiciones de liderazgo", value: "2", icon: Users },
];

export function ExperiencePage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Briefcase className="h-4 w-4" />
            <span className="text-sm font-medium">Experiencia Internacional</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Experiencia Laboral</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Más de 5 años de experiencia profesional en diferentes sectores y países, 
            con un enfoque en la mejora continua y la excelencia operacional.
          </p>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <Icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Experience Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-primary to-blue-600 h-full rounded-full"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>
                
                {/* Content */}
                <div className={`ml-16 md:ml-0 ${
                  index % 2 === 0 
                    ? 'md:mr-1/2 md:pr-12' 
                    : 'md:ml-1/2 md:pl-12'
                }`}>
                  <Card className="transition-all duration-300 hover:scale-105 hover:shadow-xl group">
                    <CardContent className="p-6">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="text-3xl transition-transform group-hover:scale-110">
                            {exp.logo}
                          </div>
                          <div>
                            <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                              {exp.position}
                            </h3>
                            <p className="text-primary font-semibold">{exp.company}</p>
                          </div>
                        </div>
                      </div>

                      {/* Meta info */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="outline" className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{exp.period}</span>
                        </Badge>
                        <Badge variant="outline" className="flex items-center space-x-1">
                          <MapPin className="h-3 w-3" />
                          <span>{exp.location}</span>
                        </Badge>
                        <Badge className={exp.color}>
                          {exp.type}
                        </Badge>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-6">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 flex items-center">
                          <TrendingUp className="h-4 w-4 mr-2 text-primary" />
                          Logros principales
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start space-x-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills */}
                      <div>
                        <h4 className="font-semibold mb-3">Habilidades desarrolladas</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Insights */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-center mb-12">Puntos Clave de mi Trayectoria</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Experiencia Internacional",
                description: "2+ años trabajando en Alemania me han dado una perspectiva global y adaptabilidad cultural excepcional.",
                icon: Globe,
                color: "text-blue-600"
              },
              {
                title: "Liderazgo y Mejora",
                description: "Historial probado de optimización de procesos y liderazgo de equipos, con resultados medibles.",
                icon: TrendingUp,
                color: "text-green-600"
              },
              {
                title: "Adaptabilidad",
                description: "Exitosa transición entre sectores diversos: logística, aviación, atención al cliente y hostelería.",
                icon: Users,
                color: "text-purple-600"
              }
            ].map((insight, index) => {
              const Icon = insight.icon;
              return (
                <Card key={index} className="transition-all duration-300 hover:scale-105 hover:shadow-lg text-center">
                  <CardContent className="p-6">
                    <Icon className={`h-12 w-12 mx-auto mb-4 ${insight.color}`} />
                    <h3 className="font-semibold mb-3">{insight.title}</h3>
                    <p className="text-sm text-muted-foreground">{insight.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}