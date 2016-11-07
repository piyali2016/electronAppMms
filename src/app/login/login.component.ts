import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'login-box',
  template: require('./login.component.html'),
  styles: [require('./login.component.scss')],
  providers: [ApiService]
})

export class LoginComponent implements OnInit {

  constructor(private ls: ApiService) {}	

  ngOnInit() {
    console.log('Login');
  }

}