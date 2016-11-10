import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
  title = 'Services';
  loginAuthenticateService(loginModel) {
     console.log(loginModel);
  }
}
