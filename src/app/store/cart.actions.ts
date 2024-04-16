import { createAction, props } from '@ngrx/store';
import { Cart } from '../models/cart';
import { Product } from '../models/product';

export const addToCart = createAction('addToCart', props<Product>());
export const discardFromCard = createAction('discardFromCard', props<Cart>());
export const reset = createAction('reset');
export const increment = createAction('increment', props<{ id: number }>());
export const decrement = createAction('decrement', props<{ id: number }>());
