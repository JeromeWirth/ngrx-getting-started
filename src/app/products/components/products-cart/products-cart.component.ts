import { Component } from '@angular/core';
import { calculateTotalPrice, ProductModel } from 'src/app/shared/models';
import { ProductsService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-products-cart',
  templateUrl: './products-cart.component.html',
  styleUrls: ['./products-cart.component.css'],
})
export class ProductsCartComponent {
  productsInCart: ProductModel[];

  constructor(private productsService: ProductsService) {
    this.productsInCart = productsService.gettAllProductsInCart();
  }

  onRemove(index: number) {
    this.productsService.removeProductFromCart(index);
    this.productsInCart = this.productsService.gettAllProductsInCart();
  }

  onCheckout() {
    this.productsService.checkoutCart();
    this.productsInCart = this.productsService.gettAllProductsInCart();
  }

  get totalPrice(): number {
    return calculateTotalPrice(this.productsService.gettAllProductsInCart());
  }
}
