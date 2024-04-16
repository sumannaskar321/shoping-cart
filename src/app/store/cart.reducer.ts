import { createReducer, on } from '@ngrx/store';
import {
  addToCart,
  decrement,
  discardFromCard,
  increment,
} from './cart.actions';
import { initialState } from './cart.state';
import { Cart } from '../models/cart';
import { cartObjects } from '../types/cart';

const _cartReducer = createReducer(
  initialState,
  on(addToCart, (state, action) => {
    let { id, name, imgUrl, description, price } = action;
    let cart: cartObjects = state.cart;

    let cartElem: Cart | null = cart ? cart[id] : null;
    // console.log('cart elem check', cartElem);

    if (cartElem) {
      //product already in cart
      let existingElem: cartObjects = {
        [id]: {
          ...cartElem,
          qty: cartElem.qty + 1,
        },
      };
      return {
        cart: { ...state.cart, ...existingElem },
        totalItemCount: state.totalItemCount + 1,
        totalCartValue: state.totalCartValue + cartElem.price,
      };
    } else {
      let newElem: cartObjects = {
        [id]: { id, name, imgUrl, description, price, qty: 1 },
      };
      return {
        cart: { ...state.cart, ...newElem },
        totalItemCount: state.totalItemCount + 1,
        totalCartValue: state.totalCartValue + price,
      };
    }
  }),

  on(discardFromCard, (state, action) => {
    let { id, name, imgUrl, description, price, qty } = action;

    let count = state.totalItemCount;
    let newCount = count - qty;
    let newCartValue = state.totalCartValue - price * qty;
    let cart: cartObjects = { ...state.cart };
    delete cart[id];

    return {
      cart: { ...cart },
      totalItemCount: newCount < 0 ? 0 : newCount,
      totalCartValue: newCartValue < 0 ? 0 : newCartValue,
    };
  }),

  on(increment, (state, action) => {
    let { id } = action;
    let cart: cartObjects = state.cart;
    let updatedItem: cartObjects = {
      [id]: { ...cart[id], qty: cart[id].qty + 1 },
    };
    return {
      cart: { ...state.cart, ...updatedItem },
      totalItemCount: state.totalItemCount + 1,
      totalCartValue: state.totalCartValue + updatedItem[id].price,
    };
  }),

  on(decrement, (state, action) => {
    let { id } = action;
    let cart: cartObjects = state.cart;
    let updatedItem: cartObjects = {
      [id]: { ...cart[id], qty: cart[id].qty - 1 },
    };
    return {
      cart: { ...state.cart, ...updatedItem },
      totalItemCount: state.totalItemCount - 1,
      totalCartValue: state.totalCartValue - updatedItem[id].price,
    };
  })
);

export function cartReducer(state: any, action: any) {
  return _cartReducer(state, action);
}
