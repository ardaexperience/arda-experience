import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OwlModule } from 'ngx-owl-carousel';


import { AppComponent } from './app.component';

import { NavbarModule } from './pages/navbar/navbar.module';
import { HeaderModule } from './pages/header/header.module';
import { ServicesModule } from './pages/services/services.module';
import { WhyArdaModule } from './pages/why-arda/why-arda.module';
import { LoginModule } from './pages/login/login.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    OwlModule,
    NavbarModule,
    HeaderModule,
    ServicesModule,
    WhyArdaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
