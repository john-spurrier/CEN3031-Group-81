import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { HomePageComponent } from './HomePage.component';
import {HttpClientModule} from "@angular/common/http";
import { ThanksComponent } from './thanks.component';
import { PremiumPackageComponent } from './premium-package.component';
import { RegistrationComponent } from './registration.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    ThanksComponent,
    PremiumPackageComponent,
    RegistrationComponent
  ],
  providers: [],
  bootstrap: [AppComponent, LoginComponent, HomePageComponent, RegistrationComponent, PremiumPackageComponent]
})
export class AppModule { }
