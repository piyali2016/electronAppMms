import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

import { LoginModel } from './login.model';


@Component({
  selector: 'my-loginbox',
  template: require('./login.component.html'),
  styles: [require('./login.component.scss')],
  providers: [ApiService]
})

export class LoginComponent {

  model = new LoginModel('', '');
  submitted = false;

  constructor(private ls: ApiService) {
    console.log('Login');
  }

  onSubmit() {
    this.submitted = true;
    this.ls.loginAuthenticateService(this.model);
   }
}
