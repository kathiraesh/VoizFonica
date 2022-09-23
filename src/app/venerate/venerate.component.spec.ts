import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenerateComponent } from './venerate.component';

describe('VenerateComponent', () => {
  let component: VenerateComponent;
  let fixture: ComponentFixture<VenerateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenerateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
