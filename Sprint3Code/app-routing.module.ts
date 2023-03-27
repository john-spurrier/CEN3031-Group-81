import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './HomePage.component';
import {LoginComponent} from "./login.component";
import {AppComponent} from "./app.component";
import {ThanksComponent} from "./thanks.component";
import { PremiumPackageComponent } from './premium-package.component';
import {StarterPackageComponent} from "./starter-package.component";
import {ShopComponent} from "./shop.component";

const routes: Routes = [
{ path: '', component: HomePageComponent },
  {path: 'login', component: LoginComponent },
  {path: 'thanks', component: ThanksComponent},
  {path: 'premium-package', component: PremiumPackageComponent },
  {path: 'starter-package', component: StarterPackageComponent },
  {path: 'shop', component: ShopComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
