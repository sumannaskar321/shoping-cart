import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './store/cart.reducer';
import { ProductModule } from './components/product/product.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, HeaderComponent, CartDetailsComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RouterModule,
    StoreModule.forRoot({ cart: cartReducer }),
    ProductModule,
    FormsModule,
  ],
})
export class AppModule {}
