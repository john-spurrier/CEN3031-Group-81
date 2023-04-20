import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import {Product} from "../product";
import {PackageService} from "../package.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent{
  isPackage1 = false;
  isPackage2 = false;
  isPackage3 = false;
  items = this.cartService.getItems();
  constructor(
    private cartService: CartService, private packageService: PackageService
  ) { }

  ngOnInit() {
    const products: Product[] = this.cartService.getItems();
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === 1) {
        this.isPackage1 = true;
        this.packageService.setPackage1(true);
      }
      else if (products[i].id === 2){
        //console.log('isProductAdded:', this.isPackage2);
        this.isPackage2 = true;
        this.packageService.setPackage2(true);
      }
      else if (products[i].id === 3){
        this.isPackage3 = true;
        this.packageService.setPackage3(true);
      }
    }
    if(!this.isPackage1)
    {
      this.packageService.setPackage1(false);
    }
    if(!this.isPackage2)
    {
      this.packageService.setPackage2(false);
    }
    if(!this.isPackage3)
    {
      this.packageService.setPackage3(false);
    }
  }
}
