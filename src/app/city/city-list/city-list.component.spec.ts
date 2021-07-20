import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**@description Angular material.*/
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

/**@description Library.*/
import { TableModule } from '../../library/table/table.module';
import { ContainerModule } from '../../library/container/container.module';

/**@description Components.*/
import { CityListComponent } from './city-list.component';

describe('City list component ... ', () => {

  let component: CityListComponent;
  let fixture: ComponentFixture<CityListComponent>;

  beforeEach(
    waitForAsync(
      () => {
        TestBed.configureTestingModule({
          declarations: [
            CityListComponent
          ],
          imports: [
            CommonModule,
            RouterTestingModule.withRoutes([]),
            HttpClientTestingModule,
            BrowserAnimationsModule,
            MatIconModule,
            MatButtonModule,
            TableModule,
            ContainerModule
          ]
        })
        .compileComponents();
      }
    )
  );

  beforeEach(
    () => {
      fixture = TestBed.createComponent(CityListComponent);
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
