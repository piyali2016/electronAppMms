import { RouterModule, Routes }    from '@angular/router';



import { LoginComponent } from './login/login.component';
import { RegisterComponent }  from './register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'login',pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
