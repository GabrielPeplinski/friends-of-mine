import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateContactPageComponent} from "@pages/create-contact-page/create-contact-page.component";
import {ShowContactPageComponent} from "@pages/show-contact-page/show-contact-page.component";
import {ListContactsPageComponent} from "@pages/list-contacts-page/list-contacts-page.component";
import {FavoriteContactsPageComponent} from "@pages/favorite-contacts-page/favorite-contacts-page.component";
import {permissionGuard} from "@guards/permission.guard";
import {HomePageComponent} from "@pages/home-page/home-page.component";

const routes: Routes = [
  {
    path: '', component: HomePageComponent
  },
  {
    path: 'contatos', children: [
      {
        path: '', component: ListContactsPageComponent, canActivate: [permissionGuard]
      },
      {
        path: 'novo-contato', component: CreateContactPageComponent
      },
      {
        path: 'favoritos', component: FavoriteContactsPageComponent
      },
      {
        path: ':id', component: ShowContactPageComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
