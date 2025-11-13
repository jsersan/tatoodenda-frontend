// src/app/helpers/product-image-helper.ts - VERSIÓN COMPLETA CORREGIDA
export class ProductImageHelper {
    // ✅ MAPEO COMPLETO ACTUALIZADO
    static { this.PRODUCT_FOLDER_MAP = {
        // ========== ANILLOS (dentro de piercing/) ==========
        'anillo con corazón': {
            folder: 'piercing/anillo/anillo-corazon',
            colors: ['dorado', 'negro', 'plateado'],
            fallbackColor: 'dorado'
        },
        'anillo corazón': {
            folder: 'piercing/anillo/anillo-corazon',
            colors: ['dorado', 'negro', 'plateado'],
            fallbackColor: 'dorado'
        },
        'anillo con corazon': {
            folder: 'piercing/anillo/anillo-corazon',
            colors: ['dorado', 'negro', 'plateado'],
            fallbackColor: 'dorado'
        },
        'anillo corazon': {
            folder: 'piercing/anillo/anillo-corazon',
            colors: ['dorado', 'negro', 'plateado'],
            fallbackColor: 'dorado'
        },
        'anillo con bisagra': {
            folder: 'piercing/anillo/anillo-bisagra',
            colors: ['dorado', 'azul', 'cobre', 'negro', 'multicolor'],
            fallbackColor: 'dorado'
        },
        'anillo bisagra': {
            folder: 'piercing/anillo/anillo-bisagra',
            colors: ['dorado', 'azul', 'cobre', 'negro', 'multicolor'],
            fallbackColor: 'dorado'
        },
        'anillo fino': {
            folder: 'piercing/anillo/anillo-bisagra',
            colors: ['azul', 'cobre', 'dorado', 'negro', 'multicolor'],
            fallbackColor: 'dorado'
        },
        'aro para nostril': {
            folder: 'piercing/anillo/aro-nostril',
            colors: ['azul', 'multicolor', 'negro'],
            fallbackColor: 'azul'
        },
        'aro nostril': {
            folder: 'piercing/anillo/aro-nostril',
            colors: ['azul', 'multicolor', 'negro'],
            fallbackColor: 'azul'
        },
        'segment ring': {
            folder: 'piercing/anillo/segment-ring',
            colors: ['dorado', 'azul', 'multicolor', 'rosa'],
            fallbackColor: 'dorado'
        },
        // ========== BANANAS (dentro de piercing/) ==========
        'banana con rosa': {
            folder: 'piercing/banana/banana-flor',
            colors: ['rosa', 'azul', 'celeste', 'rojo', 'verde'],
            fallbackColor: 'rosa'
        },
        'banana flor': {
            folder: 'piercing/banana/banana-flor',
            colors: ['azul', 'celeste', 'rojo', 'rosa', 'verde'],
            fallbackColor: 'rosa'
        },
        'banana con flor': {
            folder: 'piercing/banana/banana-flor',
            colors: ['rosa', 'azul', 'celeste', 'rojo', 'verde'],
            fallbackColor: 'rosa'
        },
        'banana con gema': {
            folder: 'piercing/banana/banana-gema',
            colors: ['azul', 'morado', 'transparente', 'rojo', 'verde', 'trebol'],
            fallbackColor: 'azul'
        },
        'banana gema': {
            folder: 'piercing/banana/banana-gema',
            colors: ['azul', 'morado', 'transparente', 'rojo', 'verde', 'trebol'],
            fallbackColor: 'azul'
        },
        'banana simple': {
            folder: 'piercing/banana/banana-simple',
            colors: ['dorado', 'plateado', 'multicolor'],
            fallbackColor: 'dorado'
        },
        'banana para ombligo dorada': {
            folder: 'piercing/banana/banana-simple',
            colors: ['dorado'],
            fallbackColor: 'dorado'
        },
        'banana para ombligo plateada': {
            folder: 'piercing/banana/banana-simple',
            colors: ['plateado'],
            fallbackColor: 'plateado'
        },
        // ========== BARBELLS (dentro de piercing/) ==========
        'barbell con alas': {
            folder: 'piercing/barbell/barbell-alas',
            colors: ['plateado'],
            fallbackColor: 'plateado'
        },
        'barbells alas': {
            folder: 'piercing/barbell/barbell-alas',
            colors: ['plateado'],
            fallbackColor: 'plateado'
        },
        'barbell alas': {
            folder: 'piercing/barbell/barbell-alas',
            colors: ['plateado'],
            fallbackColor: 'plateado'
        },
        'barbell flecha': {
            folder: 'piercing/barbell/barbell-flecha',
            colors: ['dorado', 'negro', 'plateado'],
            fallbackColor: 'dorado'
        },
        'barbells flecha': {
            folder: 'piercing/barbell/barbell-flecha',
            colors: ['dorado', 'negro', 'plateado'],
            fallbackColor: 'dorado'
        },
        'barbell con flecha': {
            folder: 'piercing/barbell/barbell-flecha',
            colors: ['dorado', 'negro', 'plateado'],
            fallbackColor: 'dorado'
        },
        'barbell largo': {
            folder: 'piercing/barbell/barbell-largo',
            colors: ['dorado', 'azul', 'cobre', 'multicolor'],
            fallbackColor: 'dorado'
        },
        'barbells largo': {
            folder: 'piercing/barbell/barbell-largo',
            colors: ['dorado', 'azul', 'cobre', 'multicolor'],
            fallbackColor: 'dorado'
        },
        // ========== CIRCULAR BARBELLS (dentro de piercing/) ==========
        'circular barbell con piedra': {
            folder: 'piercing/circular-barbell/circular-barbell-piedra',
            colors: ['cristal', 'negro'],
            fallbackColor: 'cristal'
        },
        'circular barbell piedra': {
            folder: 'piercing/circular-barbell/circular-barbell-piedra',
            colors: ['cristal', 'negro'],
            fallbackColor: 'cristal'
        },
        'circular barbell con flecha': {
            folder: 'piercing/circular-barbell/circular-barbell-coni',
            colors: ['dorado', 'cobre', 'negro'],
            fallbackColor: 'dorado'
        },
        'circular barbell flecha': {
            folder: 'piercing/circular-barbell/circular-barbell-coni',
            colors: ['dorado', 'cobre', 'negro'],
            fallbackColor: 'dorado'
        },
        'circular barbell con bola cóni': {
            folder: 'piercing/circular-barbell/circular-barbell-coni',
            colors: ['dorado', 'cobre', 'negro'],
            fallbackColor: 'dorado'
        },
        'circular barbell con bola coni': {
            folder: 'piercing/circular-barbell/circular-barbell-coni',
            colors: ['dorado', 'cobre', 'negro'],
            fallbackColor: 'dorado'
        },
        // ========== LABRETS (dentro de piercing/) ==========
        'labret corazón': {
            folder: 'piercing/labret/labret-corazon',
            colors: ['dorado', 'negro', 'plateado', 'rosa'],
            fallbackColor: 'dorado'
        },
        'labret con corazón': {
            folder: 'piercing/labret/labret-corazon',
            colors: ['dorado', 'negro', 'plateado', 'rosa'],
            fallbackColor: 'dorado'
        },
        'labret corazon': {
            folder: 'piercing/labret/labret-corazon',
            colors: ['dorado', 'negro', 'plateado', 'rosa'],
            fallbackColor: 'dorado'
        },
        'labret simple': {
            folder: 'piercing/labret/labret-simple',
            colors: ['dorado', 'cobre', 'negro', 'multicolor'],
            fallbackColor: 'dorado'
        },
        'labret triángulo': {
            folder: 'piercing/labret/labret-triangulos',
            colors: ['dorado', 'negro', 'plateado', 'rosa'],
            fallbackColor: 'dorado'
        },
        'labret triangulo': {
            folder: 'piercing/labret/labret-triangulos',
            colors: ['dorado', 'negro', 'plateado', 'rosa'],
            fallbackColor: 'dorado'
        },
        'labret con triángulo': {
            folder: 'piercing/labret/labret-triangulos',
            colors: ['dorado', 'negro', 'plateado', 'rosa'],
            fallbackColor: 'dorado'
        },
        'labret triangulos': {
            folder: 'piercing/labret/labret-triangulos',
            colors: ['dorado', 'negro', 'plateado', 'rosa'],
            fallbackColor: 'dorado'
        },
        // ========== PLUGS - CORRECCIÓN CRÍTICA ==========
        "plug": {
            folder: 'dilatador/plug/plug-simple',
            colors: ['verde', 'azul', 'blanco', 'morado', 'negro'],
            fallbackColor: 'verde'
        },
        'plug simple': {
            folder: 'dilatador/plug/plug-simple',
            colors: ['verde', 'azul', 'blanco', 'morado', 'negro'],
            fallbackColor: 'verde'
        },
        'plug de acrílico': {
            folder: 'dilatador/plug/plug-simple',
            colors: ['verde', 'azul', 'blanco', 'morado', 'negro'],
            fallbackColor: 'verde'
        },
        'plug de acrilico': {
            folder: 'dilatador/plug/plug-simple',
            colors: ['verde', 'azul', 'blanco', 'morado', 'negro'],
            fallbackColor: 'verde'
        },
        'plug de silicona': {
            folder: 'dilatador/plug/plug-dobles',
            colors: ['azul', 'beige', 'morado', 'rojo', 'verde'],
            fallbackColor: 'azul'
        },
        'plug silicona': {
            folder: 'dilatador/plug/plug-dobles',
            colors: ['azul', 'beige', 'morado', 'rojo', 'verde'],
            fallbackColor: 'azul'
        },
        // ✅ CRÍTICO: Plug con corazón - SOLO CAOBA
        // ✅ VERSIÓN CORRECTA (cámbiala por esta):
        'plug con corazón': {
            folder: 'dilatador/plug/plug-dobles',
            colors: ['caoba'], // ✅ SOLO caoba
            fallbackColor: 'caoba'
        },
        'plug con corazon': {
            folder: 'dilatador/plug/plug-dobles',
            colors: ['caoba'], // ✅ SOLO caoba
            fallbackColor: 'caoba'
        },
        'plug doble': {
            folder: 'dilatador/plug/plug-dobles',
            colors: ['azul', 'beige', 'morado', 'rojo', 'verde'],
            fallbackColor: 'azul'
        },
        'plug dobles': {
            folder: 'dilatador/plug/plug-dobles',
            colors: ['azul', 'beige', 'morado', 'rojo', 'verde'],
            fallbackColor: 'azul'
        },
        // ========== DILATADORES Y EXPANDERS ==========
        'set de dilatadores': {
            folder: 'dilatador/set-dilatadores',
            colors: ['rosa', 'blanco', 'plateado', 'violeta'],
            fallbackColor: 'rosa'
        },
        'set dilatadores': {
            folder: 'dilatador/set-dilatadores',
            colors: ['rosa', 'blanco', 'plateado', 'violeta'],
            fallbackColor: 'rosa'
        },
        'set de expanders de 1.1 a 15 mm': {
            folder: 'dilatador/set-dilatadores',
            colors: ['blanco', 'rosa', 'plateado', 'violeta'],
            fallbackColor: 'rosa'
        },
        'set de expanders de 1,1 a 15 mm': {
            folder: 'dilatador/set-dilatadores',
            colors: ['blanco', 'rosa', 'plateado', 'violeta'],
            fallbackColor: 'rosa'
        },
        dilatador: {
            folder: 'dilatador/dilatador simple',
            colors: ['negro', 'rojo'],
            fallbackColor: 'negro'
        },
        dilatadores: {
            folder: 'dilatador/dilatador simple',
            colors: ['negro', 'rojo'],
            fallbackColor: 'negro'
        },
        'expander duo': {
            folder: 'dilatador/expander/expander-duo',
            colors: ['celeste', 'dorado', 'verde'],
            fallbackColor: 'celeste'
        },
        'expander con duo': {
            folder: 'dilatador/expander/expander-duo',
            colors: ['celeste', 'dorado', 'verde'],
            fallbackColor: 'celeste'
        },
        'expander medusa': {
            folder: 'dilatador/expander/expander-medusa',
            colors: ['negro', 'verde'],
            fallbackColor: 'negro'
        },
        'expander con medusa': {
            folder: 'dilatador/expander/expander-medusa',
            colors: ['negro', 'verde'],
            fallbackColor: 'negro'
        },
        'expander espiral': {
            folder: 'dilatador/expander/expander-duo',
            colors: ['celeste', 'morado', 'verde'],
            fallbackColor: 'celeste'
        },
        'expander en espiral': {
            folder: 'dilatador/expander/expander-duo',
            colors: ['celeste', 'morado', 'verde'],
            fallbackColor: 'celeste'
        },
        'set de expanders curvados': {
            folder: 'dilatador/expander/expander-medusa',
            colors: ['negro', 'verde'],
            fallbackColor: 'negro'
        },
        'set de expanders': {
            folder: 'dilatador/set-dilatadores',
            colors: ['blanco', 'rosa', 'plateado', 'violeta'],
            fallbackColor: 'blanco'
        },
        'set expanders curvados': {
            folder: 'dilatador/expander/expander-medusa',
            colors: ['negro', 'verde'],
            fallbackColor: 'negro'
        },
        'set expanders': {
            folder: 'dilatador/set-dilatadores',
            colors: ['blanco', 'rosa', 'plateado', 'violeta'],
            fallbackColor: 'blanco'
        },
        // ========== TÚNELES ==========
        'túnel de acrílico': {
            folder: 'dilatador/tunel/tunel-acrilico',
            colors: ['rojo', 'azul', 'blanco', 'negro', 'amarillo'],
            fallbackColor: 'rojo'
        },
        'tunel de acrílico': {
            folder: 'dilatador/tunel/tunel-acrilico',
            colors: ['rojo', 'azul', 'blanco', 'negro', 'amarillo'],
            fallbackColor: 'rojo'
        },
        'túnel acrílico': {
            folder: 'dilatador/tunel/tunel-acrilico',
            colors: ['rojo', 'azul', 'blanco', 'negro', 'amarillo'],
            fallbackColor: 'rojo'
        },
        'tunel acrilico': {
            folder: 'dilatador/tunel/tunel-acrilico',
            colors: ['rojo', 'azul', 'blanco', 'negro', 'amarillo'],
            fallbackColor: 'rojo'
        },
        'túnel de metal': {
            folder: 'dilatador/tunel/tunel-metal',
            colors: ['dorado', 'azul', 'cobre'],
            fallbackColor: 'dorado'
        },
        'tunel de metal': {
            folder: 'dilatador/tunel/tunel-metal',
            colors: ['dorado', 'azul', 'cobre'],
            fallbackColor: 'dorado'
        },
        'túnel metal': {
            folder: 'dilatador/tunel/tunel-metal',
            colors: ['dorado', 'azul', 'cobre'],
            fallbackColor: 'dorado'
        },
        'tunel metal': {
            folder: 'dilatador/tunel/tunel-metal',
            colors: ['dorado', 'azul', 'cobre'],
            fallbackColor: 'dorado'
        },
        'túnel de acero': {
            folder: 'dilatador/tunel/tunel-metal',
            colors: ['dorado', 'azul', 'cobre'],
            fallbackColor: 'dorado'
        },
        'tunel de acero': {
            folder: 'dilatador/tunel/tunel-metal',
            colors: ['dorado', 'azul', 'cobre'],
            fallbackColor: 'dorado'
        },
        'túnel orfebre': {
            folder: 'dilatador/tunel/tunel-orfebre',
            colors: ['dorado', 'plateado'],
            fallbackColor: 'dorado'
        },
        'tunel orfebre': {
            folder: 'dilatador/tunel/tunel-orfebre',
            colors: ['dorado', 'plateado'],
            fallbackColor: 'dorado'
        },
        'túnel mandala': {
            folder: 'dilatador/tunel/tunel-orfebre',
            colors: ['dorado', 'plateado'],
            fallbackColor: 'dorado'
        },
        'tunel mandala': {
            folder: 'dilatador/tunel/tunel-orfebre',
            colors: ['dorado', 'plateado'],
            fallbackColor: 'dorado'
        },
        'túnel de silicona': {
            folder: 'dilatador/tunel/tunel-silicona',
            colors: ['azul', 'blanco', 'rojo', 'rosa', 'negro', 'verde'],
            fallbackColor: 'azul'
        },
        'tunel de silicona': {
            folder: 'dilatador/tunel/tunel-silicona',
            colors: ['azul', 'blanco', 'rojo', 'rosa', 'negro', 'verde'],
            fallbackColor: 'azul'
        },
        'túnel silicona': {
            folder: 'dilatador/tunel/tunel-silicona',
            colors: ['azul', 'blanco', 'rojo', 'rosa', 'negro', 'verde'],
            fallbackColor: 'azul'
        },
        'tunel silicona': {
            folder: 'dilatador/tunel/tunel-silicona',
            colors: ['azul', 'blanco', 'rojo', 'rosa', 'negro', 'verde'],
            fallbackColor: 'azul'
        },
        túnel: {
            folder: 'dilatador/tunel/tunel-silicona',
            colors: ['azul', 'blanco', 'rojo', 'rosa', 'negro', 'verde'],
            fallbackColor: 'azul'
        },
        tunel: {
            folder: 'dilatador/tunel/tunel-silicona',
            colors: ['azul', 'blanco', 'rojo', 'rosa', 'negro', 'verde'],
            fallbackColor: 'azul'
        },
        piercing: {
            folder: 'piercing/anillo/anillo-bisagra',
            colors: ['cobre', 'dorado', 'negro', 'multicolor'],
            fallbackColor: 'dorado'
        }
    }; }
    static getProductImageSrc(product, selectedColor) {
        if (!product || !product.nombre) {
            return this.getFallbackImage();
        }
        const nombre = product.nombre
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .trim();
        /* console.log('🖼️ getProductImageSrc:', {
          nombre,
          nombreOriginal: product.nombre,
          selectedColor,
          carpetaimg: product.carpetaimg
        });*/
        // ✅ REGLA ESPECIAL 1: Plug con corazón - HARDCODED
        if (nombre.includes('plug con corazon') || nombre.includes('plug con corazón')) {
            // console.log('🎯 PLUG CON CORAZÓN detectado');
            return 'assets/images/dilatador/plug/plug-dobles/caoba.jpg';
        }
        // ✅ REGLA ESPECIAL 2: "Plug" genérico SOLO si es EXACTAMENTE "plug"
        // ⚠️ IMPORTANTE: Debe ir DESPUÉS de buscar en el mapeo
        // Para que "plug de silicona", "plug doble", etc. se procesen primero
        // ESTRATEGIA 1: Buscar configuración específica PRIMERO
        const productConfig = this.findProductConfig(nombre);
        if (productConfig) {
            // console.log('✅ Config encontrada:', productConfig.folder);
            const imagePath = this.getImagePathForProduct(productConfig, selectedColor, nombre);
            // console.log('✅ Ruta final:', imagePath);
            return imagePath;
        }
        // ESTRATEGIA 2: Buscar por palabras clave
        const keywordConfig = this.findByKeywords(nombre);
        if (keywordConfig) {
            // console.log('✅ Keyword config:', keywordConfig.folder);
            const imagePath = this.getImagePathForProduct(keywordConfig, selectedColor, nombre);
            // console.log('✅ Ruta final:', imagePath);
            return imagePath;
        }
        // ESTRATEGIA 3: Buscar por tipo
        const typeConfig = this.findByProductType(nombre);
        if (typeConfig) {
            // console.log('✅ Type config:', typeConfig.folder);
            const imagePath = this.getImagePathForProduct(typeConfig, selectedColor, nombre);
            // console.log('✅ Ruta final:', imagePath);
            return imagePath;
        }
        // ✅ SOLO SI NO SE ENCONTRÓ NADA y es exactamente "plug", usar fallback de plug genérico
        if (nombre === "plug") {
            // console.log('🎯 PLUG GENÉRICO detectado como último recurso');
            return 'assets/images/dilatador/plug/plug-simple/negro.jpg';
        }
        // ESTRATEGIA 4: Fallback
        console.warn('⚠️ No se encontró configuración para:', nombre);
        return this.getFallbackImage();
    }
    /**
     * ✅ OBTENER COLORES DISPONIBLES
     */
    static getAvailableColors(productName) {
        const nombre = productName
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .trim();
        console.log('🎨 getAvailableColors para:', nombre);
        // ✅ REGLA ESPECIAL: Plug con corazón
        if (nombre.includes('plug con corazon') || nombre.includes('plug con corazón')) {
            // console.log('🎯 Retornando solo [caoba]');
            return ['caoba'];
        }
        const config = this.findProductConfig(nombre) ||
            this.findByKeywords(nombre) ||
            this.findByProductType(nombre);
        if (config) {
            // Filtrar "default" de los colores visibles
            const colorsFiltered = config.colors.filter(c => c.toLowerCase() !== 'default');
            return colorsFiltered.length > 0 ? colorsFiltered : ['Estándar'];
        }
        return ['Estándar'];
    }
    /**
     * ✅ FALLBACK IMAGE
     */
    static getFallbackImage() {
        return 'assets/images/default.jpg';
    }
    /**
     * ✅ BUSCAR CONFIGURACIÓN ESPECÍFICA
     */
    static findProductConfig(productName) {
        const normalizedName = productName
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase()
            .trim();
        for (const [key, config] of Object.entries(this.PRODUCT_FOLDER_MAP)) {
            const normalizedKey = key
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .toLowerCase()
                .trim();
            if (normalizedName === normalizedKey) {
                console.log(`🎯 Configuración exacta: ${key}`);
                return config;
            }
        }
        return null;
    }
    /**
     * ✅ BUSCAR POR PALABRAS CLAVE
     */
    static findByKeywords(productName) {
        if (productName.includes('plug con corazon') ||
            productName.includes('plug con corazón')) {
            return null;
        }
        const keywordMap = {
            bisagra: {
                folder: 'piercing/anillo/anillo-bisagra',
                colors: ['dorado', 'azul', 'cobre', 'negro', 'multicolor'],
                fallbackColor: 'dorado'
            },
            corazon: {
                folder: 'piercing/anillo/anillo-corazon',
                colors: ['dorado', 'negro', 'plateado'],
                fallbackColor: 'dorado'
            },
            triangulo: {
                folder: 'piercing/labret/labret-triangulos',
                colors: ['dorado', 'negro', 'plateado', 'rosa'],
                fallbackColor: 'dorado'
            },
            flecha: {
                folder: 'piercing/barbell/barbell-flecha',
                colors: ['dorado', 'negro', 'plateado'],
                fallbackColor: 'plateado'
            },
            alas: {
                folder: 'piercing/barbell/barbell-alas',
                colors: ['plateado'],
                fallbackColor: 'plateado'
            },
            gema: {
                folder: 'piercing/banana/banana-gema',
                colors: ['azul', 'morado', 'transparente', 'rojo', 'verde'],
                fallbackColor: 'azul'
            },
            acrilico: {
                folder: 'dilatador/tunel/tunel-acrilico',
                colors: ['azul', 'blanco', 'rojo', 'negro', 'amarillo'],
                fallbackColor: 'azul'
            },
            acrílico: {
                folder: 'dilatador/tunel/tunel-acrilico',
                colors: ['azul', 'blanco', 'rojo', 'negro', 'amarillo'],
                fallbackColor: 'azul'
            },
            metal: {
                folder: 'dilatador/tunel/tunel-metal',
                colors: ['azul', 'cobre', 'dorado'],
                fallbackColor: 'dorado'
            },
            acero: {
                folder: 'dilatador/tunel/tunel-metal',
                colors: ['azul', 'cobre', 'dorado'],
                fallbackColor: 'dorado'
            },
            orfebre: {
                folder: 'dilatador/tunel/tunel-orfebre',
                colors: ['dorado', 'plateado'],
                fallbackColor: 'dorado'
            },
            mandala: {
                folder: 'dilatador/tunel/tunel-orfebre',
                colors: ['dorado', 'plateado'],
                fallbackColor: 'dorado'
            },
            silicona: {
                folder: 'dilatador/tunel/tunel-silicona',
                colors: ['azul', 'blanco', 'rojo', 'rosa', 'negro', 'verde'],
                fallbackColor: 'azul'
            },
            nostril: {
                folder: 'piercing/anillo/aro-nostril',
                colors: ['azul', 'multicolor', 'negro'],
                fallbackColor: 'azul'
            },
            ombligo: {
                folder: 'piercing/banana/banana-simple',
                colors: ['dorado', 'plateado', 'multicolor'],
                fallbackColor: 'dorado'
            },
            piedra: {
                folder: 'piercing/circular-barbell/circular-barbell-piedra',
                colors: ['cristal', 'negro'],
                fallbackColor: 'cristal'
            },
            cóni: {
                folder: 'piercing/circular-barbell/circular-barbell-coni',
                colors: ['dorado', 'cobre', 'negro'],
                fallbackColor: 'dorado'
            },
            coni: {
                folder: 'piercing/circular-barbell/circular-barbell-coni',
                colors: ['dorado', 'cobre', 'negro'],
                fallbackColor: 'dorado'
            },
            bola: {
                folder: 'piercing/circular-barbell/circular-barbell-coni',
                colors: ['dorado', 'cobre', 'negro'],
                fallbackColor: 'dorado'
            },
            duo: {
                folder: 'dilatador/expander/expander-duo',
                colors: ['celeste', 'dorado', 'verde'],
                fallbackColor: 'celeste'
            },
            medusa: {
                folder: 'dilatador/expander/expander-medusa',
                colors: ['negro', 'verde'],
                fallbackColor: 'negro'
            },
            espiral: {
                folder: 'dilatador/expander/expander-duo',
                colors: ['celeste', 'dorado', 'verde'],
                fallbackColor: 'celeste'
            },
            curvados: {
                folder: 'dilatador/expander/expander-medusa',
                colors: ['negro', 'verde'],
                fallbackColor: 'negro'
            },
            curvado: {
                folder: 'dilatador/expander/expander-medusa',
                colors: ['negro', 'verde'],
                fallbackColor: 'negro'
            },
            rosa: {
                folder: 'piercing/banana/banana-flor',
                colors: ['azul', 'celeste', 'rojo', 'rosa', 'verde'],
                fallbackColor: 'rosa'
            },
            flor: {
                folder: 'piercing/banana/banana-flor',
                colors: ['azul', 'celeste', 'rojo', 'rosa', 'verde'],
                fallbackColor: 'rosa'
            }
        };
        for (const [keyword, config] of Object.entries(keywordMap)) {
            if (productName.includes(keyword)) {
                console.log(`🎯 Keyword match: "${keyword}"`);
                return config;
            }
        }
        return null;
    }
    /**
     * ✅ BUSCAR POR TIPO DE PRODUCTO
     */
    static findByProductType(productName) {
        const typeMap = {
            anillo: {
                folder: 'piercing/anillo/anillo-bisagra',
                colors: ['dorado', 'azul', 'cobre', 'negro', 'multicolor'],
                fallbackColor: 'dorado'
            },
            aro: {
                folder: 'piercing/anillo/aro-nostril',
                colors: ['azul', 'multicolor', 'negro'],
                fallbackColor: 'azul'
            },
            banana: {
                folder: 'piercing/banana/banana-simple',
                colors: ['dorado', 'plateado', 'multicolor'],
                fallbackColor: 'dorado'
            },
            barbell: {
                folder: 'piercing/barbell/barbell-flecha',
                colors: ['dorado', 'negro', 'plateado'],
                fallbackColor: 'plateado'
            },
            labret: {
                folder: 'piercing/labret/labret-simple',
                colors: ['cobre', 'dorado', 'negro', 'multicolor'],
                fallbackColor: 'dorado'
            },
            plug: {
                folder: 'dilatador/plug/plug-simple',
                colors: [
                    'amarillo',
                    'azul',
                    'blanco',
                    'morado',
                    'negro',
                    'verde'
                ],
                fallbackColor: 'negro'
            },
            tunel: {
                folder: 'dilatador/tunel/tunel-silicona',
                colors: ['azul', 'blanco', 'rojo', 'rosa', 'negro', 'verde'],
                fallbackColor: 'azul'
            },
            túnel: {
                folder: 'dilatador/tunel/tunel-silicona',
                colors: ['azul', 'blanco', 'rojo', 'rosa', 'negro', 'verde'],
                fallbackColor: 'azul'
            },
            expander: {
                folder: 'dilatador/expander/expander-duo',
                colors: ['celeste', 'dorado', 'verde'],
                fallbackColor: 'celeste'
            },
            dilatador: {
                folder: 'dilatador/dilatador simple',
                colors: ['negro', 'rojo'],
                fallbackColor: 'negro'
            },
            piercing: {
                folder: 'piercing/anillo/anillo-bisagra',
                colors: ['dorado', 'azul', 'cobre', 'negro', 'multicolor'],
                fallbackColor: 'dorado'
            },
            circular: {
                folder: 'piercing/circular-barbell/circular-barbell-piedra',
                colors: ['cristal', 'negro'],
                fallbackColor: 'cristal'
            },
            set: {
                folder: 'dilatador/set-dilatadores',
                colors: ['blanco', 'rosa', 'plateado', 'violeta'],
                fallbackColor: 'rosa'
            }
        };
        for (const [type, config] of Object.entries(typeMap)) {
            if (productName.includes(type)) {
                console.log(`🎯 Type match: "${type}"`);
                return config;
            }
        }
        return null;
    }
    /**
     * ✅ OBTENER RUTA DE IMAGEN
     */
    static getImagePathForProduct(config, selectedColor, productName) {
        const { folder, colors, fallbackColor } = config;
        console.log('🔧 getImagePathForProduct:', {
            folder,
            selectedColor,
            fallbackColor,
            colors: colors.slice(0, 3) // Solo mostrar primeros 3 para no saturar logs
        });
        // ✅ PASO 1: Si hay un color seleccionado y está disponible
        if (selectedColor) {
            const colorLower = selectedColor.toLowerCase();
            const colorsLower = colors.map(c => c.toLowerCase());
            if (colorsLower.includes(colorLower)) {
                const imagePath = `assets/images/${folder}/${colorLower}.jpg`;
                // console.log('🎨 Color seleccionado:', imagePath);
                return imagePath;
            }
        }
        // ✅ PASO 2: Usar el color de fallback
        if (fallbackColor) {
            const fallbackLower = fallbackColor.toLowerCase();
            const colorsLower = colors.map(c => c.toLowerCase());
            if (colorsLower.includes(fallbackLower)) {
                const imagePath = `assets/images/${folder}/${fallbackLower}.jpg`;
                // console.log('🔄 Usando fallback:', imagePath);
                return imagePath;
            }
        }
        // ✅ PASO 3: Usar el primer color disponible
        if (colors.length > 0) {
            const firstColor = colors[0].toLowerCase();
            const imagePath = `assets/images/${folder}/${firstColor}.jpg`;
            // console.log('📌 Usando primer color:', imagePath);
            return imagePath;
        }
        // ✅ PASO 4: Fallback final
        console.warn('⚠️ Sin colores disponibles para:', folder);
        return this.getFallbackImage();
    }
    /**
     * ✅ VERIFICAR SI EXISTE VARIANTE DE COLOR
     */
    static hasColorVariant(productName, color) {
        const availableColors = this.getAvailableColors(productName);
        return availableColors.includes(color.toLowerCase());
    }
    /**
     * ✅ OBTENER CARPETA DEL PRODUCTO
     */
    static getProductFolder(productName) {
        const config = this.findProductConfig(productName.toLowerCase()) ||
            this.findByKeywords(productName.toLowerCase()) ||
            this.findByProductType(productName.toLowerCase());
        return config ? config.folder : 'default';
    }
    /**
     * ✅ DEBUG DEL PRODUCTO
     */
    static debugProduct(productName) {
        console.group(`🛠 Debug para producto: ${productName}`);
        const config = this.findProductConfig(productName.toLowerCase()) ||
            this.findByKeywords(productName.toLowerCase()) ||
            this.findByProductType(productName.toLowerCase());
        if (config) {
            console.log('📁 Carpeta:', config.folder);
            console.log('🎨 Colores disponibles:', config.colors);
            console.log('🔄 Color de fallback:', config.fallbackColor);
            console.log('🖼️ Imagen por defecto:', this.getImagePathForProduct(config, undefined, productName));
            config.colors.forEach(color => {
                console.log(`  • ${color}: ${this.getImagePathForProduct(config, color, productName)}`);
            });
        }
        else {
            console.log('❌ No se encontraron configuraciones para este producto');
        }
        console.groupEnd();
    }
}
//# sourceMappingURL=product-image-helper.js.map