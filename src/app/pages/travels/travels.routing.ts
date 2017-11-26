import { Routes, RouterModule } from '@angular/router';

import { TravelOrderComponent } from './travel-order/travel-order.component';
import { TravelDetailComponent } from './travel-detail/travel-detail.component';
import { AllTravelsComponent } from './all-travels/all-travels.component';
import { TravelsComponent } from './travels.component';

const routes: Routes = [
  {
    path: '',
    component: TravelsComponent,
    children: [
      { path: 'all', component: AllTravelsComponent },
      { path: 'detail/:id', component:  TravelDetailComponent },
      { path: 'order', component:  TravelOrderComponent },
    ]
  }
];

export const routing = RouterModule.forChild(routes);