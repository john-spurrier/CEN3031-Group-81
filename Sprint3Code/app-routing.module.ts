import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './HomePage/HomePage.component';
import {LoginComponent} from "./login/login.component";
import {AppComponent} from "./app.component";
import {ThanksComponent} from "./thanks/thanks.component";
import { PremiumPackageComponent } from './premium-package/premium-package.component';
import { RegistrationComponent } from './registration/registration.component';
import {StarterPackageComponent} from "./starter-package/starter-package.component";
import { ShopComponent } from './shop/shop.component';
import { CreditPageComponent } from './credit-page/credit-page.component';

const routes: Routes = [
{ path: '', component: HomePageComponent },
  {path: 'login', component: LoginComponent },
  {path: 'thanks', component: ThanksComponent},
  {path: 'premium-package', component: PremiumPackageComponent },
  {path: 'register', component: RegistrationComponent},
  {path: 'starter-package', component: StarterPackageComponent },
  {path: 'shop', component: ShopComponent},
  {path: 'credit', component: CreditPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
