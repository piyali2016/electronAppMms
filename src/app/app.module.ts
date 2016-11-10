import { NgModule }       from  '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule }  from '@angular/platform-browser';

import { routing }        from './app.routing';
import { ApiService }     from './services/api.service';

import { AppComponent }   from './app.component';
import { LoginComponent }  from './components/login/login.component';
import { RegisterComponent }  from './components/register/register.component';

@NgModule({
    imports:      [
        BrowserModule,
        routing,
        FormsModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent
    ],
    providers: [ApiService],
    bootstrap:    [AppComponent]
})
export class AppModule {}
