import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './LoginStart/pages/login/login-form.component';
import { ClientFormComponent } from './LoginStart/pages/registro-cliente/registro/client-form.component';
import { ClientForm2Component } from './LoginStart/pages/registro-cliente/registro-paso2/client-form2.component';
import { ClientForm3Component } from './LoginStart/pages/registro-cliente/registro-paso3/client-form3.component';
import { CompanyFormComponent } from "./LoginStart/pages/register-company/registro/company-form.component";
import { CompanyForm2Component } from "./LoginStart/pages/register-company/registro-paso2/company-form2.component";
import { CompanyForm3Component } from "./LoginStart/pages/register-company/registro-paso3/company-form3.component";
import { CompanyForm4Component } from "./LoginStart/pages/register-company/registro-paso4/company-form4.component";
import { CompanyForm5Component } from "./LoginStart/pages/register-company/registro-paso5/company-form5.component";
import { ClientSettingsComponent } from "./settings/client-settings/client-settings.component";
import { CompanySettingsComponent } from "./settings/company-settings/company-settings.component";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginFormComponent },
  { path: 'registro', component: ClientFormComponent },
  { path: 'registro/paso2', component: ClientForm2Component },
  { path: 'registro/paso3', component: ClientForm3Component },
  { path: 'registrocomp', component: CompanyFormComponent },
  { path: 'registrocomp/paso2', component: CompanyForm2Component },
  { path: 'registrocomp/paso3', component: CompanyForm3Component },
  { path: 'registrocomp/paso4', component: CompanyForm4Component },
  { path: 'registrocomp/paso5', component: CompanyForm5Component },
  { path: 'client-settings/:id', component: ClientSettingsComponent },
  { path: 'company-settings/:id', component: CompanySettingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
