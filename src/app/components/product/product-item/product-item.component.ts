import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { Store } from '@ngrx/store';
import { cartStore } from '../../../types/cart';
import { addToCart } from '../../../store/cart.actions';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss',
})
export class ProductItemComponent {
  @Input() productItem!: Product;

  constructor(public store: Store<cartStore>) {}

  addToCart() {
    this.store.dispatch(addToCart(this.productItem));
  }
}
