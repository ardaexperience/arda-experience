import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OwlModule } from 'ngx-owl-carousel';


import { AppComponent } from './app.component';

import { NavbarModule } from './pages/navbar/navbar.module';
import { HeaderModule } from './pages/header/header.module';
import { ServicesModule } from './pages/services/services.module';
import { WhyArdaModule } from './pages/why-arda/why-arda.module';
import { SpecialTravelsModule } from './pages/special-travels/special-travels.module';
import { HomeTravelsModule } from './pages/home-travels/home-travels.module';
import { LoginModule } from './pages/login/login.module';
import { FooterModule } from './pages/footer/footer.module';
import { ContactUsModule } from './pages/contact-us/contact-us.module';

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
    WhyArdaModule,
    SpecialTravelsModule,
    FooterModule,
    HomeTravelsModule,
    ContactUsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
