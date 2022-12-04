import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDepartementComponent } from './delete-departement.component';

describe('DeleteDepartementComponent', () => {
  let component: DeleteDepartementComponent;
  let fixture: ComponentFixture<DeleteDepartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteDepartementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
