import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPartenaireComponent } from './main-partenaire.component';

describe('MainPartenaireComponent', () => {
  let component: MainPartenaireComponent;
  let fixture: ComponentFixture<MainPartenaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPartenaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPartenaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
