import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContractsComponent} from "./contracts/pages/contracts/contracts.component";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [
    ContractsComponent
  ],
  exports: [RouterModule, ContractsComponent]
})
export class AppRoutingModule { }
