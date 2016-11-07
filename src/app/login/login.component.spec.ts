import {
  inject,
  addProviders
} from '@angular/core/testing';

// Load the implementations that should be tested
import { LoginComponent } from './login.component';

describe('Login', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    addProviders([
      LoginComponent
    ])
  });

  it('should log ngOnInit', inject([LoginComponent], (login) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    login.ngOnInit();
    expect(console.log).toHaveBeenCalledWith('Login');
  }));

});
