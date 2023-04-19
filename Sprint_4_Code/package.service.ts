import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PackageService {
  private _isPackage1: boolean = false;
  private _isPackage2: boolean = false;
  private _isPackage3: boolean = false;
  private readonly STORAGE_KEY = 'isPackage2';

  constructor() {
    const storedValue = localStorage.getItem(this.STORAGE_KEY);
    if (storedValue) {
      const { _isPackage1, _isPackage2, _isPackage3 } = JSON.parse(storedValue);
      this._isPackage1 = _isPackage1;
      this._isPackage2 = _isPackage2;
      this._isPackage3 = _isPackage3;
      //this._isPackage2 = JSON.parse(storedValue);
    }
  }

  get isPackage1(): boolean {
    return this._isPackage1;
  }
  setPackage1(value: boolean) {
    this._isPackage1 = value;
    this.updateLocalStorage();
    //localStorage.setItem(this.STORAGE_KEY, JSON.stringify(value));
  }
  get isPackage2(): boolean {
    return this._isPackage2;
  }
  setPackage2(value: boolean) {
    this._isPackage2 = value;
    this.updateLocalStorage();
    //localStorage.setItem(this.STORAGE_KEY, JSON.stringify(value));
  }
  get isPackage3(): boolean {
    return this._isPackage3;
  }
  setPackage3(value: boolean) {
    this._isPackage3 = value;
    this.updateLocalStorage();
    //localStorage.setItem(this.STORAGE_KEY, JSON.stringify(value));
  }

  clearProductState() {
    this._isPackage1 = false;
    this._isPackage1 = false;
    this._isPackage1 = false;
    localStorage.removeItem(this.STORAGE_KEY);
  }

  private updateLocalStorage() {
    const productState = {
      _isPackage1: this._isPackage1,
      _isPackage2: this._isPackage2,
      _isPackage3: this._isPackage3
    };
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(productState));
  }

}
