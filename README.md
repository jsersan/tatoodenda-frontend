<div align="center">

# 🎨 TatooDenda - E-Commerce Platform

### Frontend SPA desarrollado con Angular & TypeScript

[![Angular](https://img.shields.io/badge/Angular-16+-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

[Demo](#) • [Documentación](#) • [Reportar Bug](https://github.com/jsersan/tatoodenda-frontend/issues) • [Solicitar Feature](https://github.com/jsersan/tatoodenda-frontend/issues)

</div>

---

## 📋 Tabla de Contenidos

- [Sobre el Proyecto](#-sobre-el-proyecto)
- [Características Principales](#-características-principales)
- [Stack Tecnológico](#-stack-tecnológico)
- [Arquitectura](#️-arquitectura)
- [Instalación](#-instalación)
- [Configuración](#️-configuración)
- [Comandos Disponibles](#-comandos-disponibles)
- [Guía de Desarrollo](#-guía-de-desarrollo)
- [Convenciones de Código](#-convenciones-de-código)
- [Contribuir](#-contribuir)
- [FAQ](#-faq)
- [Licencia](#-licencia)
- [Contacto](#-contacto)

---

## 🚀 Sobre el Proyecto

**TatooDenda** es una plataforma e-commerce completa y moderna orientada a la gestión profesional de productos, pedidos y usuarios. Este repositorio contiene el **frontend** desarrollado como Single Page Application (SPA) con Angular.

### ¿Por qué TatooDenda?

- ✅ **Código limpio**: Siguiendo las mejores prácticas de Angular y TypeScript
- ✅ **Arquitectura escalable**: Preparado para crecer con tu negocio
- ✅ **Componentes reutilizables**: Desarrollo eficiente y mantenible
- ✅ **Seguridad robusta**: Autenticación JWT implementada
- ✅ **Responsive design**: Funciona perfectamente en cualquier dispositivo

---

## ✨ Características Principales

<table>
  <tr>
    <td align="center">🛍️</td>
    <td><strong>Gestión de Productos</strong><br/>Catálogo completo con búsqueda y filtros avanzados</td>
  </tr>
  <tr>
    <td align="center">📦</td>
    <td><strong>Sistema de Pedidos</strong><br/>Proceso de checkout optimizado y seguimiento de pedidos</td>
  </tr>
  <tr>
    <td align="center">👥</td>
    <td><strong>Gestión de Usuarios</strong><br/>Registro, autenticación y perfiles de usuario</td>
  </tr>
  <tr>
    <td align="center">🔐</td>
    <td><strong>Autenticación JWT</strong><br/>Sistema de seguridad robusto y tokens persistentes</td>
  </tr>
  <tr>
    <td align="center">🎨</td>
    <td><strong>UI Moderna</strong><br/>Interfaz atractiva construida con SCSS personalizado</td>
  </tr>
  <tr>
    <td align="center">🌍</td>
    <td><strong>Multi-idioma Ready</strong><br/>Preparado para internacionalización (i18n)</td>
  </tr>
</table>

---

## 🛠️ Stack Tecnológico

### Core
- **[Angular 16+](https://angular.io/)** - Framework principal
- **[TypeScript 5.0+](https://www.typescriptlang.org/)** - Lenguaje de programación
- **[RxJS](https://rxjs.dev/)** - Programación reactiva
- **[SCSS](https://sass-lang.com/)** - Preprocesador CSS

### Herramientas
- **[Angular CLI](https://angular.io/cli)** - Herramienta de desarrollo
- **[Node.js 18+](https://nodejs.org/)** - Entorno de ejecución
- **[npm](https://www.npmjs.com/)** - Gestor de paquetes

---

## 🏗️ Arquitectura

La estructura del proyecto sigue las **mejores prácticas de Angular** y está organizada de forma modular:

tatoodenda-frontend/
│
├── src/
│ ├── app/
│ │ ├── components/ # Componentes reutilizables
│ │ ├── services/ # Servicios de negocio
│ │ ├── models/ # Interfaces y tipos
│ │ ├── guards/ # Guards de rutas
│ │ ├── pages/ # Páginas principales
│ │ └── utils/ # Utilidades y helpers
│ │
│ ├── assets/ # Recursos estáticos
│ ├── environments/ # Configuración por entorno
│ └── styles/ # Estilos globales
│
├── angular.json
├── package.json
├── tsconfig.json
└── README.md


### Patrón de Arquitectura

- **Componentes** → Capa de presentación (UI)  
- **Services** → Lógica de negocio y comunicación con API  
- **Models** → Tipos e interfaces  
- **Guards** → Control de acceso  
- **Observables** → Estado reactivo  

---

## 📦 Instalación

### Requisitos Previos
- Node.js v18+  
- npm  
- Angular CLI v16+  
- Git  

### Pasos

```bash
# Clonar repositorio
git clone https://github.com/jsersan/tatoodenda-frontend.git
cd tatoodenda-frontend

# Instalar dependencias
npm install

# Configurar entorno
cp src/environments/environment.example.ts src/environments/environment.ts
nano src/environments/environment.ts

# Iniciar servidor
ng serve

Abre http://localhost:4200

⚙️ Configuración

src/environments/environment.ts:

export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
};

src/environments/environment.prod.ts:

export const environment = {
  production: true,
  apiUrl: 'https://api.tatoodenda.com',
};

| Comando                               | Descripción             |
| ------------------------------------- | ----------------------- |
| `ng serve`                            | Inicia servidor local   |
| `ng build`                            | Compila el proyecto     |
| `ng build --configuration production` | Build optimizado        |
| `ng test`                             | Ejecuta tests unitarios |
| `ng e2e`                              | Tests end-to-end        |
| `ng lint`                             | Análisis de código      |
| `ng generate component <name>`        | Crea un componente      |
| `ng generate service <name>`          | Crea un servicio        |
| `ng generate module <name>`           | Crea un módulo          |


Ejemplo de componente:

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

Convenciones de código:

Commits Semánticos

| Tipo       | Emoji | Descripción         | Ejemplo                                      |
| ---------- | ----- | ------------------- | -------------------------------------------- |
| `feat`     | ✨     | Nueva funcionalidad | `✨ feat: añade filtro de búsqueda avanzada`|
| `fix`      | 🐛    | Corrección de bug   | `🐛 fix: corrige error en cálculo de total`  |
| `docs`     | 📚    | Documentación       | `📚 docs: actualiza guía de instalación`     |
| `style`    | 💄    | Estilo / formato    | `💄 style: mejora estilos del header`        |
| `refactor` | ♻️    | Refactorización     | `♻️ refactor: simplifica lógica de checkout` |
| `perf`     | ⚡     | Rendimiento         | `⚡ perf: optimiza carga de imágenes`         |
| `test`     | ✅     | Tests               | `✅ test: añade tests para OrderService`    |
| `chore`    | 🔧    | Mantenimiento       | `🔧 chore: actualiza dependencias`           |


Ejemplo:

git commit -m "✨ feat: implementa carrito de compras persistente"

🤝 Contribuir

Fork del proyecto

Crea una rama: git checkout -b feature/AmazingFeature

Commit: git commit -m '✨ feat: Add amazing feature'

Push: git push origin feature/AmazingFeature

Pull Request
