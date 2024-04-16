import { Cart } from './cart';

describe('Cart', () => {
  it('should create an instance', () => {
    expect(
      new Cart(
        152,
        'Teddy',
        2000,
        'https://img.lovepik.com/element/40239/6022.png_300.png',
        '',
        1
      )
    ).toBeTruthy();
  });
});
