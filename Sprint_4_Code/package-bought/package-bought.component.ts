import { Component } from '@angular/core';
import { PackageService } from "../package.service";
import {CartService} from "../cart.service";
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-package-bought',
  templateUrl: './package-bought.component.html',
  styleUrls: ['./package-bought.component.css']
})
export class PackageBoughtComponent {
  constructor(private cartService: CartService, private packageService: PackageService, private http: HttpClient, private authServ: AuthService) {}

  ngOnInit()
  {
    console.log('isProductAdded:', this.packageService.isPackage1);
    console.log('isProductAdded:', this.packageService.isPackage2);
    console.log('isProductAdded:', this.packageService.isPackage3);
    const user: any = {
      username: this.authServ.username,
      isPackage1: this.packageService.isPackage1,
      isPackage2: this.packageService.isPackage2,
      isPackage3: this.packageService.isPackage3
    };

    this.http.post('http://localhost:8080/update/' + user.username, user).subscribe(
      response => console.log('State Stored', response),
      error => console.error('Error', error)
    );
  }
}
