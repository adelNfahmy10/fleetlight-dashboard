import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOfferPrice } from './view-offer-price';

describe('ViewOfferPrice', () => {
  let component: ViewOfferPrice;
  let fixture: ComponentFixture<ViewOfferPrice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewOfferPrice]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewOfferPrice);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
