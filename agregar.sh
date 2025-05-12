#!/bin/bash

# Script para completar la reorganización de imágenes
# Este script busca imágenes en las carpetas numéricas y las copia a las carpetas correspondientes

# Colores para los mensajes
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Definir la ruta base (ajusta esta ruta a la ubicación de tu carpeta assets/images)
BASE_PATH="./src/assets/images"

# Verificar si la carpeta base existe
if [ ! -d "$BASE_PATH" ]; then
    echo -e "${RED}Error: La carpeta $BASE_PATH no existe.${NC}"
    echo "Por favor, ajusta la ruta BASE_PATH en el script a la ubicación correcta de tu carpeta de imágenes."
    exit 1
fi

# Lista de carpetas destino que ya existen
echo -e "${YELLOW}Verificando carpetas existentes...${NC}"
EXISTING_FOLDERS=()
for folder in $(find "$BASE_PATH" -maxdepth 1 -type d -not -path "$BASE_PATH"); do
    folder_name=$(basename "$folder")
    # Ignorar carpetas numéricas
    if ! [[ "$folder_name" =~ ^[0-9]+$ ]]; then
        EXISTING_FOLDERS+=("$folder_name")
        count=$(find "$folder" -maxdepth 1 -type f | wc -l)
        echo -e "${GREEN}Carpeta $folder_name: $count archivos${NC}"
    fi
done

echo -e "\n${YELLOW}Buscando archivos en carpetas numéricas...${NC}"
# Buscar carpetas numéricas
NUM_FOLDERS=()
for folder in $(find "$BASE_PATH" -maxdepth 1 -type d -not -path "$BASE_PATH"); do
    folder_name=$(basename "$folder")
    # Solo considerar carpetas con nombres numéricos
    if [[ "$folder_name" =~ ^[0-9]+$ ]]; then
        NUM_FOLDERS+=("$folder_name")
        count=$(find "$folder" -maxdepth 1 -type f | wc -l)
        echo -e "${YELLOW}Carpeta numérica $folder_name: $count archivos${NC}"
    fi
done

# Función para buscar imágenes por patrón y copiarlas a la carpeta destino
search_and_copy() {
    DEST_FOLDER=$1
    PATTERNS=("${@:2}")
    
    # Crear la carpeta destino si no existe
    if [ ! -d "$BASE_PATH/$DEST_FOLDER" ]; then
        mkdir -p "$BASE_PATH/$DEST_FOLDER"
        echo -e "${GREEN}Creada carpeta: $BASE_PATH/$DEST_FOLDER${NC}"
    fi
    
    # Buscar en todas las carpetas numéricas
    for num_folder in "${NUM_FOLDERS[@]}"; do
        for pattern in "${PATTERNS[@]}"; do
            # Buscar archivos que coincidan con el patrón
            matching_files=$(find "$BASE_PATH/$num_folder" -maxdepth 1 -type f -name "*$pattern*" 2>/dev/null)
            
            if [ -n "$matching_files" ]; then
                echo -e "${YELLOW}Encontradas $(echo "$matching_files" | wc -l) imágenes con patrón '$pattern' en carpeta $num_folder${NC}"
                
                # Copiar cada archivo encontrado
                echo "$matching_files" | while read -r file; do
                    filename=$(basename "$file")
                    cp "$file" "$BASE_PATH/$DEST_FOLDER/"
                    echo -e "${GREEN}Copiado: $filename a $DEST_FOLDER${NC}"
                done
            fi
        done
    done
    
    # Contar cuántos archivos hay ahora en la carpeta destino
    count=$(find "$BASE_PATH/$DEST_FOLDER" -maxdepth 1 -type f | wc -l)
    echo -e "${GREEN}Carpeta $DEST_FOLDER ahora tiene $count archivos${NC}"
}

# Mapeo de patrones de búsqueda por carpeta
# Estos patrones ayudan a identificar imágenes relacionadas con cada categoría
declare -A FOLDER_PATTERNS
FOLDER_PATTERNS=(
    ["dilataciones"]="dilat expans taper stretch"
    ["anillos"]="anill ring aro"
    ["tuneles"]="tunel tunnel"
    ["plugs"]="plug"
    ["expanders"]="expand dilatador taper"
    ["barbells"]="barbell"
    ["circular_barbells"]="circular herradura"
    ["labrets"]="labret"
    ["piercings"]="piercing"
    ["bananas"]="banana curv"
    ["escultura"]="escult dorad"
    ["default"]="default rosa transparente"
)

# Procesar cada carpeta y sus patrones
echo -e "\n${YELLOW}Comenzando la búsqueda y copia de archivos...${NC}"
for folder in "${!FOLDER_PATTERNS[@]}"; do
    echo -e "\n${YELLOW}Procesando carpeta: $folder${NC}"
    # Convertir la cadena de patrones en un array
    IFS=' ' read -r -a patterns <<< "${FOLDER_PATTERNS[$folder]}"
    search_and_copy "$folder" "${patterns[@]}"
done

# Verificar si hay carpetas sin archivos y listar las carpetas numéricas para revisión manual
echo -e "\n${YELLOW}Verificando carpetas vacías...${NC}"
for folder in "${EXISTING_FOLDERS[@]}"; do
    count=$(find "$BASE_PATH/$folder" -maxdepth 1 -type f | wc -l)
    if [ "$count" -eq 0 ]; then
        echo -e "${RED}Advertencia: La carpeta $folder está vacía${NC}"
        echo -e "${YELLOW}Imágenes disponibles en carpetas numéricas para revisión manual:${NC}"
        
        # Listar todas las imágenes en carpetas numéricas
        for num_folder in "${NUM_FOLDERS[@]}"; do
            echo -e "${YELLOW}Imágenes en carpeta $num_folder:${NC}"
            find "$BASE_PATH/$num_folder" -maxdepth 1 -type f -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" | while read -r file; do
                filename=$(basename "$file")
                echo "$filename"
            done
        done
        
        echo -e "${YELLOW}Para copiar manualmente ejecuta:${NC}"
        echo "cp [RUTA_ORIGEN]/imagen.jpg $BASE_PATH/$folder/"
    fi
done

# Script para verificar y corregir problemas de rutas en el código
echo -e "\n${YELLOW}Generando script para verificar el código...${NC}"

cat > check_code_paths.sh << 'EOL'
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
EOL

chmod +x check_code_paths.sh
echo -e "${GREEN}Script check_code_paths.sh creado. Ejecutalo después para verificar el código.${NC}"

# Crear un script para actualizar getImagePath en los componentes
cat > update_get_image_path.sh << 'EOL'
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
EOL

chmod +x update_get_image_path.sh
echo -e "${GREEN}Script update_get_image_path.sh creado. Ejecutalo después para actualizar los métodos getImagePath.${NC}"

echo -e "\n${GREEN}¡Reorganización completada!${NC}"
echo -e "${YELLOW}Se han generado scripts adicionales para ayudarte a verificar y corregir el código.${NC}"
echo -e "${YELLOW}1. Ejecuta './check_code_paths.sh' para encontrar referencias a carpetas numéricas en el código.${NC}"
echo -e "${YELLOW}2. Ejecuta './update_get_image_path.sh' para actualizar automáticamente los métodos getImagePath.${NC}"

# Imprimir un resumen de la nueva estructura
echo -e "\n${GREEN}Resumen de la estructura actual:${NC}"
find "$BASE_PATH" -mindepth 1 -maxdepth 1 -type d -not -path "*/\.*" | sort | while read -r dir; do
    COUNT=$(find "$dir" -maxdepth 1 -type f | wc -l)
    echo -e "${GREEN}$(basename "$dir"):${NC} $COUNT archivos"
done