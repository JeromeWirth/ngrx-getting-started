import { Component } from '@angular/core';
import { ProductsService } from './shared/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ngrx-getting-started';

  constructor(private productsService: ProductsService) {}

  get totalItemsCount(): number {
    return this.productsService.gettAllProductsInCart().length;
  }
}
