import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**@description Resources.*/
import { NgxMaskModule } from 'ngx-mask';
import { FlexLayoutModule } from '@angular/flex-layout';

/**@description Library.*/
import { ButtonModule } from '../../library/button/button.module';
import { ContainerModule } from '../../library/container/container.module';
import { CepFormFieldModule } from '../../library/cep-form-field/cep-form-field.module';
import { TextFormFieldModule } from '../../library/text-form-field/text-form-field.module';

/**@description Components.*/
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
            RouterTestingModule.withRoutes([]),
            HttpClientTestingModule,
            BrowserAnimationsModule,
            NgxMaskModule.forRoot(),
            FlexLayoutModule,
            ButtonModule,
            ContainerModule,
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
