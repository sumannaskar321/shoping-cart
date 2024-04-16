import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductIndexComponent } from './product-index/product-index.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductQuantityOperationComponent } from './product-quantity-operation/product-quantity-operation.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ProductIndexComponent },
  { path: 'products', component: ProductIndexComponent },
];

@NgModule({
  declarations: [
    ProductIndexComponent,
    ProductItemComponent,
    ProductQuantityOperationComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
  exports: [ProductQuantityOperationComponent],
  providers: [],
})
export class ProductModule {}
