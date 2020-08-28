import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { NgxMaskModule } from 'ngx-mask';

import { CepFormFieldComponent } from './cep-form-field.component';

describe('Cep form field component ... ', () => {

  let component: CepFormFieldComponent;
  let fixture: ComponentFixture<CepFormFieldComponent>;

  beforeEach(
    async(
      () => {
        TestBed.configureTestingModule({
          declarations: [
            CepFormFieldComponent
          ],
          imports: [
            CommonModule,
            ReactiveFormsModule,
            MatInputModule,
            MatFormFieldModule,
            NgxMaskModule.forRoot()
          ]
        })
        .compileComponents();
      }
    )
  );

  beforeEach(
    () => {
      fixture = TestBed.createComponent(CepFormFieldComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    }
  );

  afterEach(
    () => {
      fixture.nativeElement.remove();
      fixture.destroy();
    }
  );

  it('should be created.',
    () => {
      expect(component).toBeTruthy();
    }
  );
});