import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CepFormFieldComponent } from './cep-form-field.component';

describe('CepFormFieldComponent', () => {
  let component: CepFormFieldComponent;
  let fixture: ComponentFixture<CepFormFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CepFormFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CepFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
