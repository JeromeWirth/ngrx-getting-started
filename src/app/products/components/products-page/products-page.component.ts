import { Component } from '@angular/core';
import { ProductModel } from 'src/app/shared/models';
import { ProductsService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css'],
})
export class ProductsPageComponent {
  products$ = this.productsService.getAllProducts();

  constructor(private productsService: ProductsService) {}
}
