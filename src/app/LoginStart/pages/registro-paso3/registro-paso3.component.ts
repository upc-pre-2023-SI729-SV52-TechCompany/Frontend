import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-paso3',
  templateUrl: './registro-paso3.component.html',
  styleUrls: ['./registro-paso3.component.css']
})
export class RegistroPaso3Component implements OnInit {
  registroPaso3Form: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.registroPaso3Form = this.formBuilder.group({
      username: ['', [Validators.required]],
      description: ['', [Validators.required]],
      acceptPolicy: [false, [Validators.requiredTrue]],
      acceptInfo: [false, [Validators.requiredTrue]]
    });
  }

  onSubmit() {
    if (this.registroPaso3Form.valid) {
      // Aquí puedes enviar los datos al servidor (por ejemplo, usando un servicio HTTP)
      // Supongamos que se ha enviado con éxito
      console.log('Datos enviados al servidor (paso 3):', this.registroPaso3Form.value);

      // Luego, redirige al usuario a la página de inicio de sesión
      this.router.navigate(['/login']);
    }
  }
}
