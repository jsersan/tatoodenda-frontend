#!/bin/bash

# Script para actualizar el método getImagePath en los componentes
# Reemplaza el método actual por uno que use nombres de carpetas

# Colores para los mensajes
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Buscar archivos de componentes que contengan getImagePath
echo -e "${YELLOW}Buscando componentes con método getImagePath...${NC}"

find ./src -type f -name "*.ts" | xargs grep -l "getImagePath" 2>/dev/null | while read -r file; do
    echo -e "${GREEN}Encontrado componente: $file${NC}"
    
    # Crear respaldo
    cp "$file" "${file}.bak"
    echo -e "${YELLOW}Creado respaldo: ${file}.bak${NC}"
    
    # Verificar si el archivo ya contiene la versión actualizada
    if grep -q "const folderMap" "$file"; then
        echo -e "${GREEN}Este archivo ya parece tener un método actualizado. Omitiendo...${NC}"
        continue
    fi
    
    # Intentar reemplazar el método getImagePath
    sed -i '
    /getImagePath.*product.*color/,/}/ c\
  getImagePath(product: Product | null, color?: any): string {\
    if (!product || !product.imagen) {\
      return '"'"'assets/images/default/placeholder.jpg'"'"';\
    }\
    \
    // Usar directamente el nombre de la carpeta\
    const folder = product.carpetaimg || '"'"'default'"'"';\
    \
    // Si se proporciona un color, podría modificar la ruta de la imagen\
    if (color && color.imagen) {\
      return `assets/images/${folder}/${color.imagen}`;\
    }\
    \
    // Construye y retorna la ruta completa\
    return `assets/images/${folder}/${product.imagen}`;\
  }
    ' "$file"
    
    echo -e "${GREEN}Método getImagePath actualizado en $file${NC}"
    echo -e "${YELLOW}Verifica manualmente los cambios para asegurarte de que son correctos.${NC}"
done
