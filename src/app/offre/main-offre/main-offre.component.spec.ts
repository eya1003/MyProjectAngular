import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainOffreComponent } from './main-offre.component';

describe('MainOffreComponent', () => {
  let component: MainOffreComponent;
  let fixture: ComponentFixture<MainOffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainOffreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
