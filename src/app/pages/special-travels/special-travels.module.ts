import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecialTravelsComponent } from './special-travels.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SpecialTravelsComponent],
  exports: [SpecialTravelsComponent]
})
export class SpecialTravelsModule { }
