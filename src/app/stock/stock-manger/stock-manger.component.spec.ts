import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockMangerComponent } from './stock-manger.component';

describe('StockMangerComponent', () => {
  let component: StockMangerComponent;
  let fixture: ComponentFixture<StockMangerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockMangerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockMangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
