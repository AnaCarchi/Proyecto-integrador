
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users.service'; // Asegúrate de tener el servicio para manejar los usuarios
import { User } from '../user.model'; // Importar el modelo de usuario
import { Router } from '@angular/router'; // Si deseas redirigir después de la creación
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users-form',
  standalone: true,  
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {
  userForm: FormGroup; // Formulario reactivo

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService, // Para manejar la creación o actualización de usuarios
    private router: Router // Para redirigir a una página de éxito o lista de usuarios
  ) { }

  ngOnInit(): void {
    // Crear el formulario con las validaciones
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      lastname: ['', [Validators.required, Validators.maxLength(100)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\+?[0-9]{7,15}$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      image: [''], // Si es necesario, puedes agregar un campo de imagen para el archivo
      roles: [[], Validators.required] // Los roles pueden ser un arreglo (selección múltiple)
    });
  }

  // Método para enviar el formulario
  onSubmit(): void {
    if (this.userForm.valid) {
      const userData: User = this.userForm.value; // Obtenemos los datos del formulario
      this.usersService.createUser(userData).subscribe(
        (response) => {
          // Aquí redirigiríamos a otra vista si es necesario, o mostraríamos un mensaje
          this.router.navigate(['/users']); // Redirigir a la lista de usuarios, por ejemplo
        },
        (error) => {
          console.error('Error al crear usuario', error);
        }
      );
    } else {
      // Si el formulario no es válido, mostrar un mensaje o marcar los campos incorrectos
      console.log('Formulario no válido');
    }
  }
}
