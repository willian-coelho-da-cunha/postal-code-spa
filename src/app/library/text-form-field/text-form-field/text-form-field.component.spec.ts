import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFormFieldComponent } from './text-form-field.component';

describe('TextFormFieldComponent', () => {
  let component: TextFormFieldComponent;
  let fixture: ComponentFixture<TextFormFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextFormFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
