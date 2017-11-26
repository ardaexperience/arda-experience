import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModule } from './home/home.module';
import { TravelsModule } from './travels/travels.module';
import { AdminModule } from './admin/admin.module';

import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

import { routing } from './pages.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    TravelsModule,
    HomeModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule,
    routing
  ],
  declarations: [
    PagesComponent,
    NavbarComponent, 
    FooterComponent, 
    LoginComponent,
    ContactUsComponent,
    RegisterComponent,
  ],
  entryComponents: [LoginComponent]
})
export class PagesModule { }
