import { LoginComponent } from './../login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavbarComponent, LoginComponent],
  exports: [NavbarComponent],
  entryComponents: [LoginComponent]
})
export class NavbarModule { }
