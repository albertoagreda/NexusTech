import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import { Code, Award, Briefcase, User, Globe } from "lucide-react";
import { Logo } from "./Logo";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/20 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <Logo size="sm" showText={true} />
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">
                <Code className="w-3 h-3 mr-1" />
                Java
              </Badge>
              <Badge variant="secondary">
                <Globe className="w-3 h-3 mr-1" />
                Internacional
              </Badge>
              <Badge variant="secondary">
                <Award className="w-3 h-3 mr-1" />
                18 Certificaciones
              </Badge>
            </div>
          </div>

          <div>
            <h4 className="mb-4">Contacto</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a 
                  href="mailto:albertguiver@gmail.com" 
                  className="hover:text-foreground transition-colors"
                >
                  albertguiver@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+34611456367" 
                  className="hover:text-foreground transition-colors"
                >
                  +34 611 456 367
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/34611456367" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/albertoagre" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/albertoagreda" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li className="text-sm">
                📍 Sevilla, España
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Especialidades</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center space-x-2">
                <Code className="w-4 h-4" />
                <span>Desarrollo Backend</span>
              </li>
              <li className="flex items-center space-x-2">
                <Briefcase className="w-4 h-4" />
                <span>Sistemas Empresariales</span>
              </li>
              <li className="flex items-center space-x-2">
                <Award className="w-4 h-4" />
                <span>Testing & Calidad</span>
              </li>
              <li className="flex items-center space-x-2">
                <Globe className="w-4 h-4" />
                <span>Experiencia Internacional</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground space-y-4 sm:space-y-0">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <p>© {currentYear} NexusTech. Desarrollado con React y Tailwind CSS.</p>
            <div className="flex space-x-4">
              <button 
                onClick={() => onNavigate('privacy-policy')}
                className="hover:text-foreground transition-colors underline"
              >
                Política de Privacidad
              </button>
              <button 
                onClick={() => onNavigate('cookie-policy')}
                className="hover:text-foreground transition-colors underline"
              >
                Política de Cookies
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}