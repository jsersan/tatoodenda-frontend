import { __decorate } from "tslib";
// src/app/components/admin/category-manager/category-manager.component.ts
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let CategoryManagerComponent = class CategoryManagerComponent {
    constructor(fb, categoryService) {
        this.fb = fb;
        this.categoryService = categoryService;
        this.categories = [];
        this.editMode = false;
        this.selectedCategoryId = null;
        this.categoryForm = this.createForm();
    }
    ngOnInit() {
        this.loadCategories();
    }
    // Cargar categorías desde el servicio
    loadCategories() {
        this.categoryService.getCategories().subscribe({
            next: (categories) => {
                this.categories = categories;
            },
            error: (error) => {
                console.error('Error al cargar categorías:', error);
                alert('Error al cargar las categorías. Por favor, intente nuevamente.');
            }
        });
    }
    // Crear formulario para categoría
    createForm() {
        return this.fb.group({
            nombre: ['', [Validators.required, Validators.minLength(2)]],
            padre: [0], // 0 para categorías principales
            descripcion: [''],
            tipo: ['']
        });
    }
    // Método para manejar el envío del formulario
    onSubmit() {
        if (this.categoryForm.valid) {
            if (this.editMode && this.selectedCategoryId) {
                // Actualizar categoría existente
                this.updateCategory();
            }
            else {
                // Crear nueva categoría
                this.createCategory();
            }
        }
        else {
            // Marcar todos los campos como tocados para mostrar errores
            Object.keys(this.categoryForm.controls).forEach(key => {
                this.categoryForm.get(key)?.markAsTouched();
            });
        }
    }
    // Método para crear una nueva categoría
    createCategory() {
        const categoryData = {
            id: 0, // El backend asignará un ID real
            nombre: this.categoryForm.value.nombre,
            padre: this.categoryForm.value.padre || 0,
            descripcion: this.categoryForm.value.descripcion || '',
            tipo: this.categoryForm.value.tipo || ''
        };
        // En tu método de clase
        this.categoryService.addCategory(categoryData).subscribe({
            next: (createdCategory) => {
                // Tu código actual aquí
            },
            error: (error) => {
                // Tu código actual aquí
            }
        });
    }
    // Método para editar una categoría
    editCategory(category) {
        this.editMode = true;
        this.selectedCategoryId = category.id;
        this.categoryForm.setValue({
            nombre: category.nombre,
            padre: category.padre || 0,
            descripcion: category.descripcion || '',
            tipo: category.tipo || ''
        });
    }
    // Método para actualizar una categoría existente
    updateCategory() {
        if (!this.selectedCategoryId)
            return;
        const categoryData = {
            nombre: this.categoryForm.value.nombre,
            padre: this.categoryForm.value.padre,
            descripcion: this.categoryForm.value.descripcion,
            tipo: this.categoryForm.value.tipo
        };
        // Validación para evitar ciclos (categoría que es padre de sí misma)
        if (this.selectedCategoryId === categoryData.padre) {
            alert('Error: Una categoría no puede ser padre de sí misma.');
            return;
        }
        this.categoryService.updateCategory(this.selectedCategoryId, categoryData).subscribe({
            next: (updatedCategory) => {
                console.log('Categoría actualizada:', updatedCategory);
                // Actualizar la categoría en el array local
                const index = this.categories.findIndex(c => c.id === this.selectedCategoryId);
                if (index !== -1) {
                    this.categories[index] = updatedCategory;
                }
                this.resetForm();
                alert('Categoría actualizada con éxito.');
            },
            error: (error) => {
                console.error('Error al actualizar categoría:', error);
                alert('Error al actualizar la categoría. Por favor, intente nuevamente.');
            }
        });
    }
    // Método para eliminar una categoría
    deleteCategory(id) {
        if (confirm('¿Está seguro de que desea eliminar esta categoría? Esta acción no se puede deshacer.')) {
            this.categoryService.deleteCategory(id).subscribe({
                next: () => {
                    console.log('Categoría eliminada:', id);
                    this.categories = this.categories.filter(c => c.id !== id);
                    alert('Categoría eliminada con éxito.');
                },
                error: (error) => {
                    console.error('Error al eliminar categoría:', error);
                    alert('Error al eliminar la categoría. Por favor, intente nuevamente.');
                }
            });
        }
    }
    // Método para cancelar la edición
    cancelEdit() {
        this.resetForm();
    }
    // Método para resetear el formulario
    resetForm() {
        this.categoryForm.reset({
            nombre: '',
            padre: 0,
            descripcion: '',
            tipo: ''
        });
        this.editMode = false;
        this.selectedCategoryId = null;
    }
    // Método para obtener el nombre de la categoría padre
    getParentName(parentId) {
        if (!parentId || parentId === 0)
            return 'Ninguno (Categoría principal)';
        const parent = this.categories.find(c => c.id === parentId);
        return parent ? parent.nombre : 'Desconocido';
    }
};
CategoryManagerComponent = __decorate([
    Component({
        selector: 'app-category-manager',
        templateUrl: './category-manager.component.html',
        styleUrls: [],
        standalone: false
    })
], CategoryManagerComponent);
export { CategoryManagerComponent };
//# sourceMappingURL=category-manager.component.js.map