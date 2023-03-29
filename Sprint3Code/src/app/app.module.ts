import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './HomePage/HomePage.component';
import {HttpClientModule} from "@angular/common/http";
import { ThanksComponent } from './thanks/thanks.component';
import { PremiumPackageComponent } from './premium-package/premium-package.component';
import { RegistrationComponent } from './registration/registration.component';
import { StarterPackageComponent } from './starter-package/starter-package.component';
import { ShopComponent } from './shop/shop.component';
import { CreditPageComponent } from './credit-page/credit-page.component';
import { CartComponent } from './cart/cart.component';
import {RouterTestingModule} from "@angular/router/testing";
import { IntermedPackageComponent } from './intermed-package/intermed-package.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    BrowserModule,
    RouterTestingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'cart', component: CartComponent },
    ])
  ],
  declarations: [
    AppComponent,
    IntermedPackageComponent,
    HomePageComponent,
    LoginComponent,
    ThanksComponent,
    PremiumPackageComponent,
    RegistrationComponent,
    StarterPackageComponent,
    ShopComponent,
    CreditPageComponent,
    CartComponent
  ],
  providers: [],
  bootstrap: [AppComponent, LoginComponent, HomePageComponent, RegistrationComponent, PremiumPackageComponent]
})
export class AppModule { }
