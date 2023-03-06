import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductModel } from 'src/app/shared/models';
import { ProductsService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
  @Input() products: ProductModel[] | null = [];

  constructor(private productService: ProductsService) {}

  addToCart(product: ProductModel) {
    this.productService.addProductToCart(product);
  }
}
