import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import { Shield, Mail, Eye, Database, Lock, FileText } from "lucide-react";

export function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Shield className="h-8 w-8 text-primary" />
          <h1>Política de Privacidad</h1>
        </div>
        <p className="text-muted-foreground">
          Última actualización: 17 de septiembre de 2025
        </p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              1. Información que recopilamos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="mb-2">Información de contacto:</h4>
              <ul className="space-y-1 text-muted-foreground ml-4">
                <li>• Nombre y apellidos</li>
                <li>• Dirección de correo electrónico</li>
                <li>• Número de teléfono</li>
                <li>• Empresa y cargo</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2">Información técnica:</h4>
              <ul className="space-y-1 text-muted-foreground ml-4">
                <li>• Dirección IP</li>
                <li>• Tipo de navegador y versión</li>
                <li>• Información del dispositivo</li>
                <li>• Páginas visitadas y tiempo de permanencia</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5 text-primary" />
              2. Cómo utilizamos su información
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Responder a sus consultas y solicitudes de información</li>
              <li>• Proporcionar nuestros servicios de desarrollo y consultoría</li>
              <li>• Mejorar nuestro sitio web y servicios</li>
              <li>• Enviar comunicaciones relacionadas con nuestros servicios</li>
              <li>• Cumplir con obligaciones legales y reglamentarias</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-primary" />
              3. Protección de datos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger 
              su información personal contra acceso no autorizado, alteración, divulgación o destrucción.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Cifrado SSL/TLS para todas las comunicaciones</li>
              <li>• Acceso restringido a datos personales</li>
              <li>• Copias de seguridad regulares y seguras</li>
              <li>• Monitoreo continuo de seguridad</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5 text-primary" />
              4. Compartir información
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              No vendemos, alquilamos ni compartimos su información personal con terceros, 
              excepto en las siguientes circunstancias:
            </p>
            <ul className="space-y-2 text-muted-foreground mt-4">
              <li>• Con su consentimiento explícito</li>
              <li>• Para cumplir con obligaciones legales</li>
              <li>• Con proveedores de servicios que nos ayudan a operar nuestro negocio</li>
              <li>• En caso de fusión, adquisición o venta de activos</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>5. Sus derechos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Bajo el RGPD, usted tiene los siguientes derechos:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• <strong>Acceso:</strong> Solicitar una copia de sus datos personales</li>
              <li>• <strong>Rectificación:</strong> Corregir datos inexactos o incompletos</li>
              <li>• <strong>Supresión:</strong> Solicitar la eliminación de sus datos</li>
              <li>• <strong>Portabilidad:</strong> Recibir sus datos en formato estructurado</li>
              <li>• <strong>Oposición:</strong> Oponerse al procesamiento de sus datos</li>
              <li>• <strong>Limitación:</strong> Restringir el procesamiento de sus datos</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>6. Retención de datos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Conservamos su información personal solo durante el tiempo necesario para los 
              fines para los que se recopiló, o según lo requiera la ley. Los datos de contacto 
              se conservan durante un máximo de 3 años desde el último contacto.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              7. Contacto
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Si tiene preguntas sobre esta política de privacidad o desea ejercer sus derechos, 
              contáctenos:
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p><strong>Email:</strong> albertguiver@gmail.com</p>
              <p><strong>Teléfono:</strong> +34 611 456 367</p>
              <p><strong>Dirección:</strong> Sevilla, España</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Separator className="my-8" />

      <div className="text-center text-sm text-muted-foreground">
        <p>
          Esta política de privacidad puede ser actualizada periódicamente. 
          Le notificaremos de cualquier cambio significativo.
        </p>
      </div>
    </div>
  );
}