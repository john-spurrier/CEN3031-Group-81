import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import {Product} from "../product";

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
    private cartService: CartService
  ) { }

  ngOnInit() {
    const products: Product[] = this.cartService.getItems();
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === 1) {
        this.isPackage1 = true;
        //break;
      }
      else if (products[i].id === 2){
        this.isPackage2 = true;
        //break;
      }
      else if (products[i].id === 3){
        this.isPackage3 = true;
      }
    }
  }
}
