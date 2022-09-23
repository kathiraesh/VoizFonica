import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminrechargeComponent } from './adminrecharge.component';

describe('AdminrechargeComponent', () => {
  let component: AdminrechargeComponent;
  let fixture: ComponentFixture<AdminrechargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminrechargeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminrechargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
