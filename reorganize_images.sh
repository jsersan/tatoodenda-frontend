#!/bin/bash

# Script para reorganizar la estructura de carpetas de imágenes
# Este script crea la estructura de carpetas que espera la aplicación Angular
# y mueve las imágenes existentes a sus ubicaciones correspondientes

# Colores para los mensajes
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Definir la ruta base (ajusta esta ruta a la ubicación de tu carpeta assets)
BASE_PATH="./src/assets"

# Verificar si la carpeta base existe
if [ ! -d "$BASE_PATH" ]; then
    echo -e "${RED}Error: La carpeta $BASE_PATH no existe.${NC}"
    echo "Por favor, ajusta la ruta BASE_PATH en el script a la ubicación correcta de tu carpeta assets."
    exit 1
fi

# Crear la estructura de carpetas necesaria
echo -e "${YELLOW}Creando estructura de carpetas...${NC}"

# Array con los nombres de las carpetas a crear
FOLDERS=("default" "escultura" "tuneles" "plugs" "expanders" "bananas" "labrets" "barbells" "circular_barbells" "anillos")

# Crear las carpetas
for folder in "${FOLDERS[@]}"; do
    mkdir -p "$BASE_PATH/images/$folder"
    echo -e "${GREEN}Carpeta creada: $BASE_PATH/images/$folder${NC}"
done

# Mapeo de carpetas numéricas a carpetas con nombre
declare -A FOLDER_MAP
FOLDER_MAP=( ["1"]="default" ["2"]="tuneles" ["3"]="tuneles" ["4"]="plugs" ["5"]="escultura" ["6"]="bananas" ["7"]="labrets" ["8"]="barbells" ["9"]="circular_barbells" ["10"]="anillos" )

# Función para mover imágenes
move_images() {
    SOURCE_DIR=$1
    TARGET_DIR=$2
    
    if [ -d "$SOURCE_DIR" ]; then
        echo -e "${YELLOW}Moviendo imágenes de $SOURCE_DIR a $TARGET_DIR...${NC}"
        
        # Crear el directorio destino si no existe
        mkdir -p "$TARGET_DIR"
        
        # Encontrar todos los archivos de imagen y moverlos
        find "$SOURCE_DIR" -maxdepth 1 -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.gif" -o -name "*.webp" -o -name "*.svg" \) -exec cp {} "$TARGET_DIR/" \;
        
        # Contar archivos movidos
        COUNT=$(find "$TARGET_DIR" -maxdepth 1 -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.gif" -o -name "*.webp" -o -name "*.svg" \) | wc -l)
        
        echo -e "${GREEN}$COUNT imágenes disponibles en $TARGET_DIR${NC}"
    else
        echo -e "${YELLOW}La carpeta $SOURCE_DIR no existe. Omitiendo...${NC}"
    fi
}

# Mover imágenes de carpetas numeradas a carpetas con nombre
echo -e "${YELLOW}Reorganizando imágenes...${NC}"

for NUM_FOLDER in "${!FOLDER_MAP[@]}"; do
    SOURCE_DIR="$BASE_PATH/images/$NUM_FOLDER"
    TARGET_DIR="$BASE_PATH/images/${FOLDER_MAP[$NUM_FOLDER]}"
    
    move_images "$SOURCE_DIR" "$TARGET_DIR"
done

# Manejar archivos específicos mencionados en tu código
echo -e "${YELLOW}Verificando archivos específicos...${NC}"

# Array de archivos específicos a verificar
SPECIFIC_FILES=(
    "transparente.jpg:default"
    "rosa.jpg:default"
    "placeholder.jpg:default"
    "dorado.jpg:escultura"
    "multicolor.jpg:anillos"
    "negro.jpg:default"
)

# Verificar cada archivo específico
for FILE_INFO in "${SPECIFIC_FILES[@]}"; do
    FILE_NAME="${FILE_INFO%%:*}"
    FOLDER_NAME="${FILE_INFO##*:}"
    TARGET_PATH="$BASE_PATH/images/$FOLDER_NAME/$FILE_NAME"
    
    # Buscar el archivo en todas las carpetas numéricas
    FOUND=false
    for NUM_FOLDER in {1..27}; do
        SOURCE_PATH="$BASE_PATH/images/$NUM_FOLDER/$FILE_NAME"
        if [ -f "$SOURCE_PATH" ]; then
            echo -e "${YELLOW}Encontrado $FILE_NAME en carpeta $NUM_FOLDER${NC}"
            cp "$SOURCE_PATH" "$TARGET_PATH"
            echo -e "${GREEN}Copiado $FILE_NAME a $TARGET_PATH${NC}"
            FOUND=true
            break
        fi
    done
    
    if [ "$FOUND" = false ]; then
        echo -e "${RED}Advertencia: No se encontró $FILE_NAME en ninguna carpeta numérica.${NC}"
        
        # Verificar si hay algún archivo con nombre similar
        for NUM_FOLDER in {1..27}; do
            SIMILAR_FILES=$(find "$BASE_PATH/images/$NUM_FOLDER" -maxdepth 1 -type f -name "*$FILE_NAME*" 2>/dev/null)
            if [ -n "$SIMILAR_FILES" ]; then
                echo -e "${YELLOW}Archivos similares encontrados en carpeta $NUM_FOLDER:${NC}"
                echo "$SIMILAR_FILES"
                
                # Preguntar si desea copiar alguno de estos archivos
                echo -e "${YELLOW}¿Desea copiar manualmente uno de estos archivos? Si es así, ejecute:${NC}"
                echo "cp [RUTA_ORIGEN] $TARGET_PATH"
            fi
        done
    fi
done

# Crear un placeholder por defecto si no existe
DEFAULT_PLACEHOLDER="$BASE_PATH/images/default/placeholder.jpg"
if [ ! -f "$DEFAULT_PLACEHOLDER" ]; then
    echo -e "${YELLOW}No se encontró un archivo placeholder.jpg. Creando uno básico...${NC}"
    # Intentar usar ImageMagick si está instalado
    if command -v convert >/dev/null 2>&1; then
        convert -size 300x300 xc:lightgray -font Arial -pointsize 20 -gravity center -annotate 0 "Imagen no disponible" "$DEFAULT_PLACEHOLDER"
        echo -e "${GREEN}Creado placeholder básico con ImageMagick.${NC}"
    else
        echo -e "${RED}No se pudo crear un placeholder automáticamente. ImageMagick no está instalado.${NC}"
        echo -e "${YELLOW}Por favor, crea manualmente un archivo placeholder.jpg en $DEFAULT_PLACEHOLDER${NC}"
    fi
fi

echo -e "\n${GREEN}¡Reorganización completada!${NC}"
echo -e "${YELLOW}Recuerda revisar manualmente las carpetas para asegurarte de que todas las imágenes están en su lugar correcto.${NC}"
echo -e "${YELLOW}Si encuentras problemas, es posible que necesites ajustar las rutas o los nombres de los archivos en tu código.${NC}"

# Imprimir un resumen de la nueva estructura
echo -e "\n${GREEN}Resumen de la nueva estructura:${NC}"
find "$BASE_PATH/images" -mindepth 1 -maxdepth 1 -type d | sort | while read -r dir; do
    COUNT=$(find "$dir" -maxdepth 1 -type f | wc -l)
    echo -e "${GREEN}$(basename "$dir"):${NC} $COUNT archivos"
done