import { Component } from '@angular/core';
import { PackageService } from "../package.service";
import {CartService} from "../cart.service";

@Component({
  selector: 'app-package-bought',
  templateUrl: './package-bought.component.html',
  styleUrls: ['./package-bought.component.css']
})
export class PackageBoughtComponent {
  constructor(private cartService: CartService, private packageService: PackageService) {}

  ngOnInit()
  {
    console.log('isProductAdded:', this.packageService.isPackage2);
  }
}
