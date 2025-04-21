import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import Swal from 'sweetalert2';
let CategoryManagerComponent = class CategoryManagerComponent {
    // Constructor con inyección de dependencias
    constructor(formBuilder, // Para crear formularios reactivos
    categoryService // Para operaciones CRUD con categorías
    ) {
        this.formBuilder = formBuilder;
        this.categoryService = categoryService;
        // Array para almacenar todas las categorías
        this.categories = [];
        // Flag para controlar si se muestra el formulario de edición
        this.showEditForm = false;
        // Variable para almacenar la categoría que se está editando actualmente
        this.editingCategory = null;
        // Inicializar formulario para nuevas categorías
        this.newCategoryForm = this.formBuilder.group({
            nombre: ['', Validators.required],
            padre: ['', Validators.required] // Campo obligatorio
        });
        // Inicializar formulario para edición de categorías
        this.editCategoryForm = this.formBuilder.group({
            id: [''],
            nombre: ['', Validators.required],
            padre: ['', Validators.required] // Campo obligatorio
        });
    }
    // Método que se ejecuta al inicializar el componente
    ngOnInit() {
        this.loadCategories();
    }
    // Método para cargar todas las categorías desde el backend
    loadCategories() {
        this.categoryService.getCategories().subscribe({
            next: categories => (this.categories = categories),
            error: error => console.error('Error loading categories', error)
        });
    }
    // Método para añadir una nueva categoría
    addCategory() {
        // Verificar si el formulario es válido
        if (this.newCategoryForm.invalid) {
            Swal.fire({
                title: 'Debes rellenar todos los campos del formulario',
                icon: 'error',
                confirmButtonColor: '#52667a'
            });
            return;
        }
        // Obtener datos del formulario
        const newCategory = this.newCategoryForm.value;
        // Lógica especial para categorías "Sin Padre"
        if (String(newCategory.padre) === 'sin') {
            newCategory.padre = -1; // Valor temporal, se actualizará en el backend
        }
        // Llamar al servicio para crear la categoría
        this.categoryService.addCategory(newCategory).subscribe({
            next: result => {
                // Mostrar mensaje de éxito
                Swal.fire({
                    title: 'La categoría se ha añadido con éxito',
                    icon: 'success',
                    confirmButtonColor: '#52667a'
                });
                // Reiniciar formulario y recargar categorías
                this.newCategoryForm.reset();
                this.loadCategories();
            },
            error: error => {
                // Mostrar mensaje de error
                Swal.fire({
                    title: 'Error al añadir la categoría',
                    icon: 'error',
                    confirmButtonColor: '#52667a'
                });
            }
        });
    }
    // Método para preparar la edición de una categoría
    editCategory(category) {
        // Guardar referencia a la categoría en edición
        this.editingCategory = category;
        // Establecer valores en el formulario de edición
        this.editCategoryForm.setValue({
            id: category.id,
            nombre: category.nombre,
            padre: category.padre === category.id ? 'sin' : category.padre
        });
        // Mostrar el formulario de edición
        this.showEditForm = true;
    }
    // Método para actualizar una categoría editada
    updateCategory() {
        // Verificar si el formulario es válido
        if (this.editCategoryForm.invalid)
            return;
        // Obtener datos del formulario
        const updatedCategory = this.editCategoryForm.value;
        // Lógica especial para categorías "Sin Padre"
        if (String(updatedCategory.padre) === 'sin') {
            updatedCategory.padre = updatedCategory.id;
        }
        // Llamar al servicio para actualizar la categoría
        this.categoryService.updateCategory(updatedCategory).subscribe({
            next: result => {
                // Mostrar mensaje de éxito
                Swal.fire({
                    title: 'La categoría se ha actualizado con éxito',
                    icon: 'success',
                    confirmButtonColor: '#52667a'
                });
                // Ocultar formulario y recargar categorías
                this.showEditForm = false;
                this.editingCategory = null;
                this.loadCategories();
            },
            error: error => {
                // Mostrar mensaje de error
                Swal.fire({
                    title: 'Error al actualizar la categoría',
                    icon: 'error',
                    confirmButtonColor: '#52667a'
                });
            }
        });
    }
    // Método para eliminar una categoría
    deleteCategory(id) {
        // Pedir confirmación antes de eliminar
        Swal.fire({
            title: '¿Estás seguro de eliminar esta categoría?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#52667a',
            cancelButtonColor: '#52667a',
            confirmButtonText: 'Borrar la categoría',
            cancelButtonText: 'Cancelar'
        }).then(result => {
            if (result.value) {
                // Usuario confirmó, proceder con eliminación
                this.categoryService.deleteCategory(id).subscribe({
                    next: () => {
                        // Mostrar mensaje de éxito
                        Swal.fire({
                            title: 'La categoría se ha eliminado con éxito',
                            icon: 'success',
                            confirmButtonColor: '#52667a'
                        });
                        // Recargar categorías
                        this.loadCategories();
                    },
                    error: error => {
                        // Mostrar mensaje de error
                        Swal.fire({
                            title: 'Error al eliminar la categoría',
                            icon: 'error',
                            confirmButtonColor: '#52667a'
                        });
                    }
                });
            }
        });
    }
    // Método para cancelar la edición
    cancelEdit() {
        this.showEditForm = false;
        this.editingCategory = null;
    }
    // Método para obtener el nombre de la categoría padre
    getParentCategoryName(parentId) {
        if (!parentId || parentId === 0)
            return 'Sin Padre';
        const parentCategory = this.categories.find(c => c.id === parentId);
        return parentCategory ? parentCategory.nombre : 'Desconocido';
    }
};
CategoryManagerComponent = __decorate([
    Component({
        selector: 'app-category-manager',
        templateUrl: './category-manager.component.html',
        styleUrls: []
    })
], CategoryManagerComponent);
export { CategoryManagerComponent };
//# sourceMappingURL=category-manager.component.js.map