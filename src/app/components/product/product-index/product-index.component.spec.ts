import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductIndexComponent } from './product-index.component';
import { ProductService } from '../../../services/product.service';
import { Observable, of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { ProductItemComponent } from '../product-item/product-item.component';

describe('ProductIndexComponent', () => {
  let component: ProductIndexComponent;
  let fixture: ComponentFixture<ProductIndexComponent>;
  let mockService: ProductService;

  beforeEach(async () => {
    mockService = jasmine.createSpyObj('ProductService', ['getProducts']);
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ProductIndexComponent, ProductItemComponent],
      providers: [{ provide: ProductService, useValue: mockService }],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Product listing component', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the '_filter'`, () => {
    expect(component._filter).toBeTruthy();
  });
  it(`should have the 'productList'`, () => {
    expect(component.productList).toBeTruthy();
    expect(component.productList.length).toEqual(0);
  });

  it(`should use and call the 'Product Service' getProducts and resolve`, async () => {
    component.ngOnInit();

    expect(mockService.getProducts).toHaveBeenCalled();
    expect(component.productList).toBeDefined();
  });
});
