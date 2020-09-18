import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**@description Angular material.*/
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';

/**@description Resources.*/
import { FlexLayoutModule } from '@angular/flex-layout';

/**@description Library.*/
import { City } from '../../../city/model/city.model';

/**@description Components.*/
import { TableComponent } from './table.component';

describe('Table component ... ', () => {

  let component: TableComponent<City>;
  let fixture: ComponentFixture<TableComponent<City>>;

  beforeEach(
    async(
      () => {
        TestBed.configureTestingModule({
          declarations: [
            TableComponent
          ],
          imports: [
            CommonModule,
            BrowserAnimationsModule,
            MatSortModule,
            MatIconModule,
            MatTableModule,
            MatButtonModule,
            MatPaginatorModule,
            FlexLayoutModule
          ]
        })
        .compileComponents();
      }
    )
  );

  beforeEach(
    () => {
      fixture = TestBed.createComponent<TableComponent<City>>(TableComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    }
  );

  it('should be created.',
    () => {
      expect(component).toBeTruthy();
    }
  );
});
