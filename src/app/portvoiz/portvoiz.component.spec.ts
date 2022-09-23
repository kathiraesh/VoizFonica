import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortvoizComponent } from './portvoiz.component';

describe('PortvoizComponent', () => {
  let component: PortvoizComponent;
  let fixture: ComponentFixture<PortvoizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortvoizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortvoizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
