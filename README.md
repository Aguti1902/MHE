# Materials Handling Europe - Sitio Web Corporativo

Sitio web corporativo para Materials Handling Europe, S.L. - Soluciones integrales de manutención y manejo de materiales.

## 📋 Datos de la Empresa

**MATERIALS HANDLING EUROPE, S.L.**
- **CIF:** B65531022
- **Dirección:** C/ Riera, 24 – 08830 Sant Boi de Llobregat, Barcelona, España
- **Sector:** Manutención industrial y logística

## 🚀 Tecnologías

- **React 18** - Framework principal
- **Vite** - Build tool y dev server
- **CSS3** - Estilos personalizados
- **Responsive Design** - Adaptado a todos los dispositivos

## 📦 Instalación

### Requisitos previos
- Node.js 16.x o superior
- npm o yarn

### Pasos de instalación

1. Instalar dependencias:
```bash
npm install
```

2. Ejecutar en modo desarrollo:
```bash
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

## 🏗️ Build para Producción

Para generar los archivos optimizados para producción:

```bash
npm run build
```

Los archivos se generarán en la carpeta `dist/`.

Para previsualizar la versión de producción localmente:

```bash
npm run preview
```

## 📁 Estructura del Proyecto

```
MHE/
├── public/
│   ├── favicon.svg          # Icono del sitio
│   └── robots.txt           # Configuración para motores de búsqueda
├── src/
│   ├── components/          # Componentes React
│   │   ├── Header.jsx       # Navegación principal
│   │   ├── Hero.jsx         # Sección hero
│   │   ├── About.jsx        # Quiénes somos
│   │   ├── Services.jsx     # Servicios
│   │   ├── Benefits.jsx     # Beneficios
│   │   ├── CaseStudies.jsx  # Casos de éxito
│   │   ├── Contact.jsx      # Formulario de contacto
│   │   └── Footer.jsx       # Pie de página
│   ├── App.jsx              # Componente principal
│   ├── App.css              # Estilos globales de la app
│   ├── index.css            # Estilos base
│   └── main.jsx             # Punto de entrada
├── index.html               # HTML principal con SEO
├── package.json             # Dependencias
├── vite.config.js           # Configuración de Vite
└── README.md                # Este archivo
```

## 🎨 Características del Diseño

- **Colores corporativos:** Azules (#1e40af) y grises
- **Tipografía moderna:** Inter / System fonts
- **100% Responsive:** Adaptado a móvil, tablet y desktop
- **Animaciones suaves:** Transiciones y efectos visuales
- **Navegación fluida:** Scroll suave entre secciones
- **SEO optimizado:** Metadatos y estructura semántica

## 📄 Secciones del Sitio

1. **Hero:** Presentación principal con llamadas a la acción
2. **Quiénes Somos:** Información de la empresa, misión y valores
3. **Servicios:** 6 servicios principales con detalles
4. **Beneficios:** Ventajas competitivas y propuestas de valor
5. **Casos de Éxito:** 4 casos reales de implementaciones
6. **Contacto:** Formulario y datos de contacto

## 🌐 Despliegue

### Opción 1: Servidor Web Tradicional

1. Ejecutar `npm run build`
2. Subir el contenido de la carpeta `dist/` al servidor
3. Configurar el servidor para servir `index.html` en todas las rutas

### Opción 2: Netlify / Vercel

1. Conectar el repositorio
2. Configurar:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Deploy automático

### Opción 3: GitHub Pages

```bash
npm run build
# Subir el contenido de dist/ a la rama gh-pages
```

## 🔧 Configuración del Servidor

Para servidores Apache, añadir `.htaccess` en la carpeta `dist/`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

Para Nginx:

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## 📧 Configuración del Formulario de Contacto

El formulario actualmente simula el envío. Para implementar funcionalidad real:

### Opción 1: Backend propio
Crear un endpoint API para procesar el formulario.

### Opción 2: Servicios de terceros
- **Formspree:** https://formspree.io
- **EmailJS:** https://www.emailjs.com
- **Netlify Forms:** Si se aloja en Netlify

Modificar `src/components/Contact.jsx` según el servicio elegido.

## 📱 SEO y Metadatos

Los metadatos están configurados en `index.html`:
- Title y description optimizados
- Open Graph para redes sociales
- Twitter Cards
- Keywords relevantes
- Favicon incluido

Para cambiar el dominio en `robots.txt` y metadatos, actualizar las URLs correspondientes.

## 🔐 Seguridad

- Sin dependencias con vulnerabilidades conocidas
- Formularios con validación
- Headers de seguridad recomendados para el servidor

## 📞 Soporte

Para cualquier consulta sobre el desarrollo del sitio web, contactar con el equipo de desarrollo.

## 📄 Licencia

© 2024 Materials Handling Europe, S.L. Todos los derechos reservados.

---

**Desarrollado por:** [Tu nombre/empresa]
**Fecha:** Octubre 2024
**Versión:** 1.0.0

