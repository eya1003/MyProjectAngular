import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavfrontComponent } from './navfront.component';

describe('NavfrontComponent', () => {
  let component: NavfrontComponent;
  let fixture: ComponentFixture<NavfrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavfrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavfrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
