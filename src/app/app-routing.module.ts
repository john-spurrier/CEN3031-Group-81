import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './HomePage.component';
import {LoginComponent} from "./login.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
{ path: '', component: HomePageComponent },
{path: 'login', component: LoginComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }