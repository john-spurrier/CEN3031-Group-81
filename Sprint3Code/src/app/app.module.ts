import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './HomePage/HomePage.component';
import {HttpClientModule} from "@angular/common/http";
import { ThanksComponent } from './thanks/thanks.component';
import { PremiumPackageComponent } from './premium-package/premium-package.component';
import { StarterPackageComponent } from './starter-package/starter-package.component';
import { ShopComponent } from './shop/shop.component';
import { IntermedPackageComponent } from './intermed-package/intermed-package.component';
import { CartComponent } from './cart/cart.component';
import {RouterModule} from "@angular/router";
import {RegistrationComponent} from "./registration/registration.component";
import {CreditPageComponent} from "./credit-page/credit-page.component";

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'cart', component: CartComponent },
    ])
  ],
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    ThanksComponent,
    PremiumPackageComponent,
    StarterPackageComponent,
    ShopComponent,
    IntermedPackageComponent,
    CartComponent,
    RegistrationComponent,
    CreditPageComponent
  ],
  providers: [],
  bootstrap: [AppComponent, LoginComponent, HomePageComponent]
})
export class AppModule { }
