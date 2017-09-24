import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeTravelsComponent } from './home-travels.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeTravelsComponent],
  exports: [HomeTravelsComponent]
})
export class HomeTravelsModule { }
