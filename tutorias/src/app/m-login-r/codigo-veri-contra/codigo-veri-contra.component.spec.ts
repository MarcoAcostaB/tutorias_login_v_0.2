import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigoVeriContraComponent } from './codigo-veri-contra.component';

describe('CodigoVeriContraComponent', () => {
  let component: CodigoVeriContraComponent;
  let fixture: ComponentFixture<CodigoVeriContraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodigoVeriContraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodigoVeriContraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
