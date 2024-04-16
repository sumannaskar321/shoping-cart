import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product-index',
  templateUrl: './product-index.component.html',
  styleUrl: './product-index.component.scss',
})
export class ProductIndexComponent implements OnInit {
  public productList: Product[] = [];
  _filter!: string;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (value) => {
        this.productList = value;
      },
      error: (err) => console.error('Fetching Prouct : ' + err),
      complete: () => console.log('Product Fetched!'),
    });
  }

  filtertext(): void {
    let result: Product[] = [];
    this.productService.getProducts(this._filter.toLowerCase()).subscribe({
      next(value) {
        result = value;
      },
    });

    this.productList = result;
  }
}
