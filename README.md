🛒 Tatoodenda FrontEnd
TatooDenda es una plataforma e-commerce desarrollada con Angular y MySQL. Este repositorio contiene el frontend de la aplicación, orientado a la gestión de productos, pedidos y usuarios. El código está enfocado en la claridad, buenas prácticas y en usos reales de negocios, ideal para aprender Angular a nivel profesional.

Índice
Características principales

Arquitectura y estructura del proyecto

Requisitos previos

Instalación y puesta en marcha

Variables de entorno

Comandos útiles

Guía de desarrollo

Convenciones de commits

Preguntas frecuentes (FAQ)

Licencia

Características principales
Cliente SPA en Angular 16+ con TypeScript estricto

Comunicación con backend vía API REST

Gestión de productos, pedidos y usuarios

Autenticación JWT segura

Interfaz moderna con SCSS y componentes reutilizables

Multi-idioma listo para ampliaciones

Estructura escalable para nuevos módulos

Arquitectura y estructura del proyecto
La estructura del proyecto sigue las mejores prácticas Angular. Los principales directorios son:

text
src/
 ├── app/
 │    ├── components/   // Componentes visuales principales (ej: product-list, checkout)
 │    ├── services/     // Servicios compartidos: pedidos, autenticación, usuarios
 │    ├── models/       // Interfaces y tipos TypeScript para datos
 │    ├── guards/       // Guards de rutas, ej: autenticación
 │    ├── pages/        // Vistas de alto nivel, ej: dashboard, historial
 │    └── utils/        // Funciones utilitarias y helpers
 ├── assets/            // Recursos estáticos: imágenes, estilos globales
 ├── environments/      // Configuración por entorno (dev/production)
 ├── styles/            // Archivos SCSS globales
 └── index.html         // Punto de entrada único
Tipo de desarrollo: FrontEnd SPA en Angular, desacoplado de Backend pero integrado mediante servicios REST.​

Gestión de estado: Services con Observables y Subject para actualizaciones reactivas de datos.​

Requisitos previos
Node.js (v18 o superior recomendado)

Angular CLI (npm install -g @angular/cli)

Git para clonar el repositorio

Acceso a backend compatible (API REST, por ejemplo Node + MySQL)

Instalación y puesta en marcha
Clona el repositorio

bash
git clone https://github.com/jsersan/tatoodenda-frontend.git
cd tatoodenda-frontend
Instala dependencias

bash
npm install
Copia y configura el archivo de entorno

bash
cp src/environments/environment.example.ts src/environments/environment.ts
# Edita el endpoint de la API y valores necesarios
Levanta la aplicación en modo desarrollo

bash
ng serve
# Por defecto corre en http://localhost:4200
Variables de entorno
Modifica src/environments/environment.ts para definir el endpoint del backend, modalidad debug, claves externas, etc:

typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api'
};
Usa environment.production para builds productivos.

Cambia apiUrl según la IP donde esté el backend.

Comandos útiles
ng serve : Ejecuta servidor local con hot-reload

ng build --configuration production : Compila assets para producción

ng test : Ejecuta tests unitarios

ng generate component <nombre> : Crea nuevo componente

ng generate service <nombre> : Crea nuevo servicio

Guía de desarrollo
Usa TypeScript con tipado estricto y comentarios claros.​

Mantén los componentes pequeños y reutilizables.

Utiliza Services para lógica de negocio y llamadas API.

Aplica RxJS y Observables para manejo asíncrono.

Separación por módulos: cada funcionalidad fuera del app.module.ts.

Preferir SCSS para estilos modulares.

Añade tests unitarios junto al código cuando agregues funciones complejas.

Convenciones de commits
Adopta los mensajes de commit convencionales para mantener histórico y cambios claros:

✨ feat: Nueva funcionalidad

🐛 fix: Corrección de bug

📚 docs: Actualización de documentación

💄 style: Cambios de formato/estilos

♻️ refactor: Refactorización de código

⚡ perf: Mejora de rendimiento

✅ test: Añadir/ajustar tests

🔧 chore: Tareas de mantenimiento

Ejemplo:

bash
git commit -m "✨ feat: Añade filtro por categoría al listado de productos"
Preguntas frecuentes (FAQ)
¿Es necesario el backend para desarrollo?

Sí, la app requiere el backend REST para autenticación y gestión de pedidos.​

¿Cómo añado nuevos idiomas?

Extiende el módulo de internacionalización (app/i18n) para nuevos idiomas y textos.

¿Cómo gestiono usuarios?

El servicio auth.service.ts gestiona login/logout y estado del usuario autenticado.

¿Dónde reporto errores?

Crea un issue en el repositorio GitHub.​

Licencia
Este proyecto está bajo licencia MIT. Puedes usar, modificar y redistribuir el código con atribución.

Para cualquier consulta adicional, abre un "Issue" o contribuye con tus ideas usando un "Pull Request".

Así tu README será didáctico, completo y profesional, ideal para onboarding de desarrolladores y presentación pública del proyecto.​

Me lo das en formato para hacer un copia y pega en github?

Ayuda a mejorar nuestro producto
Hemos hecho dos versiones de esta respuesta. ¿Cuál prefieres?
text
# 🛒 Tatoodenda FrontEnd

TatooDenda es una plataforma **e-commerce** desarrollada con Angular y MySQL. Este repositorio contiene el *frontend* de la aplicación, orientado a la gestión de productos, pedidos y usuarios. El código está enfocado en la claridad, buenas prácticas y en usos reales de negocios, ideal para aprender Angular a nivel profesional.

---

## Índice

- [Características principales](#características-principales)
- [Arquitectura y estructura del proyecto](#arquitectura-y-estructura-del-proyecto)
- [Requisitos previos](#requisitos-previos)
- [Instalación y puesta en marcha](#instalación-y-puesta-en-marcha)
- [Variables de entorno](#variables-de-entorno)
- [Comandos útiles](#comandos-útiles)
- [Guía de desarrollo](#guía-de-desarrollo)
- [Convenciones de commits](#convenciones-de-commits)
- [Preguntas frecuentes (FAQ)](#preguntas-frecuentes-faq)
- [Licencia](#licencia)

---

## Características principales

- Cliente SPA en Angular 16+ con TypeScript estricto
- Comunicación con backend vía API REST
- Gestión de productos, pedidos y usuarios
- Autenticación JWT segura
- Interfaz moderna con **SCSS** y componentes reutilizables
- Multi-idioma listo para ampliaciones
- Estructura escalable para nuevos módulos

---

## Arquitectura y estructura del proyecto

La estructura del proyecto sigue las mejores prácticas Angular. Los principales directorios son:

src/
├── app/
│ ├── components/ // Componentes visuales principales (ej: product-list, checkout)
│ ├── services/ // Servicios compartidos: pedidos, autenticación, usuarios
│ ├── models/ // Interfaces y tipos TypeScript para datos
│ ├── guards/ // Guards de rutas, ej: autenticación
│ ├── pages/ // Vistas de alto nivel, ej: dashboard, historial
│ └── utils/ // Funciones utilitarias y helpers
├── assets/ // Recursos estáticos: imágenes, estilos globales
├── environments/ // Configuración por entorno (dev/production)
├── styles/ // Archivos SCSS globales
└── index.html // Punto de entrada único

text
- **Tipo de desarrollo:** FrontEnd SPA en Angular, desacoplado de Backend pero integrado mediante servicios REST.
- **Gestión de estado:** Services con Observables y Subject para actualizaciones reactivas de datos.

---

## Requisitos previos

- Node.js (v18 o superior recomendado)
- Angular CLI (`npm install -g @angular/cli`)
- Git para clonar el repositorio
- Acceso a backend compatible (API REST, por ejemplo Node + MySQL)

---

## Instalación y puesta en marcha

1. Clona el repositorio

    ```
    git clone https://github.com/jsersan/tatoodenda-frontend.git
    cd tatoodenda-frontend
    ```

2. Instala dependencias

    ```
    npm install
    ```

3. Copia y configura el archivo de entorno

    ```
    cp src/environments/environment.example.ts src/environments/environment.ts
    # Edita el endpoint de la API y valores necesarios
    ```

4. Levanta la aplicación en modo desarrollo

    ```
    ng serve
    # Por defecto corre en http://localhost:4200
    ```

---

## Variables de entorno

Modifica `src/environments/environment.ts` para definir el endpoint del backend, modalidad debug, claves externas, etc:

export const environment = {
production: false,
apiUrl: 'http://localhost:3000/api'
};

text
- Usa `environment.production` para builds productivos.
- Cambia `apiUrl` según la IP donde esté el backend.

---

## Comandos útiles

- `ng serve` : Ejecuta servidor local con hot-reload
- `ng build --configuration production` : Compila assets para producción
- `ng test` : Ejecuta tests unitarios
- `ng generate component <nombre>` : Crea nuevo componente
- `ng generate service <nombre>` : Crea nuevo servicio

---

## Guía de desarrollo

- Usa **TypeScript** con tipado estricto y comentarios claros.
- Mantén los **componentes pequeños y reutilizables**.
- Utiliza _Services_ para lógica de negocio y llamadas API.
- Aplica **RxJS** y Observables para manejo asíncrono.
- Separación por módulos: cada funcionalidad fuera del `app.module.ts`.
- Preferir _SCSS_ para estilos modulares.
- Añade tests unitarios junto al código cuando agregues funciones complejas.

---

## Convenciones de commits

Adopta los mensajes de commit convencionales para mantener histórico y cambios claros:

- `✨ feat:` Nueva funcionalidad
- `🐛 fix:` Corrección de bug
- `📚 docs:` Actualización de documentación
- `💄 style:` Cambios de formato/estilos
- `♻️ refactor:` Refactorización de código
- `⚡ perf:` Mejora de rendimiento
- `✅ test:` Añadir/ajustar tests
- `🔧 chore:` Tareas de mantenimiento

Ejemplo:
git commit -m "✨ feat: Añade filtro por categoría al listado de productos"

text

---

## Preguntas frecuentes (FAQ)

**¿Es necesario el backend para desarrollo?**  
> Sí, la app requiere el backend REST para autenticación y gestión de pedidos.

**¿Cómo añado nuevos idiomas?**  
> Extiende el módulo de internacionalización (`app/i18n`) para nuevos idiomas y textos.

**¿Cómo gestiono usuarios?**  
> El servicio `auth.service.ts` gestiona login/logout y estado del usuario autenticado.

**¿Dónde reporto errores?**  
> Crea un issue en el [repositorio GitHub](https://github.com/jsersan/tatoodenda-frontend/issues).

---

## Licencia

Este proyecto está bajo licencia **MIT**. Puedes usar, modificar y redistribuir el código con atribución.

---

Para cualquier consulta adicional, abre un "Issue" o contribuye con tus ideas usando un "Pull Request".
