import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { LoginComponent } from './app/login/login.component';
import { HomePageComponent } from './app/HomePage/HomePage.component';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
  platformBrowserDynamic().bootstrapModule(LoginComponent)
  .catch(err => console.error(err));
  platformBrowserDynamic().bootstrapModule(HomePageComponent)
  .catch(err => console.error(err));
