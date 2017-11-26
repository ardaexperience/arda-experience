import { RegisterComponent } from './register/register.component';
import { PagesComponent } from './pages.component';
import { Routes, RouterModule } from '@angular/router';

import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'pages', 
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: './home/home.module#HomeModule', },
      { path: 'travels', loadChildren: './travels/travels.module#TravelsModule' },
      { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
      { path: 'contact', component: ContactUsComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ]
  }
];

export const routing = RouterModule.forChild(routes);