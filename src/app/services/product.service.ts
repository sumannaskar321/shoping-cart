import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable, filter, from, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [
    new Product(
      11,
      'Teddy Bear',
      500,
      'https://img.lovepik.com/element/40239/6022.png_300.png',
      'Soft toy brown teddy bear for baby.'
    ),
    new Product(
      12,
      'Toy train',
      250,
      'https://img.freepik.com/free-photo/view-3d-toy-like-train-model_23-2150905393.jpg?t=st=1713178383~exp=1713181983~hmac=083ac1863df16916f83e62081a1ba9c22652d8fe1299a7ca294979e68feecd96&w=900',
      'Colorfull toy train without battery.'
    ),
    new Product(
      13,
      'Cute Octopus dough',
      156,
      'https://img.freepik.com/free-photo/play-dough-background-with-cute-octopus_23-2149700403.jpg?w=900&t=st=1713178482~exp=1713179082~hmac=f212f06993250a377ea89ae18db3f1e9d247d501fefbaf640914512eebe08977',
      'play dough background with cute octopus.'
    ),
    new Product(
      14,
      'Roller scate boots',
      847,
      'https://img.freepik.com/free-psd/3d-illustration-children-s-toy-roller-blades_23-2149345312.jpg?w=740&t=st=1713178679~exp=1713179279~hmac=0dbdce0c63ea366585d5c7e21ca3fe9421f09410dfafde95b71968e0f4bfd10c',
      'Kids Toy roller scate boots.'
    ),
    new Product(
      21,
      'Men white shirt',
      399,
      'https://img.freepik.com/free-photo/young-male-looking-camera-white-shirt-pants-looking-handsome_176474-17164.jpg?t=st=1713178881~exp=1713182481~hmac=27f11bbecf48f5916a934d58de916ccdcef3e2a5cc871792f37f914e3e272168&w=900'
    ),
    new Product(
      22,
      'Denim white shirt',
      475,
      'https://img.freepik.com/free-photo/expressive-young-guy-posing-studio_176474-98666.jpg?t=st=1713178962~exp=1713182562~hmac=9943d692de8fe7fb633186b84c89e08a28a9b57bbc8688fdedfb2d9041ba5376&w=900',
      'Hihg quality white shirt for men.'
    ),
    new Product(
      23,
      'Women white shirt',
      647,
      'https://img.freepik.com/free-photo/business-woman-evening-street_1303-3826.jpg?w=360&t=st=1713179240~exp=1713179840~hmac=655af14ab2c831f54592fc8fc4949dc0df1a561da36aa73f00a28ddc03898dc2',
      'white shirt for office or bussiness women.'
    ),
    new Product(
      24,
      'Olive green shirt',
      450,
      'https://img.freepik.com/free-photo/young-lady-clenching-fist-with-anger-while-looking-down-shirt-skirt-looking-offended-front-view_176474-91075.jpg?w=900&t=st=1713179357~exp=1713179957~hmac=fa35e46ee1a76525bcf60976a3debe4cfd5f7a3783e1953b6e173a907bec7cfb',
      'Olive green shirt made out of pure cotton very very good quality.'
    ),
  ];
  constructor() {}

  getProducts(searchText: string = ''): Observable<Array<Product>> {
    if (!searchText) return of(this.products);

    let result: Product[] = this.products.filter((p) =>
      p.name.toLowerCase().includes(searchText)
    );
    return of(result);
  }
}
