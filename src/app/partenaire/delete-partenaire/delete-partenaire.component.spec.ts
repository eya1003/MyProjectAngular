import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePartenaireComponent } from './delete-partenaire.component';

describe('DeletePartenaireComponent', () => {
  let component: DeletePartenaireComponent;
  let fixture: ComponentFixture<DeletePartenaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletePartenaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePartenaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
