import { Badge } from "./ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

interface AvailabilityIndicatorProps {
  variant?: "compact" | "full";
  className?: string;
}

export function AvailabilityIndicator({ 
  variant = "compact", 
  className = "" 
}: AvailabilityIndicatorProps) {
  
  if (variant === "compact") {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className={`flex items-center space-x-2 cursor-help ${className}`}>
              <div className="relative">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-75"></div>
              </div>
              <span className="text-sm font-medium text-green-600 dark:text-green-400 hidden sm:inline">
                Disponible
              </span>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Disponible para nuevos proyectos</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return (
    <Badge 
      variant="outline" 
      className={`flex items-center space-x-2 px-3 py-1.5 border-green-200 bg-green-50 text-green-700 dark:border-green-800 dark:bg-green-950 dark:text-green-300 ${className}`}
    >
      <div className="relative">
        <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
        <div className="absolute inset-0 w-2.5 h-2.5 bg-green-400 rounded-full animate-ping opacity-75"></div>
      </div>
      <span className="text-xs font-medium">Disponible para nuevos proyectos</span>
    </Badge>
  );
}