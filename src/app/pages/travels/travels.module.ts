import { TravelService } from './../../shared/services/travel.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelsComponent } from './travels.component';
import { AllTravelsComponent } from './all-travels/all-travels.component';
import { TravelDetailComponent } from './travel-detail/travel-detail.component';
import { routing } from './travels.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';
import { TravelOrderComponent } from './travel-order/travel-order.component';


@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,    
    routing
  ],
  declarations: [TravelsComponent, AllTravelsComponent, TravelDetailComponent, TravelOrderComponent],
  exports: [AllTravelsComponent, TravelDetailComponent],
  providers: [TravelService]
})
export class TravelsModule { }
