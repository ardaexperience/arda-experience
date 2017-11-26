import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AllUsersComponent } from './user-management/all-users/all-users.component';
import { UserDetailComponent } from './user-management/user-detail/user-detail.component';
import { AllOrdersComponent } from './order-management/all-orders/all-orders.component';
import { OrderDetailComponent } from './order-management/order-detail/order-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TravelRegisterComponent } from './travel-register/travel-register.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'all-users', component: AllUsersComponent },
      { path: 'user/:id', component: UserDetailComponent},
      { path: 'all-orders', component: AllOrdersComponent },
      { path: 'order/:id', component: OrderDetailComponent },
      { path: 'travel-register', component: TravelRegisterComponent }
    ]
  }
];

export const routing = RouterModule.forChild(routes);