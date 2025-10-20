# 🚀 Instrucciones de Instalación y Despliegue - MHE

## ⚡ Inicio Rápido

### 1. Instalar Node.js
Si no tienes Node.js instalado, descárgalo desde: https://nodejs.org/
(Recomendado: versión LTS - 18.x o superior)

### 2. Instalar Dependencias

Abre una terminal en la carpeta del proyecto y ejecuta:

```bash
npm install
```

Esto instalará todas las dependencias necesarias (React, Vite, etc.)

### 3. Ejecutar en Desarrollo

Para ver el sitio web en tu navegador local:

```bash
npm run dev
```

El sitio estará disponible en: **http://localhost:5173**

La página se recargará automáticamente cuando hagas cambios en el código.

---

## 📦 Generar Versión para Producción

Cuando estés listo para subir el sitio al servidor:

```bash
npm run build
```

Este comando creará una carpeta `dist/` con todos los archivos optimizados.

---

## 🌐 Subir al Servidor

### Opción A: Servidor Web Propio (Hosting tradicional)

1. Ejecuta `npm run build`
2. Sube **TODO el contenido de la carpeta `dist/`** a tu servidor mediante FTP/SFTP
3. Si usas Apache, asegúrate de que el archivo `.htaccess` esté incluido
4. Configura el dominio para que apunte a la carpeta donde subiste los archivos

### Opción B: Netlify (Recomendado - Gratis y Fácil)

1. Crea una cuenta en https://netlify.com
2. Arrastra la carpeta `dist/` directamente a Netlify
3. Tu sitio estará online en minutos con HTTPS incluido
4. Puedes configurar tu dominio personalizado

### Opción C: Vercel (Alternativa - También Gratis)

1. Crea una cuenta en https://vercel.com
2. Instala Vercel CLI: `npm install -g vercel`
3. Ejecuta: `vercel` en la carpeta del proyecto
4. Sigue las instrucciones en pantalla

---

## 📧 Configurar el Formulario de Contacto

El formulario actualmente simula el envío. Para que funcione de verdad:

### Opción 1: Formspree (Más Fácil)

1. Visita https://formspree.io y crea una cuenta gratuita
2. Crea un nuevo formulario y copia tu ID
3. Edita `src/components/Contact.jsx`
4. Reemplaza la función `handleSubmit` con:

```jsx
const handleSubmit = async (e) => {
  e.preventDefault()
  setFormStatus('sending')
  
  try {
    const response = await fetch('https://formspree.io/f/TU_ID_AQUI', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    
    if (response.ok) {
      setFormStatus('success')
      setFormData({
        nombre: '',
        empresa: '',
        email: '',
        telefono: '',
        asunto: '',
        mensaje: ''
      })
    }
  } catch (error) {
    setFormStatus('error')
  }
}
```

### Opción 2: EmailJS

1. Visita https://www.emailjs.com
2. Sigue su guía de configuración
3. Es gratuito hasta 200 emails/mes

---

## 🎨 Personalización

### Cambiar Colores

Edita `src/index.css` en las variables CSS:

```css
:root {
  --primary-blue: #1e40af;      /* Color principal */
  --primary-blue-dark: #1e3a8a; /* Color hover */
  --primary-blue-light: #3b82f6; /* Color claro */
  /* ... otros colores ... */
}
```

### Cambiar Contenidos

- **Quiénes Somos:** `src/components/About.jsx`
- **Servicios:** `src/components/Services.jsx`
- **Beneficios:** `src/components/Benefits.jsx`
- **Casos de Éxito:** `src/components/CaseStudies.jsx`
- **Contacto:** `src/components/Contact.jsx`

### Cambiar Imágenes

Puedes añadir imágenes en la carpeta `public/` y referenciarlas en los componentes.

---

## 🔧 Problemas Comunes

### Error: "npm: command not found"
- Necesitas instalar Node.js primero

### El sitio no se ve bien en el servidor
- Asegúrate de subir TODO el contenido de `dist/`, no los archivos `src/`
- Verifica que el archivo `.htaccess` esté incluido (para Apache)

### El formulario no funciona
- Por defecto simula el envío. Necesitas configurar Formspree o EmailJS

### Los cambios no se reflejan
- En desarrollo: La página debería actualizarse automáticamente
- En producción: Ejecuta `npm run build` de nuevo y sube los archivos actualizados

---

## 📞 Datos de Contacto Actuales

Recuerda actualizar estos datos en el código si es necesario:

- **Teléfono:** +34 XXX XXX XXX (actualizar en Contact.jsx y Footer.jsx)
- **Email:** info@mhe-europe.com
- **Dirección:** C/ Riera, 24 – 08830 Sant Boi de Llobregat

---

## ✅ Checklist Final Antes de Subir

- [ ] Ejecutar `npm run build`
- [ ] Configurar formulario de contacto (Formspree/EmailJS)
- [ ] Actualizar número de teléfono real
- [ ] Verificar todos los textos y contenidos
- [ ] Probar en móvil y desktop
- [ ] Configurar dominio personalizado
- [ ] Añadir Google Analytics (opcional)

---

## 🎯 Próximos Pasos Recomendados

1. **Google Analytics:** Para ver estadísticas de visitas
2. **Google Search Console:** Para aparecer en Google
3. **Certificado SSL:** HTTPS (incluido gratis en Netlify/Vercel)
4. **Backup:** Guarda una copia del código
5. **CDN:** Para mayor velocidad (incluido en Netlify/Vercel)

---

¿Necesitas ayuda? Consulta el archivo `README.md` para más información técnica.

