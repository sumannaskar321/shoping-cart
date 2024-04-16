import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductQuantityOperationComponent } from './product-quantity-operation.component';

describe('ProductQuantityOperationComponent', () => {
  let component: ProductQuantityOperationComponent;
  let fixture: ComponentFixture<ProductQuantityOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductQuantityOperationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductQuantityOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
