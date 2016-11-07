import { RouterModule, Routes }    from '@angular/router';



import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent}
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
