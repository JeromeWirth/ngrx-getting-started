import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsCartComponent } from './products/components/products-cart/products-cart.component';
import { ProductsPageComponent } from './products/components/products-page/products-page.component';
import { ProductsListComponent } from './products/components/products-list/products-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ProductsCartComponent,
    ProductsPageComponent,
    ProductsListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: ProductsPageComponent },
      { path: 'cart', component: ProductsCartComponent },
    ]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
