import { Button } from "./ui/button";
import { Download, FileText } from "lucide-react";
import { toast } from "sonner@2.0.3";
import cvImage from "figma:asset/977c217332f59d07c574fb9a2be20ff7a8c98ed7.png";

interface CVDownloadProps {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "default" | "lg";
  className?: string;
  showIcon?: boolean;
}

export function CVDownload({ 
  variant = "default", 
  size = "default", 
  className = "",
  showIcon = true 
}: CVDownloadProps) {
  
  const handleDownload = async () => {
    try {
      // Descargar la imagen del CV
      const response = await fetch(cvImage);
      const blob = await response.blob();
      
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Alberto_Agredano_CV.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      toast.success("CV descargado correctamente", {
        description: "El archivo se ha guardado en tu carpeta de descargas",
        duration: 3000,
      });

      // Analytics tracking (si está disponible)
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'download', {
          event_category: 'CV',
          event_label: 'Alberto_Agredano_CV',
          value: 1
        });
      }
    } catch (error) {
      console.error("Error al descargar el CV:", error);
      toast.error("Error al descargar el CV", {
        description: "Por favor, inténtalo de nuevo o contacta directamente.",
        duration: 3000,
      });
    }
  };

  return (
    <Button
      onClick={handleDownload}
      variant={variant}
      size={size}
      className={`transition-all duration-300 hover:scale-105 ${className}`}
    >
      {showIcon && <Download className="w-4 h-4 mr-2" />}
      Descargar CV
    </Button>
  );
}