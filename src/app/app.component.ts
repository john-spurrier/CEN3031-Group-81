import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Login Page</h1>
    <app-login></app-login>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
}
