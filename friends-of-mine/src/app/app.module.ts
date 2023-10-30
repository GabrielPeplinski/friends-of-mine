import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from '@components/navbar/navbar.component';
import { FooterComponent } from '@components/footer/footer.component';
import { CreateContactPageComponent } from './pages/create-contact-page/create-contact-page.component';
import { ShowContactPageComponent } from './pages/show-contact-page/show-contact-page.component';
import { SearchBoxComponent } from '@components/navbar/search-box/search-box.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CreateContactPageComponent,
    ShowContactPageComponent,
    SearchBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
