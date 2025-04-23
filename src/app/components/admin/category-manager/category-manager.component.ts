import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { CategoryService } from '../../../services/category.service'
import { Category } from 'src/app/models/category'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-category-manager',
  templateUrl: './category-manager.component.html',
  styleUrls: []
})
export class CategoryManagerComponent implements OnInit {
  // Array para almacenar todas las categorías
  categories: Category[] = []

  // Formulario para añadir nuevas categorías
  newCategoryForm: FormGroup

  // Formulario para editar categorías existentes
  editCategoryForm: FormGroup

  // Flag para controlar si se muestra el formulario de edición
  showEditForm = false

  // Variable para almacenar la categoría que se está editando actualmente
  editingCategory: Category | null = null

  // Constructor con inyección de dependencias
  constructor (
    private formBuilder: FormBuilder, // Para crear formularios reactivos
    private categoryService: CategoryService // Para operaciones CRUD con categorías
  ) {
    // Inicializar formulario para nuevas categorías
    this.newCategoryForm = this.formBuilder.group({
      nombre: ['', Validators.required], // Campo obligatorio
      padre: ['', Validators.required] // Campo obligatorio
    })

    // Inicializar formulario para edición de categorías
    this.editCategoryForm = this.formBuilder.group({
      id: [''], // Campo oculto para el ID
      nombre: ['', Validators.required], // Campo obligatorio
      padre: ['', Validators.required] // Campo obligatorio
    })
  }

  // Método que se ejecuta al inicializar el componente
  ngOnInit (): void {
    this.loadCategories()
  }

  // Método para cargar todas las categorías desde el backend
  loadCategories (): void {
    this.categoryService.getCategories().subscribe({
      next: categories => (this.categories = categories),
      error: error => console.error('Error loading categories', error)
    })
  }

  // Método para añadir una nueva categoría
  addCategory (): void {
    // Verificar si el formulario es válido
    if (this.newCategoryForm.invalid) {
      Swal.fire({
        title: 'Debes rellenar todos los campos del formulario',
        icon: 'error',
        confirmButtonColor: '#52667a'
      })
      return
    }

    // Obtener datos del formulario
    const newCategory: Category = this.newCategoryForm.value
    // Lógica especial para categorías "Sin Padre"
    if (String(newCategory.parent) === 'sin') {
      newCategory.parent = -1 // Valor temporal, se actualizará en el backend
    }
    // Llamar al servicio para crear la categoría
    this.categoryService.addCategory(newCategory).subscribe({
      next: result => {
        // Mostrar mensaje de éxito
        Swal.fire({
          title: 'La categoría se ha añadido con éxito',
          icon: 'success',
          confirmButtonColor: '#52667a'
        })
        // Reiniciar formulario y recargar categorías
        this.newCategoryForm.reset()
        this.loadCategories()
      },
      error: error => {
        // Mostrar mensaje de error
        Swal.fire({
          title: 'Error al añadir la categoría',
          icon: 'error',
          confirmButtonColor: '#52667a'
        })
      }
    })
  }

  // Método para preparar la edición de una categoría
  editCategory (category: Category): void {
    // Guardar referencia a la categoría en edición
    this.editingCategory = category
    // Establecer valores en el formulario de edición
    this.editCategoryForm.setValue({
      id: category.id,
      nombre: category.name,
      padre: category.parent === category.id ? 'sin' : category.parent
    })

    // Mostrar el formulario de edición
    this.showEditForm = true
  }

  // Método para actualizar una categoría editada
  updateCategory (): void {
    // Verificar si el formulario es válido
    if (this.editCategoryForm.invalid) return
    // Obtener datos del formulario
    const updatedCategory: Category = this.editCategoryForm.value

    // Lógica especial para categorías "Sin Padre"
    if (String(updatedCategory.parent) === 'sin') {
      updatedCategory.parent = updatedCategory.id
    }

    // Llamar al servicio para actualizar la categoría
    this.categoryService.updateCategory(updatedCategory).subscribe({
      next: result => {
        // Mostrar mensaje de éxito
        Swal.fire({
          title: 'La categoría se ha actualizado con éxito',
          icon: 'success',
          confirmButtonColor: '#52667a'
        })
        // Ocultar formulario y recargar categorías
        this.showEditForm = false
        this.editingCategory = null
        this.loadCategories()
      },
      error: error => {
        // Mostrar mensaje de error
        Swal.fire({
          title: 'Error al actualizar la categoría',
          icon: 'error',
          confirmButtonColor: '#52667a'
        })
      }
    })
  }

  // Método para eliminar una categoría
  deleteCategory (id: number): void {
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
            })
            // Recargar categorías
            this.loadCategories()
          },
          error: error => {
            // Mostrar mensaje de error
            Swal.fire({
              title: 'Error al eliminar la categoría',
              icon: 'error',
              confirmButtonColor: '#52667a'
            })
          }
        })
      }
    })
  }

  // Método para cancelar la edición
  cancelEdit (): void {
    this.showEditForm = false
    this.editingCategory = null
  }

  // Método para obtener el nombre de la categoría padre
  getParentCategoryName (parentId: number): string {
    if (!parentId || parentId === 0) return 'Sin Padre'

    const parentCategory = this.categories.find(c => c.id === parentId)
    return parentCategory ? parentCategory.name : 'Desconocido'
  }
}
