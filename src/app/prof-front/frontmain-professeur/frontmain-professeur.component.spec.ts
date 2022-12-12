import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontmainProfesseurComponent } from './frontmain-professeur.component';

describe('FrontmainProfesseurComponent', () => {
  let component: FrontmainProfesseurComponent;
  let fixture: ComponentFixture<FrontmainProfesseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontmainProfesseurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontmainProfesseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
