import { useEffect } from 'react';

interface StructuredDataProps {
  page: string;
}

export function StructuredData({ page }: StructuredDataProps) {
  useEffect(() => {
    // Remove existing structured data
    const existingScript = document.querySelector('#structured-data');
    if (existingScript) {
      existingScript.remove();
    }

    // Base person data
    const personData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Alberto Agreda",
      "alternateName": "Albert Guiver",
      "jobTitle": "Desarrollador Java",
      "description": "Desarrollador Java con experiencia internacional especializado en desarrollo backend, arquitectura de software y optimización de procesos.",
      "url": window.location.origin,
      "image": `${window.location.origin}/profile-image.jpg`,
      "email": "albertguiver@gmail.com",
      "telephone": "+34-611-456-367",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Sevilla",
        "addressRegion": "Andalucía",
        "addressCountry": "España"
      },
      "sameAs": [
        "https://www.linkedin.com/in/albertoagre",
        "https://github.com/albertoagreda"
      ],
      "knowsAbout": [
        "Java Programming",
        "Backend Development", 
        "Software Architecture",
        "Database Design",
        "Testing & QA",
        "Spring Boot",
        "SQL",
        "Linux",
        "TDD",
        "JUnit5",
        "SOLID Principles"
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma",
          "educationalLevel": "Higher Education"
        }
      ],
      "workLocation": [
        {
          "@type": "Place",
          "name": "Sevilla, España"
        },
        {
          "@type": "Place", 
          "name": "Alemania"
        }
      ],
      "hasOccupation": {
        "@type": "Occupation",
        "name": "Desarrollador de Software",
        "occupationLocation": {
          "@type": "Place",
          "name": "España"
        },
        "skills": "Java, Spring Boot, SQL, Testing, Backend Development"
      }
    };

    // Page-specific structured data
    let structuredData = personData;

    switch (page) {
      case 'projects':
        structuredData = {
          ...personData,
          "@type": ["Person", "SoftwareApplication"],
          "applicationCategory": "DeveloperApplication",
          "creator": personData,
          "programmingLanguage": ["Java", "SQL", "HTML", "CSS", "JavaScript"]
        };
        break;

      case 'experience':
        structuredData = {
          ...personData,
          "hasOccupation": [
            {
              "@type": "Occupation",
              "name": "Desarrollador Java Senior",
              "occupationLocation": {
                "@type": "Place",
                "name": "Alemania"
              },
              "experienceRequirements": "2+ años de experiencia internacional"
            },
            {
              "@type": "Occupation", 
              "name": "Desarrollador Backend",
              "occupationLocation": {
                "@type": "Place",
                "name": "España"
              },
              "skills": "Java, Spring Boot, Bases de Datos, Testing"
            }
          ]
        };
        break;

      case 'certifications':
        structuredData = {
          ...personData,
          "hasCredential": [
            ...personData.hasCredential,
            {
              "@type": "EducationalOccupationalCredential",
              "name": "18 Certificaciones Técnicas Especializadas",
              "credentialCategory": "Professional Certification",
              "about": ["Java", "Testing", "Databases", "AWS", "Software Development"]
            }
          ]
        };
        break;

      case 'services':
        structuredData = {
          ...personData,
          "@type": ["Person", "Service"],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Servicios Especializados",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Chatbots Inteligentes",
                  "description": "Desarrollo de chatbots conversacionales con IA",
                  "provider": personData
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Automatización N8N",
                  "description": "Flujos de trabajo automatizados",
                  "provider": personData
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Desarrollo Web & Apps",
                  "description": "Aplicaciones web y móviles modernas",
                  "provider": personData
                }
              }
            ]
          }
        };
        break;

      case 'contact':
        structuredData = {
          ...structuredData,
          "@type": ["Person", "ContactPage"],
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "albertguiver@gmail.com",
            "telephone": "+34-611-456-367",
            "contactType": "Professional Services",
            "availableLanguage": ["Spanish", "English", "German"]
          }
        };
        break;

      case 'testimonials':
        structuredData = {
          ...personData,
          "review": [
            {
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "author": {
                "@type": "Person",
                "name": "Cliente Internacional"
              },
              "reviewBody": "Excelente desarrollador con gran experiencia internacional"
            }
          ]
        };
        break;
    }

    // Organization data for company pages
    if (page === 'about' || page === 'home') {
      structuredData = {
        ...structuredData,
        "memberOf": {
          "@type": "Organization",
          "name": "NexusTech",
          "description": "Portfolio profesional de desarrollo Java",
          "url": window.location.origin,
          "employee": personData
        }
      };
    }

    // Create and inject script
    const script = document.createElement('script');
    script.id = 'structured-data';
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(structuredData, null, 2);
    document.head.appendChild(script);

    // Cleanup on component unmount
    return () => {
      const scriptToRemove = document.querySelector('#structured-data');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [page]);

  return null; // This component doesn't render anything
}