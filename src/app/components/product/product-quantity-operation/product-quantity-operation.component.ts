import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { cartStore } from '../../../types/cart';
import { Product } from '../../../models/product';
import {
  addToCart,
  decrement,
  discardFromCard,
  increment,
} from '../../../store/cart.actions';
import { Cart } from '../../../models/cart';

@Component({
  selector: 'app-product-quantity-operation',
  templateUrl: './product-quantity-operation.component.html',
  styleUrl: './product-quantity-operation.component.scss',
})
export class ProductQuantityOperationComponent implements OnChanges {
  @Input() product!: Product;
  itemQuantity: number = 0;
  private productFound!: Cart;
  constructor(private store: Store<cartStore>) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.product?.id) {
      this.store.select('cart').subscribe((data) => {
        this.itemQuantity = data.cart[this.product.id]?.qty || 0;
      });
    }
  }

  decrement() {
    console.log('decrement');
    this.store.select('cart').subscribe((data) => {
      this.productFound = data.cart[this.product.id] || null;
    });

    console.log('decrement item', this.productFound);
    if (this.productFound) {
      if (this.productFound.qty > 1)
        this.store.dispatch(decrement({ id: this.product.id }));
      else this.store.dispatch(discardFromCard(this.productFound));
    }
  }
  increment() {
    console.log('increment');

    this.store.select('cart').subscribe((data) => {
      this.productFound = data.cart[this.product.id] || null;
    });

    console.log('increment item', this.productFound);

    if (this.productFound) {
      this.store.dispatch(increment({ id: this.product.id }));
    } else {
      this.store.dispatch(addToCart(this.product));
    }
  }
}
