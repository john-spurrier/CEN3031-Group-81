import { Component } from '@angular/core';
import { PackageService } from "../package.service";
import {CartService} from "../cart.service";

@Component({
  selector: 'app-my-package',
  templateUrl: './my-package.component.html',
  styleUrls: ['./my-package.component.css']
})
export class MyPackageComponent {
  isPackage1: boolean = this.packageService.isPackage1;
  isPackage2: boolean = this.packageService.isPackage2;
  isPackage3: boolean = this.packageService.isPackage3;

  constructor(private cartService: CartService, private packageService: PackageService) {}

  ngOnInit() {
    console.log('isProductAdded:', this.packageService.isPackage3);
    //this.isPackage1 = this.packageService.isPackage1;
    //this.isPackage2 = this.packageService.isPackage2;
    //this.isPackage3 = this.packageService.isPackage3;
    console.log('isProductAdded:', this.isPackage3);
  }

  clearProductState() {
    this.packageService.clearProductState();
    this.isPackage1 = false;
    this.isPackage2 = false;
    this.isPackage3 = false;
  }
}
