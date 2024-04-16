import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'shopping', pathMatch: 'full' },
  {
    path: 'shopping',
    loadChildren: () =>
      import('./components/product/product.module').then(
        (m) => m.ProductModule
      ),
  },
  { path: 'cart', component: CartDetailsComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
