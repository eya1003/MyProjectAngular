import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainUniversiteComponent } from './main-universite.component';

describe('MainUniversiteComponent', () => {
  let component: MainUniversiteComponent;
  let fixture: ComponentFixture<MainUniversiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainUniversiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainUniversiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
