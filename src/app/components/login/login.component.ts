import { Component } from '@angular/core';
import { UserDatabase } from '../../services/db/db.user.service';

import { LoginModel } from './login.model';


@Component({
  selector: 'my-loginbox',
  template: require('./login.component.html'),
  styles: [require('./login.component.scss')],
  providers: [UserDatabase]
})

export class LoginComponent {

  model = new LoginModel('', '');
  submitted = false;
  loginError = '';

  constructor(private ds: UserDatabase) {
    console.log('Login');
  }

  onSubmit() {
    this.submitted = true;
    this.loginAuthenticateService(this.model);
   }


  loginAuthenticateService(loginModel) {
     console.log(loginModel);
     var userObj;
     if(loginModel.userid && loginModel.pwd){
        userObj = this.ds.findUserByQuery(loginModel);
        console.log(userObj);
     }else{
      this.loginError = '';
     }
  }

}
