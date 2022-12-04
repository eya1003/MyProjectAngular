import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProfesseurComponent } from './update-professeur.component';

describe('UpdateProfesseurComponent', () => {
  let component: UpdateProfesseurComponent;
  let fixture: ComponentFixture<UpdateProfesseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProfesseurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProfesseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
