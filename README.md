# 🚀 Despliegue en Netlify

Esta aplicación fue desplegada utilizando **Netlify**, una plataforma que permite desplegar proyectos frontend de manera sencilla.

## 🔧 Método de despliegue

El despliegue se realizó mediante **GitHub y Netlify**, siguiendo estos pasos:

1. **Repositorio en GitHub**

   - La aplicación se encuentra alojada en un repositorio de GitHub.
   - Netlify está configurado para hacer **deploy automático** en cada `push` a la rama principal.

2. **Configuración en Netlify**

   - Se vinculó el repositorio con Netlify desde el panel de administración.
   - Se configuró la rama `master` como la rama de despliegue.
   - Se estableció el comando de compilación:
     ```sh
     npm run build
     ```
   - Se definió la carpeta de salida `dist`.

3. **Deploy Automático**
   - Cada vez que se realiza un `git push origin master`, Netlify detecta los cambios y genera un nuevo build automáticamente.

## 🔗 Demo

📌 [Memory Challenge](https://melodious-paprenjak-c0a67e.netlify.app/)
