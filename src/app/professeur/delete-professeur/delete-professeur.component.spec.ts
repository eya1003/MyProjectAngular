import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProfesseurComponent } from './delete-professeur.component';

describe('DeleteProfesseurComponent', () => {
  let component: DeleteProfesseurComponent;
  let fixture: ComponentFixture<DeleteProfesseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteProfesseurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteProfesseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
