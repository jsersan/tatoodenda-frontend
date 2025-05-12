#!/bin/bash

# Script para verificar y sugerir correcciones en el código Angular
# Busca referencias a carpetas numéricas y sugiere reemplazarlas

# Colores para los mensajes
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Directorio del código fuente
SRC_DIR="./src"

# Buscar referencias a carpetas numéricas en el código
echo -e "${YELLOW}Buscando referencias a carpetas numéricas en el código...${NC}"

# Patrones a buscar
patterns=(
    "assets/images/[0-9]"
    "imagen/[0-9]"
    "carpetaimg.*[0-9]"
    "folder.*[0-9]"
)

# Mapeo de carpetas numéricas a nombres
declare -A FOLDER_MAP
FOLDER_MAP=(
    ["1"]="default" 
    ["2"]="tuneles" 
    ["3"]="tuneles" 
    ["4"]="plugs" 
    ["5"]="escultura" 
    ["6"]="bananas" 
    ["7"]="labrets" 
    ["8"]="barbells" 
    ["9"]="circular_barbells" 
    ["10"]="anillos"
    ["11"]="piercings"
    ["12"]="dilataciones"
)

# Buscar archivos que contengan los patrones
for pattern in "${patterns[@]}"; do
    echo -e "\n${YELLOW}Buscando patrón: $pattern${NC}"
    
    find "$SRC_DIR" -type f -name "*.ts" -o -name "*.html" -o -name "*.css" | xargs grep -l "$pattern" 2>/dev/null | while read -r file; do
        echo -e "${RED}Archivo con referencias numéricas: $file${NC}"
        
        # Mostrar las líneas que contienen los patrones
        grep -n "$pattern" "$file"
        
        echo -e "${YELLOW}Sugerencia: Modifica este archivo para usar nombres de carpetas en lugar de números${NC}"
        
        # Para cada número de carpeta, sugerir el reemplazo
        for num in "${!FOLDER_MAP[@]}"; do
            if grep -q "assets/images/$num/" "$file"; then
                echo -e "${GREEN}Reemplazar 'assets/images/$num/' por 'assets/images/${FOLDER_MAP[$num]}/'${NC}"
            fi
        done
    done
done

echo -e "\n${GREEN}Verificación completada. Revisa manualmente los archivos indicados.${NC}"
