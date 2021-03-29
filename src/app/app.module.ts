import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],

  imports: [
    TooltipModule.forRoot(),
    BrowserModule,
    TooltipModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
