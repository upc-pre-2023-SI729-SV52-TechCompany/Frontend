import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModule } from 'src/shared/material.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Importa tus componentes y servicios aquí
import { AppComponent } from './app.component';
import { LoginFormComponent } from './LoginStart/pages/login/login-form.component';
import { ClientFormComponent} from "./LoginStart/pages/registro-cliente/registro/client-form.component";
import { ClientForm2Component } from './LoginStart/pages/registro-cliente/registro-paso2/client-form2.component';
import { ClientForm3Component } from './LoginStart/pages/registro-cliente/registro-paso3/client-form3.component';
import { CompanyFormComponent } from "./LoginStart/pages/register-company/registro/company-form.component";
import { CompanyForm2Component } from "./LoginStart/pages/register-company/registro-paso2/company-form2.component";
import { CompanyForm3Component } from "./LoginStart/pages/register-company/registro-paso3/company-form3.component";
import { CompanyForm4Component } from "./LoginStart/pages/register-company/registro-paso4/company-form4.component";
import { CompanyForm5Component } from "./LoginStart/pages/register-company/registro-paso5/company-form5.component";
import { ClientSettingsComponent} from "./settings/client-settings/client-settings.component";
import { CompanySettingsComponent } from "./settings/company-settings/company-settings.component";
import { ToolbarLoginComponent } from "./Public/components/toolbar-login/toolbar-login.component";
import { ToolbarClientComponent } from "./Public/components/toolbar-profile/toolbar-client/toolbar-client.component";
import { ToolbarCompanyComponent } from "./Public/components/toolbar-profile/toolbar-company/toolbar-company.component";
import { AppRoutingModule } from "./app-routing.module";
import { SharedService } from "./services/contracts/shared.service";
import { MatMenuModule } from "@angular/material/menu";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './Public/components/footer/footer.component';
import { MatTabsModule } from "@angular/material/tabs";

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    ClientFormComponent,
    ClientForm2Component,
    ClientForm3Component,
    CompanyFormComponent,
    CompanyForm2Component,
    CompanyForm3Component,
    CompanyForm4Component,
    CompanyForm5Component,
    ClientSettingsComponent,
    CompanySettingsComponent,
    ToolbarLoginComponent,
    ToolbarClientComponent,
    ToolbarCompanyComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatMenuModule,
    HttpClientModule,
    RouterModule,
    MatTabsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]

})
export class AppModule { }
