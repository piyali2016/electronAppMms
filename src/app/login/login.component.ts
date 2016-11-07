import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login-box',
  template: require('./login.component.html'),
  styles: [require('./login.component.scss')]
})
export class LoginComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Login');
  }

}
