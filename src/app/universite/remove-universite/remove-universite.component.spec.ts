import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveUniversiteComponent } from './remove-universite.component';

describe('RemoveUniversiteComponent', () => {
  let component: RemoveUniversiteComponent;
  let fixture: ComponentFixture<RemoveUniversiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveUniversiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveUniversiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
