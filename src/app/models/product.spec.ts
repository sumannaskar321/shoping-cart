import { Product } from './product';

describe('Product', () => {
  it('should create an instance', () => {
    expect(
      new Product(
        152,
        'Teddy',
        2000,
        'https://img.lovepik.com/element/40239/6022.png_300.png',
        'This is dummy description'
      )
    ).toBeTruthy();
  });
});
