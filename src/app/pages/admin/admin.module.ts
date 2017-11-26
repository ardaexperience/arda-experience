import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';

import { routing } from './admin.routing';
import { AllUsersComponent, ButtonUserDetail } from './user-management/all-users/all-users.component';
import { UserDetailComponent } from './user-management/user-detail/user-detail.component';
import { AllOrdersComponent, ButtonOrderDetail } from './order-management/all-orders/all-orders.component';
import { OrderDetailComponent } from './order-management/order-detail/order-detail.component';
import { ClientService } from './../../shared/services/client.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderService } from '../../shared/services/order.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TravelRegisterComponent } from './travel-register/travel-register.component';

@NgModule({
  imports: [
    CommonModule,
    Ng2SmartTableModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: [
    AdminComponent, 
    AllUsersComponent, 
    UserDetailComponent, 
    AllOrdersComponent, 
    OrderDetailComponent,
    ButtonUserDetail,
    ButtonOrderDetail,
    DashboardComponent,
    TravelRegisterComponent,
  ],
  exports: [
    AdminComponent,
    AllUsersComponent,
    UserDetailComponent
  ],
  entryComponents: [ButtonUserDetail, ButtonOrderDetail],
  providers: [ClientService, OrderService]
})
export class AdminModule { }
