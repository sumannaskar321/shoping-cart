import { Product } from './product';

export class Cart extends Product {
  qty: number;
  constructor(
    id: number,
    name: string,
    price: number,
    imgUrl: string,
    description: string = '',
    qty: number = 0
  ) {
    super(id, name, price, imgUrl, description);
    this.qty = qty;
  }
}
