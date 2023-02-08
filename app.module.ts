import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule} from "@angular/common";

import { AppComponent } from './app.component';
import { AccountSetupComponent } from './account-setup/account-setup.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountSetupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
