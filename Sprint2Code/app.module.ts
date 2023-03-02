import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { HomePageComponent } from './HomePage.component';
import {HttpClientModule} from "@angular/common/http";
import { ThanksComponent } from './thanks.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    ThanksComponent
  ],
  providers: [],
  bootstrap: [AppComponent, LoginComponent, HomePageComponent]
})
export class AppModule { }
