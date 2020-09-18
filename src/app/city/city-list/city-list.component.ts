import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

/**@description Models.*/
import { City } from '../model/city.model';
import { TableColumn, TableColumnFactory } from '../../library/table/model/table-column.model';
import { TableControl } from '../../library/table/model/table-control.model';
import { TableActionColumn, TableActionColumnFactory } from '../../library/table/model/table-action-column.model';

/**@description Services.*/
import { CityService } from '../city.service';
import { LoginService } from '../../login/login.service';

/**@description Components.*/
import { TableComponent } from 'src/app/library/table/table/table.component';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements AfterViewInit {

  private end = new Subject<boolean>();

  public sort = new Array<string>();

  public columns = new Array<TableColumn>();

  public actions = new Array<TableActionColumn>();

  @ViewChild(TableComponent) private tableComponent: TableComponent<City>;

  constructor(
    private router: Router,
    private cityService: CityService,
    private loginService: LoginService
    ) {
    this.sort.push('zipCode');
    this.sort.push('name');

    this.columns.push(TableColumnFactory.getInstance(true, 'Zip Code', 'zipCode'));
    this.columns.push(TableColumnFactory.getInstance(true, 'City name', 'name'));

    this.actions.push(TableActionColumnFactory.getInstance('actions', 'Actions', true, false, true));
  }

  ngAfterViewInit(): void {
    this.getCities(this.tableComponent.tableControl);
  }

  private getCities(tableControl: TableControl): void {
    this.cityService
      .getCities(tableControl)
      .pipe(takeUntil(this.end))
      .subscribe(
        response => {
          if (Array.isArray(response)) {
            this.tableComponent.setDataSource([...response]);

          } else {
            this.tableComponent.setDataSource(new Array<City>());
          }
        },
        () => {
          this.tableComponent.setDataSource(new Array<City>());
        }
      )
    ;
  }

  public clickEditCity(element: City): void {
    if (element && element.id) {
      this.router.navigate([`/city/edit/${element.id}`]);
    }
  }

  public clickDeleteCity(element: City): void {
    if (element && element.id) {
      this.cityService
        .deleteCity(element.id)
        .pipe(takeUntil(this.end))
        .subscribe(
          () => {
            this.getCities(this.tableComponent.tableControl);
          }
        )
      ;
    }
  }

  public pageEvent($event: TableControl): void {
    this.getCities($event);
  }

  public matSortChange($event: TableControl): void {
    this.getCities($event);
  }

  public clickAddCity(): void {
    this.router.navigate(['/city/add']);
  }

  public clickLogOut(): void {
    this.loginService
      .logout()
      .pipe(takeUntil(this.end))
      .subscribe(
        () => {
          this.router.navigate(['/login']);
        }
      )
    ;
  }
}
