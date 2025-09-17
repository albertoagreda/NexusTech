import { useEffect } from "react";

export function FaviconGenerator() {
  useEffect(() => {
    // Generar favicon dinámicamente usando canvas
    const generateFavicon = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.width = 64;
      canvas.height = 64;

      // Fondo con gradiente
      const gradient = ctx.createLinearGradient(0, 0, 64, 64);
      gradient.addColorStop(0, '#3b82f6'); // primary blue
      gradient.addColorStop(1, '#1d4ed8'); // darker blue
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);

      // Añadir las letras "NT" (NexusTech)
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 24px Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('NT', 32, 32);

      // Convertir a data URL
      const dataURL = canvas.toDataURL('image/png');
      
      // Actualizar favicon
      let favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
      if (!favicon) {
        favicon = document.createElement('link');
        favicon.rel = 'icon';
        document.head.appendChild(favicon);
      }
      favicon.href = dataURL;

      // Añadir diferentes tamaños para mejor compatibilidad
      const sizes = [16, 32, 192, 512];
      
      sizes.forEach(size => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = size;
        canvas.height = size;

        // Fondo con gradiente escalado
        const gradient = ctx.createLinearGradient(0, 0, size, size);
        gradient.addColorStop(0, '#3b82f6');
        gradient.addColorStop(1, '#1d4ed8');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, size, size);

        // Texto escalado
        ctx.fillStyle = '#ffffff';
        ctx.font = `bold ${Math.floor(size * 0.375)}px Arial, sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('NT', size / 2, size / 2);

        // Crear enlaces para diferentes tamaños
        const link = document.createElement('link');
        link.rel = 'icon';
        link.type = 'image/png';
        link.sizes = `${size}x${size}`;
        link.href = canvas.toDataURL('image/png');
        document.head.appendChild(link);
      });

      // Apple touch icon
      const appleTouchCanvas = document.createElement('canvas');
      const appleCtx = appleTouchCanvas.getContext('2d');
      if (appleCtx) {
        appleTouchCanvas.width = 180;
        appleTouchCanvas.height = 180;

        // Fondo con esquinas redondeadas para Apple
        const gradient = appleCtx.createLinearGradient(0, 0, 180, 180);
        gradient.addColorStop(0, '#3b82f6');
        gradient.addColorStop(1, '#1d4ed8');
        
        appleCtx.fillStyle = gradient;
        appleCtx.roundRect(0, 0, 180, 180, 20);
        appleCtx.fill();

        appleCtx.fillStyle = '#ffffff';
        appleCtx.font = 'bold 68px Arial, sans-serif';
        appleCtx.textAlign = 'center';
        appleCtx.textBaseline = 'middle';
        appleCtx.fillText('NT', 90, 90);

        const appleTouchIcon = document.createElement('link');
        appleTouchIcon.rel = 'apple-touch-icon';
        appleTouchIcon.href = appleTouchCanvas.toDataURL('image/png');
        document.head.appendChild(appleTouchIcon);
      }
    };

    // Función para añadir otros meta tags relacionados
    const addMetaTags = () => {
      const metaTags = [
        { name: 'application-name', content: 'NexusTech' },
        { name: 'apple-mobile-web-app-title', content: 'NexusTech' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'msapplication-TileColor', content: '#3b82f6' },
        { name: 'theme-color', content: '#3b82f6' }
      ];

      metaTags.forEach(({ name, content }) => {
        let metaTag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
        if (!metaTag) {
          metaTag = document.createElement('meta');
          metaTag.name = name;
          document.head.appendChild(metaTag);
        }
        metaTag.content = content;
      });

      // Web App Manifest
      const manifest = {
        name: "NexusTech - Alberto Agreda",
        short_name: "NexusTech",
        description: "Portfolio profesional de Alberto Agreda - Desarrollador Java",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#3b82f6",
        icons: [
          {
            src: "/icon-192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/icon-512.png", 
            sizes: "512x512",
            type: "image/png"
          }
        ]
      };

      const manifestBlob = new Blob([JSON.stringify(manifest)], {
        type: 'application/json'
      });
      const manifestURL = URL.createObjectURL(manifestBlob);

      let manifestLink = document.querySelector('link[rel="manifest"]') as HTMLLinkElement;
      if (!manifestLink) {
        manifestLink = document.createElement('link');
        manifestLink.rel = 'manifest';
        document.head.appendChild(manifestLink);
      }
      manifestLink.href = manifestURL;
    };

    generateFavicon();
    addMetaTags();
  }, []);

  return null;
}