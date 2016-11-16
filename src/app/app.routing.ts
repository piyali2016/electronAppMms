import { RouterModule, Routes }    from '@angular/router';



import { LoginComponent } from './components/login/login.component';
import { RegisterComponent }  from './components/register/register.component';
import { HomeComponent }  from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'home', component: HomeComponent},
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
