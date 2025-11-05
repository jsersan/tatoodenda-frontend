<div align="center">
🎨 TatooDenda - E-Commerce Platform
Frontend SPA desarrollado con Angular & TypeScript
Angular
TypeScript
SCSS
License: MIT

Demo • Documentación • Reportar Bug • Solicitar Feature

</div>
📋 Tabla de Contenidos
Sobre el Proyecto

Características Principales

Stack Tecnológico

Arquitectura

Instalación

Configuración

Comandos Disponibles

Guía de Desarrollo

Convenciones de Código

Contribuir

FAQ

Licencia

Contacto

🚀 Sobre el Proyecto
TatooDenda es una plataforma e-commerce completa y moderna orientada a la gestión profesional de productos, pedidos y usuarios. Este repositorio contiene el frontend desarrollado como Single Page Application (SPA) con Angular.

¿Por qué TatooDenda?
✅ Código limpio: Siguiendo las mejores prácticas de Angular y TypeScript

✅ Arquitectura escalable: Preparado para crecer con tu negocio

✅ Componentes reutilizables: Desarrollo eficiente y mantenible

✅ Seguridad robusta: Autenticación JWT implementada

✅ Responsive design: Funciona perfectamente en cualquier dispositivo

✨ Características Principales
<table> <tr> <td align="center">🛍️</td> <td><strong>Gestión de Productos</strong><br/>Catálogo completo con búsqueda y filtros avanzados</td> </tr> <tr> <td align="center">📦</td> <td><strong>Sistema de Pedidos</strong><br/>Proceso de checkout optimizado y seguimiento de pedidos</td> </tr> <tr> <td align="center">👥</td> <td><strong>Gestión de Usuarios</strong><br/>Registro, autenticación y perfiles de usuario</td> </tr> <tr> <td align="center">🔐</td> <td><strong>Autenticación JWT</strong><br/>Sistema de seguridad robusto y tokens persistentes</td> </tr> <tr> <td align="center">🎨</td> <td><strong>UI Moderna</strong><br/>Interfaz atractiva construida con SCSS personalizado</td> </tr> <tr> <td align="center">🌍</td> <td><strong>Multi-idioma Ready</strong><br/>Preparado para internacionalización (i18n)</td> </tr> </table>
🛠️ Stack Tecnológico
Core
Angular 16+ - Framework principal

TypeScript 5.0+ - Lenguaje de programación

RxJS - Programación reactiva

SCSS - Preprocesador CSS

Herramientas
Angular CLI - Herramienta de desarrollo

Node.js 18+ - Entorno de ejecución

npm - Gestor de paquetes

🏗️ Arquitectura
La estructura del proyecto sigue las mejores prácticas de Angular y está organizada de forma modular:

text
tatoodenda-frontend/
│
├── src/
│   ├── app/
│   │   ├── components/          # Componentes reutilizables
│   │   │   ├── product-list/
│   │   │   ├── checkout/
│   │   │   └── ...
│   │   │
│   │   ├── services/            # Servicios de negocio
│   │   │   ├── auth.service.ts
│   │   │   ├── order.service.ts
│   │   │   ├── product.service.ts
│   │   │   └── ...
│   │   │
│   │   ├── models/              # Interfaces y tipos
│   │   │   ├── user.model.ts
│   │   │   ├── order.model.ts
│   │   │   └── ...
│   │   │
│   │   ├── guards/              # Guards de rutas
│   │   │   ├── auth.guard.ts
│   │   │   └── ...
│   │   │
│   │   ├── pages/               # Páginas principales
│   │   │   ├── home/
│   │   │   ├── dashboard/
│   │   │   └── ...
│   │   │
│   │   └── utils/               # Utilidades y helpers
│   │
│   ├── assets/                  # Recursos estáticos
│   │   ├── images/
│   │   ├── icons/
│   │   └── ...
│   │
│   ├── environments/            # Configuración por entorno
│   │   ├── environment.ts
│   │   └── environment.prod.ts
│   │
│   └── styles/                  # Estilos globales
│       ├── _variables.scss
│       ├── _mixins.scss
│       └── styles.scss
│
├── angular.json                 # Configuración de Angular
├── package.json                 # Dependencias del proyecto
├── tsconfig.json                # Configuración de TypeScript
└── README.md                    # Este archivo
Patrón de Arquitectura
Componentes: Capa de presentación (UI)

Services: Lógica de negocio y comunicación con API

Models: Definición de tipos y estructuras de datos

Guards: Control de acceso a rutas

Observables: Gestión de estado reactivo

📦 Instalación
Requisitos Previos
Asegúrate de tener instalado:

Node.js (v18 o superior) - Descargar

npm (incluido con Node.js)

Angular CLI (v16+)

Git

Pasos de Instalación
Clona el repositorio

bash
git clone https://github.com/jsersan/tatoodenda-frontend.git
cd tatoodenda-frontend
Instala las dependencias

bash
npm install
Configura las variables de entorno

bash
# Copia el archivo de ejemplo
cp src/environments/environment.example.ts src/environments/environment.ts

# Edita el archivo con tu configuración
nano src/environments/environment.ts
Inicia el servidor de desarrollo

bash
ng serve
Abre tu navegador

Navega a http://localhost:4200/ - La aplicación se recargará automáticamente si cambias algún archivo fuente.

⚙️ Configuración
Variables de Entorno
Edita src/environments/environment.ts:

typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  // Otras configuraciones...
};
Configuración de Producción
Para builds de producción, edita src/environments/environment.prod.ts:

typescript
export const environment = {
  production: true,
  apiUrl: 'https://api.tatoodenda.com',
  // Otras configuraciones...
};
🔧 Comandos Disponibles
Comando	Descripción
ng serve	Inicia servidor de desarrollo en http://localhost:4200
ng build	Compila el proyecto en dist/
ng build --configuration production	Build optimizado para producción
ng test	Ejecuta tests unitarios con Karma
ng e2e	Ejecuta tests end-to-end
ng lint	Analiza el código con ESLint
ng generate component <name>	Genera un nuevo componente
ng generate service <name>	Genera un nuevo servicio
ng generate module <name>	Genera un nuevo módulo
💻 Guía de Desarrollo
Principios de Desarrollo
TypeScript Estricto: Usa tipado fuerte en todo el código

Componentes Pequeños: Mantén componentes enfocados y reutilizables

Services para Lógica: Separa lógica de negocio de la presentación

RxJS y Observables: Usa programación reactiva para datos asíncronos

SCSS Modular: Organiza estilos por componente

Tests Unitarios: Escribe tests para código complejo

Ejemplo de Componente
typescript
import { Component, OnInit } from '@angular/core';
import { ProductService } from '@services/product.service';
import { Product } from '@models/product.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
  }
}
📝 Convenciones de Código
Commits Semánticos
Usamos Conventional Commits para mensajes claros:

Tipo	Emoji	Descripción	Ejemplo
feat	✨	Nueva funcionalidad	✨ feat: añade filtro de búsqueda avanzada
fix	🐛	Corrección de bug	🐛 fix: corrige error en cálculo de total
docs	📚	Documentación	📚 docs: actualiza guía de instalación
style	💄	Formato/estilos	💄 style: mejora estilos del header
refactor	♻️	Refactorización	♻️ refactor: simplifica lógica de checkout
perf	⚡	Mejora de rendimiento	⚡ perf: optimiza carga de imágenes
test	✅	Tests	✅ test: añade tests para OrderService
chore	🔧	Mantenimiento	🔧 chore: actualiza dependencias
Ejemplo de Commit
bash
git commit -m "✨ feat: implementa carrito de compras persistente"
🤝 Contribuir
¡Las contribuciones son bienvenidas! Si deseas colaborar:

Fork el proyecto

Crea una rama para tu feature (git checkout -b feature/AmazingFeature)

Commit tus cambios (git commit -m '✨ feat: Add amazing feature')

Push a la rama (git push origin feature/AmazingFeature)

Abre un Pull Request

Checklist antes de crear PR
 El código compila sin errores

 Has añadido tests si es necesario

 La documentación está actualizada

 Sigues las convenciones de código del proyecto

 Los commits son descriptivos

❓ FAQ
<details> <summary><strong>¿Necesito el backend para desarrollar?</strong></summary>
Sí, esta aplicación requiere el backend REST para funcionar completamente. Puedes encontrar el repositorio del backend aquí.

</details> <details> <summary><strong>¿Cómo añado soporte multi-idioma?</strong></summary>
El proyecto está preparado para i18n. Extiende el módulo de internacionalización en app/i18n añadiendo nuevos archivos de traducción.

</details> <details> <summary><strong>¿Dónde gestiono la autenticación?</strong></summary>
El servicio auth.service.ts gestiona todo lo relacionado con autenticación: login, logout, tokens JWT y estado del usuario.

</details> <details> <summary><strong>¿Cómo reporto un bug?</strong></summary>
Crea un issue en GitHub con una descripción detallada del problema, pasos para reproducirlo y capturas de pantalla si es posible.

</details>
📄 Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.

text
MIT License

Copyright (c) 2025 TatooDenda

Se concede permiso para usar, copiar, modificar y distribuir este software...
📧 Contacto
Desarrollador Principal - @jsersan

Link del Proyecto: https://github.com/jsersan/tatoodenda-frontend

<div align="center">
⭐ ¡Si te gusta este proyecto, dale una estrella!
Desarrollado con ❤️ por jsersan

</div>
