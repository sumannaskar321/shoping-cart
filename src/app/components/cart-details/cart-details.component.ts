import { Component, OnInit } from '@angular/core';
import { cartObjects, cartStore } from './../../types/cart';
import { Cart } from '../../models/cart';
import { Store } from '@ngrx/store';
import { discardFromCard } from '../../store/cart.actions';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrl: './cart-details.component.scss',
})
export class CartDetailsComponent implements OnInit {
  cartItems: cartObjects = {};
  totalCartValue!: number;
  constructor(private store: Store<cartStore>) {}
  ngOnInit(): void {
    this.store.select('cart').subscribe((data) => {
      this.cartItems = data.cart;
      this.totalCartValue = data.totalCartValue;
    });
  }

  discardItemFromCart(item: Cart) {
    this.store.dispatch(discardFromCard(item));
  }
}
