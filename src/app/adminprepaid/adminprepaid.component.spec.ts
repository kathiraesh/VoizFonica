import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminprepaidComponent } from './adminprepaid.component';

describe('AdminprepaidComponent', () => {
  let component: AdminprepaidComponent;
  let fixture: ComponentFixture<AdminprepaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminprepaidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminprepaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
