import { Component } from '@angular/core';

import '../style/app.scss';

@Component({
  selector: 'my-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.scss')]
})
export class AppComponent {
  title = 'app works!';
}
