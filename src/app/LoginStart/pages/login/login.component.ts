import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm!: FormGroup; // Inicializado en ngOnInit
    submitted = false;
    loginFailed = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router
    ) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]]
        });

        // Obtener las credenciales registradas del localStorage
        const registeredEmail = localStorage.getItem('registeredEmail') || '';
        const registeredPassword = localStorage.getItem('registeredPassword') || '';

        // Poblar los campos del formulario con las credenciales registradas
        this.loginForm.get('email')!.setValue(registeredEmail);
        this.loginForm.get('password')!.setValue(registeredPassword);
    }

    onSubmit() {
        this.submitted = true;

        if (this.loginForm.invalid) {
            return;
        }

        // Obtén las credenciales ingresadas por el usuario
        const email = this.loginForm.get('email')!.value;
        const password = this.loginForm.get('password')!.value;

        // Compara las credenciales con las credenciales registradas
        const registeredEmail = localStorage.getItem('registeredEmail');
        const registeredPassword = localStorage.getItem('registeredPassword');

        if (email === registeredEmail && password === registeredPassword) {
            // Autenticación exitosa, redirige a la página de inicio
            this.router.navigate(['/home']);
        } else {
            // Autenticación fallida, muestra un mensaje de error
            this.loginFailed = true;
        }
    }
}
