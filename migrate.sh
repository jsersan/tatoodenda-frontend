#!/bin/bash

# Script de Migración de Angular 15 a 19
# Autor: Asistente
# Fecha: 2025

set -e  # Detener en caso de error

echo "🚀 Iniciando migración de Angular 15 a Angular 19"
echo "=================================================="

# Colores para output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Función para verificar Node.js
check_node_version() {
    NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
    echo "📦 Versión de Node.js detectada: $(node -v)"
    
    if [ "$NODE_VERSION" -lt 20 ]; then
        echo -e "${RED}❌ Error: Se requiere Node.js v20.19+ o v22.12+${NC}"
        echo ""
        echo "Por favor, actualiza Node.js:"
        echo "  1. Con nvm: nvm install 22 && nvm use 22"
        echo "  2. O descarga desde: https://nodejs.org/"
        exit 1
    else
        echo -e "${GREEN}✅ Versión de Node.js válida${NC}"
    fi
}

# Función para hacer backup
make_backup() {
    echo ""
    echo "📋 Creando backup..."
    BACKUP_DIR="backup_$(date +%Y%m%d_%H%M%S)"
    mkdir -p "../$BACKUP_DIR"
    cp -r . "../$BACKUP_DIR/"
    echo -e "${GREEN}✅ Backup creado en: ../$BACKUP_DIR${NC}"
}

# Función para limpiar node_modules
clean_dependencies() {
    echo ""
    echo "🧹 Limpiando dependencias antiguas..."
    rm -rf node_modules
    rm -f package-lock.json
    echo -e "${GREEN}✅ Limpieza completada${NC}"
}

# Función para instalar dependencias
install_dependencies() {
    echo ""
    echo "📦 Instalando dependencias..."
    npm install
    echo -e "${GREEN}✅ Dependencias instaladas${NC}"
}

# Función para migrar a una versión específica
migrate_to_version() {
    local VERSION=$1
    echo ""
    echo -e "${YELLOW}🔄 Migrando a Angular $VERSION...${NC}"
    echo "=================================="
    
    ng update @angular/core@$VERSION @angular/cli@$VERSION --force
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ Migración a Angular $VERSION completada${NC}"
        
        # Reinstalar dependencias después de cada migración
        echo "📦 Reinstalando dependencias..."
        npm install
        
        # Compilar para verificar
        echo "🔨 Compilando proyecto..."
        ng build --configuration development
        
        if [ $? -eq 0 ]; then
            echo -e "${GREEN}✅ Compilación exitosa en Angular $VERSION${NC}"
        else
            echo -e "${RED}❌ Error en compilación${NC}"
            exit 1
        fi
    else
        echo -e "${RED}❌ Error en migración a Angular $VERSION${NC}"
        exit 1
    fi
}

# Verificar que estamos en un proyecto Angular
if [ ! -f "angular.json" ]; then
    echo -e "${RED}❌ Error: No se encontró angular.json${NC}"
    echo "Asegúrate de ejecutar este script desde la raíz del proyecto Angular"
    exit 1
fi

# INICIO DEL SCRIPT
echo ""
echo "🔍 Verificando requisitos previos..."

# Verificar versión de Node.js
check_node_version

# Preguntar si hacer backup
read -p "¿Deseas crear un backup antes de continuar? (s/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Ss]$ ]]; then
    make_backup
fi

# Limpiar dependencias
clean_dependencies

# Instalar dependencias actuales
install_dependencies

# MIGRACIÓN INCREMENTAL
echo ""
echo -e "${YELLOW}📊 Plan de migración:${NC}"
echo "  1. Angular 15 → 16"
echo "  2. Angular 16 → 17"
echo "  3. Angular 17 → 18"
echo "  4. Angular 18 → 19"
echo ""
read -p "¿Continuar con la migración? (s/n): " -n 1 -r
echo

if [[ ! $REPLY =~ ^[Ss]$ ]]; then
    echo "Migración cancelada"
    exit 0
fi

# Migrar a Angular 16
migrate_to_version 16

# Migrar a Angular 17
migrate_to_version 17

# Migrar a Angular 18
migrate_to_version 18

# Migrar a Angular 19
migrate_to_version 19

# Actualizar dependencias adicionales
echo ""
echo "📦 Actualizando dependencias adicionales..."
npm install rxjs@7.8.1
npm install zone.js@0.15.0
npm install typescript@5.4.5

# Compilación final
echo ""
echo "🔨 Compilación final de producción..."
ng build --configuration production

if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}✅✅✅ ¡MIGRACIÓN COMPLETADA EXITOSAMENTE! ✅✅✅${NC}"
    echo ""
    echo "📊 Resumen:"
    echo "  - Node.js: $(node -v)"
    echo "  - npm: $(npm -v)"
    echo "  - Angular CLI: $(ng version | grep "Angular CLI" | cut -d':' -f2)"
    echo ""
    echo "🎯 Próximos pasos:"
    echo "  1. Revisar la consola en desarrollo: ng serve"
    echo "  2. Probar todas las funcionalidades críticas"
    echo "  3. Revisar warnings en la compilación"
    echo ""
    echo "📚 Documentación:"
    echo "  - Angular 17: https://blog.angular.io/introducing-angular-v17-4d7033312e4b"
    echo "  - Angular 18: https://blog.angular.io/angular-v18-is-now-available-e79d5ac0affe"
    echo "  - Angular 19: https://blog.angular.io/meet-angular-v19-7b29dfd05b84"
else
    echo -e "${RED}❌ Error en compilación final${NC}"
    exit 1
fi