import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateContactPageComponent} from "@pages/create-contact-page/create-contact-page.component";
import {ShowContactPageComponent} from "@pages/show-contact-page/show-contact-page.component";
import {ListContactsPageComponent} from "@pages/list-contacts-page/list-contacts-page.component";
import {FavoriteContactsPageComponent} from "@pages/favorite-contacts-page/favorite-contacts-page.component";
import {permissionGuard} from "@guards/permission.guard";

const routes: Routes = [
  {
    path: 'contatos', component: ListContactsPageComponent, canActivate: [permissionGuard]
  },
  {
    path: 'contatos/novo-contato', component: CreateContactPageComponent
  },
  {
    path: 'contatos/favoritos', component: FavoriteContactsPageComponent
  },
  {
    path: 'contatos/:id', component: ShowContactPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
