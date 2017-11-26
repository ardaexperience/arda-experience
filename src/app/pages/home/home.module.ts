
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { WhyArdaComponent } from './why-arda/why-arda.component';
import { SpecialTravelsComponent } from './special-travels/special-travels.component';
import { ServicesComponent } from './services/services.component';
import { HomeTravelsComponent } from './home-travels/home-travels.component';
import { HeaderComponent } from './header/header.component';

import { routing } from './home.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    HomeComponent,
    WhyArdaComponent,
    SpecialTravelsComponent,
    ServicesComponent,
    HomeTravelsComponent,
    HeaderComponent
  ],
  exports: [
    WhyArdaComponent,
    SpecialTravelsComponent,
    ServicesComponent,
    HomeTravelsComponent,
    HeaderComponent,
  ]
})
export class HomeModule { }
