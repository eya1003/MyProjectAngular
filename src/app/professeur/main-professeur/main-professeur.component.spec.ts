import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainProfesseurComponent } from './main-professeur.component';

describe('MainProfesseurComponent', () => {
  let component: MainProfesseurComponent;
  let fixture: ComponentFixture<MainProfesseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainProfesseurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainProfesseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
