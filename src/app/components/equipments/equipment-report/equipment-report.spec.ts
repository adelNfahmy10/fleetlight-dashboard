import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentReport } from './equipment-report';

describe('EquipmentReport', () => {
  let component: EquipmentReport;
  let fixture: ComponentFixture<EquipmentReport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipmentReport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipmentReport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
