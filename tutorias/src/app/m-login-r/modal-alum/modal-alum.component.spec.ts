import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAlumComponent } from './modal-alum.component';

describe('ModalAlumComponent', () => {
  let component: ModalAlumComponent;
  let fixture: ComponentFixture<ModalAlumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAlumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAlumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
