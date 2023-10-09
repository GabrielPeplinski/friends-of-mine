import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateContactPageComponent} from "./pages/create-contact-page/create-contact-page.component";

const routes: Routes = [
  {
    path: 'novo-contato', component: CreateContactPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
