import nexusTechLogo from "figma:asset/af3ba75d41e3b6aaf91430be0e98ad3563f18ee1.png";

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
  onClick?: () => void;
}

export function Logo({ size = 'md', showText = true, className = "", onClick }: LogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10", 
    lg: "w-16 h-16"
  };

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-3xl"
  };

  return (
    <div 
      className={`flex items-center space-x-2 cursor-pointer transition-transform hover:scale-105 ${className}`}
      onClick={onClick}
    >
      <div className={`${sizeClasses[size]} rounded-lg overflow-hidden shadow-md bg-gradient-to-br from-primary to-blue-600`}>
        <img 
          src={nexusTechLogo} 
          alt="NexusTech - Desarrollador Java"
          className="w-full h-full object-cover"
        />
      </div>
      {showText && (
        <span className={`font-semibold ${textSizeClasses[size]} bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent`}>
          NexusTech
        </span>
      )}
    </div>
  );
}