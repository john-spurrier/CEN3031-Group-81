import { Component } from '@angular/core';

@Component({
  selector: 'app-credit-page',
  templateUrl: './credit-page.component.html',
  styleUrls: ['./credit-page.component.css']
})
export class CreditPageComponent {
  creditCardNumber: string = '';
  securityCode: string = '';
  expirationMonth: string = '';
  expirationYear: string = '';

  onSubmit(): void {
    if (this.isFormValid()) {
      console.log('Credit Card Number:', this.creditCardNumber);
      console.log('Security Code:', this.securityCode);
      console.log('Expiration Month:', this.expirationMonth);
      console.log('Expiration Year:', this.expirationYear);
    }
  }

  isFormValid(): boolean {
    // Check if all fields are valid
    return this.creditCardNumber.length === 16 &&
           this.securityCode.length === 3 &&
           this.expirationMonth !== '' &&
           this.expirationYear.length === 2;
  }
}
