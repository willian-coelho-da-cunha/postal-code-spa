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
import { Table } from '../model/table.model';
import { ContainerModule } from '../../container/container.module';

/**@description Components.*/
import { TableComponent } from './table.component';

describe('Table component ... ', () => {

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
            FlexLayoutModule,
            ContainerModule
          ]
        })
        .compileComponents();
      }
    )
  );

  it('should be created.',
    async (done: DoneFn) => {
      const fixture: ComponentFixture<TableComponent<Table>> = TestBed.createComponent<TableComponent<Table>>(TableComponent);

      fixture.detectChanges();
      await fixture.whenStable();

      expect(fixture.componentInstance).toBeTruthy();
      done();
    }
  );
});
