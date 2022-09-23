import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpostpaidComponent } from './adminpostpaid.component';

describe('AdminpostpaidComponent', () => {
  let component: AdminpostpaidComponent;
  let fixture: ComponentFixture<AdminpostpaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminpostpaidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminpostpaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
