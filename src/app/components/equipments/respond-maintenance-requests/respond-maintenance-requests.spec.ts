import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespondMaintenanceRequests } from './respond-maintenance-requests';

describe('RespondMaintenanceRequests', () => {
  let component: RespondMaintenanceRequests;
  let fixture: ComponentFixture<RespondMaintenanceRequests>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RespondMaintenanceRequests]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespondMaintenanceRequests);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
