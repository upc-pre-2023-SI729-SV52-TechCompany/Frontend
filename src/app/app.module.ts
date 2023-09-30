import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';

import {AppRoutingModule} from "./app-routing.module";

import {SearchVehicleComponent} from './search-vehicle/pages/search-vehicle/search-vehicle.component';
import {ContractsComponent} from './contracts/pages/contracts/contracts.component';
import {ContractCardComponent} from "./contracts/components/contract-card/contract-card.component";
import {HomeComponent} from './home/pages/home/home.component';
import {ProfileComponent} from './profile/pages/profile/profile.component';
import {SupportComponent} from './support/pages/support/support.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule} from "@angular/material/tabs";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatBadgeModule} from "@angular/material/badge";
import {MatToolbarModule} from "@angular/material/toolbar";

import {RouterLink, RouterOutlet} from "@angular/router";
import { ServiceCardComponent } from './home/components/service-card/service-card.component';
import { HistoryCardComponent } from './home/components/history-card/history-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchVehicleComponent,
    ContractsComponent,
    ContractCardComponent,
    HomeComponent,
    ProfileComponent,
    SupportComponent,
    ServiceCardComponent,
    HistoryCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatBadgeModule,
    RouterOutlet,
    MatToolbarModule,
    RouterLink,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
