import {
  inject,
  addProviders
} from '@angular/core/testing';

// Load the implementations that should be tested
import { RegisterComponent } from './register.component';

describe('Register', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    addProviders([
      RegisterComponent
    ]);
  });

  it('should log ngOnInit', inject([RegisterComponent], (register) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    register.ngOnInit();
    expect(console.log).toHaveBeenCalledWith('Register');
  }));

});
