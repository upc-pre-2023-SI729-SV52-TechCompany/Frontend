import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/pages/home/home.component";
import {ProfileComponent} from "./profile/pages/profile/profile.component";
import {ContractsComponent} from "./contracts/pages/contracts/contracts.component";
import {SupportComponent} from "./support/pages/support/support.component";
import {SearchVehicleComponent} from "./search-vehicle/pages/search-vehicle/search-vehicle.component";
import { LoginComponent} from "./LoginStart/pages/login/login.component";
import { RegistroComponent} from "./LoginStart/pages/registro/registro.component";
import { RegistroPaso2Component} from "./LoginStart/pages/registro-paso2/registro-paso2.component";
import { RegistroPaso3Component} from "./LoginStart/pages/registro-paso3/registro-paso3.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'search-vehicle', component: SearchVehicleComponent},
  {path: 'contracts', component: ContractsComponent},
  {path: 'support', component: SupportComponent},
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'registro/paso2', component: RegistroPaso2Component },
  { path: 'registro/paso3', component: RegistroPaso3Component },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}