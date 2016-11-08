import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-registerbox',
  template: require('./register.component.html'),
  styles: [require('./register.component.scss')]
})
export class RegisterComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Register');
  }

}
