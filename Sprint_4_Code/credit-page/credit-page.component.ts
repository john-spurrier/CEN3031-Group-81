import { Component } from '@angular/core';
import { CartComponent } from "../cart/cart.component";
import {CartService} from "../cart.service";
import {Product} from "../product";
import {PackageService} from "../package.service";

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
  constructor(
    private cartService: CartService, private packageService: PackageService
  ) { }

  ngOnInit() {
    const products: Product[] = this.cartService.getItems();
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === 1) {
        this.packageService.setPackage1(true);
      }
      else if (products[i].id === 2){
        this.packageService.setPackage2(true);
      }
      else if (products[i].id === 3){
        this.packageService.setPackage3(true);
      }
    }
  }

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

  products: Product[] = this.cartService.items;
  getTotalPrice(): string {
    var temp = 0;
    for (let i = 0; i < this.products.length; i++)
    {
      temp += this.products[i].price;
    }
    return temp.toFixed(2);
  }
  total: string = this.getTotalPrice();

}
