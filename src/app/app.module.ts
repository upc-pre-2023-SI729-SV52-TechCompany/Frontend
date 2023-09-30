import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchVehicleComponent } from './search-vehicle/pages/search-vehicle/search-vehicle.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from "@angular/material/tabs";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import { ContractsComponent } from './contracts/pages/contracts/contracts.component';
import {ContractCardComponent} from "./contracts/components/contract-card/contract-card.component";

@NgModule({
  declarations: [
    AppComponent,
    SearchVehicleComponent,
    ContractsComponent,
    ContractCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
