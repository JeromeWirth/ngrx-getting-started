import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { ProductModel } from '../models/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  productsInCart: ProductModel[] = [];

  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get<ProductModel[]>('assets/products.json');
  }

  gettAllProductsInCart() {
    return this.productsInCart;
  }

  addProductToCart(product: ProductModel) {
    this.productsInCart.push(product);
  }

  removeProductFromCart(i: number) {
    this.productsInCart = this.productsInCart.filter((item, j) => j !== i);
  }

  checkoutCart() {
    this.productsInCart = [];
    console.log(this.productsInCart);
  }
}
