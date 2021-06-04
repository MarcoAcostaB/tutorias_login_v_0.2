import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewContraComponent } from './new-contra.component';

describe('NewContraComponent', () => {
  let component: NewContraComponent;
  let fixture: ComponentFixture<NewContraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewContraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewContraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
