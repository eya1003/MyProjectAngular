import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDepartementComponent } from './main-departement.component';

describe('MainDepartementComponent', () => {
  let component: MainDepartementComponent;
  let fixture: ComponentFixture<MainDepartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainDepartementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
