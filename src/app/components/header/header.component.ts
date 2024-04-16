import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { cartStore } from '../../types/cart';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  public totalItemCount: number = 0;
  constructor(public store: Store<cartStore>) {}

  ngOnInit(): void {
    this.store.select('cart').subscribe((data) => {
      this.totalItemCount = data.totalItemCount;
    });
  }
}
