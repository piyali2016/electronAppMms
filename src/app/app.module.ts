import { NgModule }       from  '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { routing }        from './app.routing';
import { LoadingAnimateModule, LoadingAnimateService } from 'ng2-loading-animate';

import { AppComponent }   from './app.component';
import { LoginComponent }  from './login/login.component';
import { HomeComponent }  from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
    imports:      [
        BrowserModule,
        routing,
        LoadingAnimateModule.forRoot()
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        AboutComponent
    ],
    providers: [
       LoadingAnimateService
    ],
    bootstrap:    [AppComponent]
})
export class AppModule {}