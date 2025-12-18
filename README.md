# 🎨 Tatoodenda - Frontend

> Tienda online de piercings y accesorios para tatuajes

[![Angular](https://img.shields.io/badge/Angular-19-red.svg)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Status](https://img.shields.io/badge/status-Production-success.svg)](https://www.txemaserrano.com/angular/tatoodenda/)

## 📖 Descripción

**Tatoodenda** es una aplicación web de e-commerce especializada en la venta de piercings, túneles, plugs y accesorios para tatuajes. Desarrollada con **Angular 19**, ofrece una experiencia de compra moderna, rápida y responsive.

### ✨ Características principales

- 🛒 **Carrito de compras** persistente con localStorage
- 🔐 **Sistema de autenticación** JWT con roles (cliente/admin)
- 📦 **Gestión de pedidos** completa con historial
- 🎨 **Diseño responsive** adaptado a todos los dispositivos
- 🔍 **Búsqueda avanzada** de productos por categorías
- 👤 **Perfiles de usuario** con gestión de datos personales
- 📊 **Panel de administración** para gestión de productos y pedidos
- ⚡ **Optimización de rendimiento** con lazy loading y caching
- 🌐 **Wake-up automático** del backend (Render.com)

## 🚀 Demo

- **Producción**: [https://www.txemaserrano.com/angular/tatoodenda/](https://www.txemaserrano.com/angular/tatoodenda/)
- **Backend API**: [https://tatoodenda-backend.onrender.com](https://tatoodenda-backend.onrender.com)

## 🛠️ Tecnologías

### Core
- **Angular 19** - Framework principal
- **TypeScript 5.x** - Lenguaje de programación
- **RxJS** - Programación reactiva
- **Angular Router** - Navegación SPA

### UI/UX
- **CSS3** con SCSS - Estilos personalizados
- **Responsive Design** - Mobile-first approach
- **Custom Components** - Componentes reutilizables

### Backend Integration
- **HttpClient** - Comunicación con API REST
- **JWT** - Autenticación basada en tokens
- **Interceptors** - Manejo global de peticiones HTTP

### Herramientas
- **Git** - Control de versiones
- **VS Code** - Editor de código
- **Angular CLI** - Herramienta de desarrollo

## 📋 Prerequisitos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (v18 o superior)
- [npm](https://www.npmjs.com/) (v9 o superior)
- [Angular CLI](https://angular.io/cli) (v19)

```bash
# Verificar versiones
node --version
npm --version
ng version
```

## 🔧 Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/jsersan/tatoodenda-frontend.git
cd tatoodenda-frontend
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Crea los archivos de configuración en `src/environments/`:

**environment.ts** (desarrollo):
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api'
};
```

**environment.prod.ts** (producción):
```typescript
export const environment = {
  production: true,
  apiUrl: 'https://tatoodenda-backend.onrender.com/api'
};
```

### 4. Ejecutar en modo desarrollo

```bash
npm start
# o
ng serve
```

La aplicación estará disponible en `http://localhost:4200`

## 📦 Build para producción

```bash
# Build optimizado
npm run build
# o
ng build --configuration production

# Los archivos compilados estarán en dist/
```

## 📁 Estructura del proyecto

```
tatoodenda-frontend/
├── src/
│   ├── app/
│   │   ├── components/          # Componentes de la aplicación
│   │   │   ├── admin/          # Panel de administración
│   │   │   ├── cart/           # Carrito de compras
│   │   │   ├── checkout/       # Proceso de pago
│   │   │   ├── home/           # Página principal
│   │   │   ├── login-popup/    # Modal de inicio de sesión
│   │   │   ├── product/        # Listado y detalle de productos
│   │   │   ├── shared/         # Componentes compartidos
│   │   │   └── user/           # Perfil de usuario
│   │   ├── guards/             # Route guards (auth)
│   │   ├── interceptors/       # HTTP interceptors
│   │   ├── models/             # Interfaces y modelos
│   │   ├── pipes/              # Pipes personalizados
│   │   ├── services/           # Servicios (API, auth, etc.)
│   │   ├── app-routing.module.ts
│   │   └── app.module.ts
│   ├── assets/                 # Recursos estáticos
│   │   └── images/            # Imágenes y backgrounds
│   ├── environments/           # Configuración de entornos
│   └── styles.scss            # Estilos globales
├── angular.json               # Configuración de Angular
├── package.json              # Dependencias del proyecto
├── tsconfig.json            # Configuración de TypeScript
└── README.md               # Este archivo
```

## 🔐 Autenticación

La aplicación utiliza **JWT (JSON Web Tokens)** para la autenticación:

1. El usuario inicia sesión con email/contraseña
2. El backend devuelve un token JWT
3. El token se almacena en `localStorage`
4. Todas las peticiones autenticadas incluyen el token en el header `Authorization`

### Roles de usuario

- **Cliente**: Puede comprar productos y gestionar su perfil
- **Admin**: Acceso completo al panel de administración

## 🛒 Funcionalidades principales

### Para clientes

- ✅ Navegación por categorías de productos
- ✅ Búsqueda de productos
- ✅ Añadir/eliminar productos del carrito
- ✅ Proceso de checkout completo
- ✅ Historial de pedidos
- ✅ Gestión de perfil personal

### Para administradores

- ✅ CRUD completo de productos
- ✅ Gestión de categorías
- ✅ Visualización de todos los pedidos
- ✅ Actualización de estados de pedidos
- ✅ Gestión de usuarios

## 🎨 Componentes destacados

### ApiWakeUpService
Despierta automáticamente el backend de Render.com que entra en hibernación después de 15 minutos de inactividad.

```typescript
// Uso en app.component.ts
this.apiWakeUpService.aggressiveWakeUp().subscribe({
  next: (success) => console.log('Backend despierto'),
  error: (error) => console.error('Error wake-up')
});
```

### CartService
Gestiona el carrito de compras con persistencia en localStorage.

```typescript
// Añadir producto al carrito
this.cartService.addToCart(producto, cantidad);

// Obtener items del carrito
this.cartService.getCartItems();

// Calcular total
this.cartService.getTotal();
```

### AuthService
Maneja la autenticación y gestión de sesiones.

```typescript
// Login
this.authService.login(email, password).subscribe();

// Verificar si está autenticado
this.authService.isAuthenticated();

// Obtener usuario actual
this.authService.getCurrentUser();
```

## 🔒 Guards

### AuthGuard
Protege rutas que requieren autenticación:

```typescript
{
  path: 'checkout',
  component: CheckoutComponent,
  canActivate: [AuthGuard]
}
```

### AdminGuard
Restringe acceso solo a administradores:

```typescript
{
  path: 'admin',
  component: AdminComponent,
  canActivate: [AdminGuard]
}
```

## 🚨 Manejo de errores

Los errores HTTP se manejan globalmente mediante `ErrorInterceptor`:

- **401 Unauthorized**: Redirige al login
- **403 Forbidden**: Muestra mensaje de permisos insuficientes
- **404 Not Found**: Página de error 404
- **500 Server Error**: Mensaje de error del servidor

## 📊 Optimizaciones

- **Lazy Loading**: Carga módulos bajo demanda
- **HTTP Caching**: Cache de peticiones frecuentes
- **Compression**: Gzip en producción
- **Image Optimization**: Imágenes optimizadas y lazy loading
- **Code Splitting**: División automática del bundle

## 🧪 Testing

```bash
# Ejecutar tests unitarios
npm test
# o
ng test

# Ejecutar tests con cobertura
ng test --code-coverage
```

## 📝 Scripts disponibles

```bash
npm start          # Servidor de desarrollo
npm run build      # Build de producción
npm test           # Ejecutar tests
npm run lint       # Linter de código
```

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Txema Serrano**
- GitHub: [@jsersan](https://github.com/jsersan)
- Email: admin@txemaserrano.com, jsersan@gmail.com
- Website: [txemaserrano.com](https://www.txemaserrano.com)

## 🙏 Agradecimientos

- [Angular Team](https://angular.io/)
- [Render.com](https://render.com/) por el hosting del backend
- Comunidad de desarrolladores de Angular

## 📞 Soporte

Si tienes preguntas o problemas:
- 🐛 [Reportar un bug](https://github.com/jsersan/tatoodenda-frontend/issues)
- 💡 [Solicitar una feature](https://github.com/jsersan/tatoodenda-frontend/issues)
- 📧 Email: contacto@txemaserrano.com

---

⭐ Si este proyecto te ha sido útil, considera darle una estrella en GitHub

**Desarrollado con ❤️ usando Angular**
