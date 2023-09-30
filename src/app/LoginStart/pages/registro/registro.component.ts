import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-registro',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
    registroForm: FormGroup = new FormGroup({});

    constructor(
        private formBuilder: FormBuilder,
        private router: Router
    ) { }

    ngOnInit() {
        this.registroForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', [Validators.required]]
        });
    }

    onSubmit() {
        if (this.registroForm.valid) {
            // Envía los datos al servidor (debes implementar esta parte)
            const email = this.registroForm.get('email')?.value;
            const password = this.registroForm.get('password')?.value;

            // Almacena las credenciales en el localStorage
            localStorage.setItem('registeredEmail', email);
            localStorage.setItem('registeredPassword', password);

            // Luego, redirige al usuario a la siguiente página de registro (paso 2)
            this.router.navigate(['/registro/paso2']);
        }
    }
}
