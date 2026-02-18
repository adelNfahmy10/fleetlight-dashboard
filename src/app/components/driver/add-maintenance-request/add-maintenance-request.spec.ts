import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMaintenanceRequest } from './add-maintenance-request';

describe('AddMaintenanceRequest', () => {
  let component: AddMaintenanceRequest;
  let fixture: ComponentFixture<AddMaintenanceRequest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMaintenanceRequest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMaintenanceRequest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
