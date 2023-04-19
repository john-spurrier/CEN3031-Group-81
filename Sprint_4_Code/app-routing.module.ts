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
import { CartComponent } from './cart/cart.component';
import { IntermedPackageComponent } from './intermed-package/intermed-package.component';
import { LoginGuard } from './login.guard';
import { MyPackageComponent } from './my-package/my-package.component';
import { PackageBoughtComponent } from './package-bought/package-bought.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LoginComponent },
  {path: 'thanks', component: ThanksComponent},
  {path: 'premium-package', component: PremiumPackageComponent },
  {path: 'register', component: RegistrationComponent},
  {path: 'starter-package', component: StarterPackageComponent  },
  {path: 'intermediate-package', component: IntermedPackageComponent },
  {path: 'shop', component: ShopComponent, canActivate: [LoginGuard]},
  {path: 'cart', component: CartComponent},
  {path: 'credit', component: CreditPageComponent},
  {path: 'package', component: MyPackageComponent, canActivate: [LoginGuard]},
  {path: 'package-bought', component: PackageBoughtComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
