import { Component } from '@angular/core';
import { ContactService } from '../../../services/contact.service'; // Asegúrate de ajustar la ruta al servicio
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ContactService] // Agrega el servicio como proveedor
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  successMessage = '';
  errorMessage = '';

  constructor(
    private contactService: ContactService,
    private fb: FormBuilder
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.successMessage = '';
      this.errorMessage = '';
      
      this.contactService.saveContact(this.contactForm.value).subscribe({
        next: (response) => {
          this.successMessage = '¡Contacto guardado exitosamente!';
          this.contactForm.reset();
        },
        error: (error) => {
          this.errorMessage = 'Hubo un error al guardar el contacto. Intenta de nuevo.';
          console.error('Error al guardar el contacto:', error);
        },
        complete: () => this.isSubmitting = false
      });
    }
  }
}
