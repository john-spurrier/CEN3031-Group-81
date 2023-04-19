import { Product } from './product';
import { Injectable } from '@angular/core';
import { PackageService } from "./package.service";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
  constructor(private packageService: PackageService) { }

  addToCart(product: Product) {
    this.items.push(product);
    if(product.id === 1)
    {
      this.packageService.setPackage1(true);
    }
    else if(product.id === 2)
    {
      this.packageService.setPackage2(true);
    }
    else if(product.id === 3)
    {
      this.packageService.setPackage3(true);
    }

  }
  getItems() {
    return this.items;
  }
  clearCart() {
    this.items = [];
    return this.items;
  }
}
