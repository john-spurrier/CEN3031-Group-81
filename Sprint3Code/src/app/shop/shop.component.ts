import { Component } from '@angular/core';
import {Product, products} from '../product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  products = products;
  constructor(
    private cartService: CartService
  ) { }
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
  share() {
    window.alert('The product has been shared!');
  }
}