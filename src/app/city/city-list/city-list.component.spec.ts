import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule } from '@angular/common';

import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { CityListComponent } from './city-list.component';

describe('City list component ... ', () => {

  let component: CityListComponent;
  let fixture: ComponentFixture<CityListComponent>;

  beforeEach(
    async(
      () => {
        TestBed.configureTestingModule({
          declarations: [
            CityListComponent
          ],
          imports: [
            CommonModule,
            MatSortModule,
            MatTableModule,
            MatPaginatorModule
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
