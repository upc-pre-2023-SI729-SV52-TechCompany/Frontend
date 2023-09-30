import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-paso2',
  templateUrl: './registro-paso2.component.html',
  styleUrls: ['./registro-paso2.component.css']
})
export class RegistroPaso2Component implements OnInit {
  registroPaso2Form: FormGroup = new FormGroup({});
  profilePreviewUrl: string | null = null;
  cvDocumentName: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.registroPaso2Form = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      country: ['', [Validators.required]],
      birthdate: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      idNumber: ['', [Validators.required]],
      profilePhoto: [null], // Para la foto de perfil
      cvDocument: [null]   // Para el documento CV
    });
  }

  onSubmit() {
    if (this.registroPaso2Form.valid) {
      // Aquí puedes enviar los datos al servidor (por ejemplo, usando un servicio HTTP)
      // Supongamos que se ha enviado con éxito
      console.log('Datos enviados al servidor (paso 2):', this.registroPaso2Form.value);

      // Luego, redirige al usuario a la tercera página de registro (paso 3)
      this.router.navigate(['/registro/paso3']);
    }
  }
  onPhotoChange(event: any) {
    const file = event?.target?.files[0]; // Verificar nulidad de event y target
    if (file) {
      // Mostrar una vista previa de la foto de perfil (opcional)
      const reader = new FileReader();
      reader.onload = (e) => {
        this.profilePreviewUrl = e.target?.result as string; // Verificar nulidad de e y target
      };
      reader.readAsDataURL(file);

      // Establecer el valor del campo 'profilePhoto' en el formulario
      this.registroPaso2Form.get('profilePhoto')?.setValue(file);
    }
  }

  onCVDocumentChange(event: any) {
    const file = event?.target?.files[0]; // Verificar nulidad de event y target
    if (file) {
      // Obtener el nombre del archivo CV seleccionado
      this.cvDocumentName = file.name;

      // Establecer el valor del campo 'cvDocument' en el formulario
      this.registroPaso2Form.get('cvDocument')?.setValue(file);
    }
  }
}
