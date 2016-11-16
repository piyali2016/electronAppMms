import { Component, OnInit } from '@angular/core';
import { Router }    from '@angular/router';
import { UserDatabase } from '../../services/db/db.user.service';
import { ApiService } from '../../services/api.service';

import { LoginModel } from './login.model';


@Component({
  selector: 'my-loginbox',
  template: require('./login.component.html'),
  styles: [require('./login.component.scss')],
  providers: [UserDatabase]
})

export class LoginComponent implements OnInit {

  public model = new LoginModel('', '');
  public submitted: Boolean;
  public loginError: string;
  public ls;
  courses: any;

  constructor(private _router: Router, private ds: UserDatabase) { }
  ngOnInit() {
    this.ls = new ApiService();
    this.submitted = false;
    this.loginError = '';
    console.log('Login');
  }

  onSubmit() {
    let that = this;
    that.loginError = '';
    this.ds.findUserByQuery(this.model).then(
            (userData) => {
              let userUID = ( userData[0] && userData[0]._id ) ? userData[0]._id : false;
              if ( userUID ) {
                that._router.navigate( ['home'] );
              } else {
                that.loginError = that.ls.INVALID_LOGIN;
              }
            },
            (err) => {
              console.log( err );
            }
    );
  }
}
