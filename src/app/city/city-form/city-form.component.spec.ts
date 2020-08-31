import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxMaskModule } from 'ngx-mask';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CancelButtonModule } from '../../library/cancel-button/cancel-button.module';
import { SubmitButtonModule } from '../../library/submit-button/submit-button.module';
import { CepFormFieldModule } from '../../library/cep-form-field/cep-form-field.module';
import { TextFormFieldModule } from '../../library/text-form-field/text-form-field.module';

import { CityFormComponent } from './city-form.component';

describe('City form component ... ', () => {

  let component: CityFormComponent;
  let fixture: ComponentFixture<CityFormComponent>;

  beforeEach(
    async(
      () => {
        TestBed.configureTestingModule({
          declarations: [
            CityFormComponent
          ],
          imports: [
            CommonModule,
            BrowserAnimationsModule,
            NgxMaskModule.forRoot(),
            FlexLayoutModule,
            CancelButtonModule,
            SubmitButtonModule,
            CepFormFieldModule,
            TextFormFieldModule
          ]
        })
        .compileComponents();
      }
    )
  );

  beforeEach(
    () => {
      fixture = TestBed.createComponent(CityFormComponent);
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
