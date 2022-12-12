import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontaddProfesseurComponent } from './frontadd-professeur.component';

describe('FrontaddProfesseurComponent', () => {
  let component: FrontaddProfesseurComponent;
  let fixture: ComponentFixture<FrontaddProfesseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontaddProfesseurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontaddProfesseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
