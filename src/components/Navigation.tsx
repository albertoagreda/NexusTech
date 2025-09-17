import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Menu, X, Code, User, Award, Briefcase, Info, Mail, MessageCircle, ChevronDown, GraduationCap, Settings } from "lucide-react";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { AvailabilityIndicator } from "./AvailabilityIndicator";

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const navigationItems = [
  { id: 'home', label: 'Inicio', icon: User, description: 'Página principal' },
  { id: 'projects', label: 'Proyectos', icon: Code, description: 'Mis trabajos y casos de estudio' },
  { id: 'certifications', label: 'Certificaciones', icon: Award, description: '18 certificaciones técnicas' },
  { id: 'experience', label: 'Experiencia', icon: Briefcase, description: 'Historial profesional' },
  { id: 'education', label: 'Estudios', icon: GraduationCap, description: 'Formación académica' },
  { id: 'services', label: 'Servicios', icon: Settings, description: 'Servicios especializados' },
  { id: 'testimonials', label: 'Testimonios', icon: MessageCircle, description: 'Opiniones de clientes' },
  { id: 'about', label: 'Sobre mí', icon: Info, description: 'Mi historia y habilidades' },
  { id: 'contact', label: 'Contacto', icon: Mail, description: 'Información de contacto' },
];

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePageChange = (page: string) => {
    onPageChange(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getCurrentPageLabel = () => {
    const currentItem = navigationItems.find(item => item.id === currentPage);
    return currentItem ? currentItem.label : 'Navegación';
  };

  const getCurrentPageIcon = () => {
    const currentItem = navigationItems.find(item => item.id === currentPage);
    return currentItem ? currentItem.icon : Menu;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-background/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Logo 
            size="md"
            showText={true}
            className="hidden sm:flex"
            onClick={() => handlePageChange('home')}
          />
          <Logo 
            size="md"
            showText={false}
            className="sm:hidden"
            onClick={() => handlePageChange('home')}
          />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <AvailabilityIndicator variant="compact" />
            <ThemeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="outline" 
                  className="flex items-center space-x-2 px-4 py-2 min-w-[160px] justify-between transition-all duration-200 hover:scale-105 hover:shadow-md hover:bg-accent/50 group"
                >
                  <div className="flex items-center space-x-2">
                    {(() => {
                      const CurrentIcon = getCurrentPageIcon();
                      return <CurrentIcon className="h-4 w-4 text-primary" />;
                    })()}
                    <span className="font-medium">{getCurrentPageLabel()}</span>
                  </div>
                  <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="end" 
                className="w-64 mt-2 shadow-xl border border-border/50 backdrop-blur-md bg-background/98 animate-in fade-in-0 zoom-in-95"
                sideOffset={8}
              >
                <div className="p-2">
                  <div className="text-xs uppercase tracking-wide text-muted-foreground font-medium mb-3 px-2 flex items-center space-x-2">
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                    <span>Secciones del Portfolio</span>
                  </div>
                  {navigationItems.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = currentPage === item.id;
                    return (
                      <div key={item.id}>
                        <DropdownMenuItem
                          onClick={() => handlePageChange(item.id)}
                          className={`flex items-center space-x-3 px-3 py-2.5 rounded-md cursor-pointer transition-all duration-200 ${
                            isActive 
                              ? 'bg-primary text-primary-foreground shadow-sm' 
                              : 'hover:bg-accent/80 hover:scale-[1.02]'
                          }`}
                        >
                          <div className={`p-1.5 rounded-md ${
                            isActive 
                              ? 'bg-primary-foreground/20' 
                              : 'bg-accent/50'
                          }`}>
                            <Icon className="h-4 w-4" />
                          </div>
                          <span className="font-medium">{item.label}</span>
                          {isActive && (
                            <div className="ml-auto w-2 h-2 bg-current rounded-full opacity-80"></div>
                          )}
                        </DropdownMenuItem>
                        {(index === 0 || index === 4 || index === 6) && index !== navigationItems.length - 1 ? (
                          <DropdownMenuSeparator className="my-2 opacity-50" />
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
            <AvailabilityIndicator variant="compact" />
            <ThemeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="flex items-center space-x-1 px-3 py-2 transition-all duration-200 hover:scale-105 hover:bg-accent/50 group"
                >
                  {(() => {
                    const CurrentIcon = getCurrentPageIcon();
                    return <CurrentIcon className="h-5 w-5 text-primary" />;
                  })()}
                  <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="end" 
                className="w-72 mt-2 shadow-xl border border-border/50 backdrop-blur-md bg-background/98 animate-in fade-in-0 zoom-in-95"
                sideOffset={8}
              >
                <div className="p-2">
                  <div className="text-xs uppercase tracking-wide text-muted-foreground font-medium mb-3 px-2 flex items-center space-x-2">
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                    <span>Portfolio Sections</span>
                  </div>
                  {navigationItems.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = currentPage === item.id;
                    return (
                      <div key={item.id}>
                        <DropdownMenuItem
                          onClick={() => handlePageChange(item.id)}
                          className={`flex items-center space-x-3 px-3 py-3 rounded-md cursor-pointer transition-all duration-200 ${
                            isActive 
                              ? 'bg-primary text-primary-foreground shadow-sm' 
                              : 'hover:bg-accent/80'
                          }`}
                        >
                          <div className={`p-2 rounded-md ${
                            isActive 
                              ? 'bg-primary-foreground/20' 
                              : 'bg-accent/50'
                          }`}>
                            <Icon className="h-4 w-4" />
                          </div>
                          <div className="flex-1">
                            <span className="font-medium block">{item.label}</span>
                            <span className="text-xs text-muted-foreground block mt-0.5">{item.description}</span>
                          </div>
                          {isActive && (
                            <div className="w-2 h-2 bg-current rounded-full opacity-80"></div>
                          )}
                        </DropdownMenuItem>
                        {(index === 0 || index === 4 || index === 6) && index !== navigationItems.length - 1 ? (
                          <DropdownMenuSeparator className="my-2 opacity-50" />
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}