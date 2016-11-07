import { NgModule }       from  '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { routing }        from './app.routing';

import { AppComponent }   from './app.component';
import { LoginComponent }  from './login/login.component';
import { RegisterComponent }  from './register/register.component';

@NgModule({
    imports:      [
        BrowserModule,
        routing
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent        
    ],
    bootstrap:    [AppComponent]
})
export class AppModule {}