# TatooDenda - Tienda Frontend en Angular

TatooDenda es una aplicación moderna de comercio electrónico construida con Angular, que ofrece una experiencia completa de compra en línea. Este proyecto implementa una tienda online con todas las funcionalidades para la venta de mercancía, con navegación por categorías, listados de productos, carrito de compras y autenticación de usuarios.

## Características

- **Autenticación de Usuario**: Sistema seguro de inicio de sesión y registro con implementación de tokens JWT
- **Gestión de Productos**: Navegación de productos por categoría, funcionalidad de búsqueda y páginas detalladas de productos
- **Carrito de Compras**: Añadir, eliminar y gestionar productos en el carrito
- **Proceso de Compra**: Flujo completo de compra con información de envío
- **Panel de Administración**: Gestión de productos y categorías a través de una interfaz administrativa
- **Diseño Responsivo**: Construido con Bootstrap para una experiencia de usuario adaptable

## Stack Tecnológico

- **Angular 15**: Framework de frontend
- **Bootstrap 5**: Framework CSS para diseño responsivo
- **ng-bootstrap**: Componentes Bootstrap para Angular
- **RxJS**: Programación reactiva con Observables
- **SweetAlert2**: Para notificaciones amigables
- **JWT**: JSON Web Token para autenticación segura

## Estructura del Proyecto

- **Componentes**:
  - **Admin**: Interfaces de gestión de categorías y productos
  - **Cart**: Funcionalidad del carrito de compras
  - **Checkout**: Procesamiento de pedidos
  - **Home**: Página principal con productos destacados
  - **Product**: Listados de productos, detalles y búsqueda
  - **Shared**: Componentes de cabecera, pie de página y navegación
  - **User**: Gestión de autenticación y perfil

- **Servicios**:
  - **Auth**: Autenticación y registro de usuarios
  - **Cart**: Gestión del estado del carrito de compras
  - **Category**: Operaciones de datos de categorías
  - **Order**: Procesamiento y historial de pedidos
  - **Product**: Operaciones de datos de productos

- **Modelos**: Interfaces TypeScript para estructuras de datos
- **Guards**: Protección de rutas para usuarios autenticados y administradores
- **Interceptors**: Interceptores HTTP para manejo de tokens JWT

## Primeros Pasos

### Prerrequisitos

- Node.js (v14 o superior)
- NPM (v6 o superior)
- Angular CLI (v15.0.2)

### Instalación

1. Clonar el repositorio
```bash
git clone https://github.com/tuusuario/tatoodenda-frontend.git
cd tatoodenda-frontend
```

2. Instalar dependencias
```bash
npm install
```

3. Iniciar el servidor de desarrollo
```bash
ng serve
```

4. Abrir el navegador y navegar a `http://localhost:4200/`

### Configuración del Backend

Esta aplicación frontend espera un backend API REST ejecutándose en la URL especificada en los archivos de entorno:

- Desarrollo: `http://localhost:3000/api` (predeterminado en `environment.ts`)
- Producción: `/api` (predeterminado en `environment.prod.ts`)

Ajusta estas configuraciones en los archivos de entorno si tu backend se ejecuta en una ubicación diferente.

## Compilación para Producción

```bash
ng build --configuration production
```

Los artefactos de compilación se almacenarán en el directorio `dist/tatoodenda`.

## Ejecutar Pruebas

```bash
# Pruebas unitarias
ng test

# Pruebas end-to-end
ng e2e
```

## Despliegue

La aplicación está configurada para despliegue a través del proceso de compilación estándar de Angular. Después de compilar para producción, el contenido del directorio `dist/tatoodenda` puede desplegarse en cualquier servidor web estático.

## Contribuir

1. Haz un fork del repositorio
2. Crea tu rama de características (`git checkout -b feature/caracteristica-increible`)
3. Haz commit de tus cambios (`git commit -m 'Añadir alguna característica increíble'`)
4. Haz push a la rama (`git push origin feature/caracteristica-increible`)
5. Abre un Pull Request

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo LICENSE para detalles.

## Agradecimientos

- Al equipo de Angular por el fantástico framework
- Al equipo de Bootstrap por el sistema de diseño responsivo
- A todos los colaboradores que han ayudado a dar forma a este proyecto
# tatoodenda-frontend
# tatoofront
