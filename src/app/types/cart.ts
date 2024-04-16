import { Cart } from '../models/cart';

export type cartObjects = { [s: string]: Cart };
export type cartStore = {
  cart: {
    cart: { [s: string]: Cart };
    totalItemCount: number;
    totalCartValue: number;
  };
};
