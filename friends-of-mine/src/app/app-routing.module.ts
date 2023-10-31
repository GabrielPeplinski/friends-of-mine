import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateContactPageComponent} from "@pages/create-contact-page/create-contact-page.component";
import {ShowContactPageComponent} from "@pages/show-contact-page/show-contact-page.component";
import {ListContactsPageComponent} from "@pages/list-contacts-page/list-contacts-page.component";

const routes: Routes = [
  {
    path: 'contatos', component: ListContactsPageComponent
  },
  {
    path: 'contatos/:id', component: ShowContactPageComponent
  },
  {
    path: 'novo-contato', component: CreateContactPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
