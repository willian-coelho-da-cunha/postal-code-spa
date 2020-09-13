import { Component, OnInit, ViewChild } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

/**@description Angular material.*/
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

/**@description Models.*/
import { City } from '../model/city.model';
import { CityList } from '../model/city-list.model';

/**@description Services.*/
import { CityService } from '../city.service';
import { LoginService } from '../../login/login.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  private end = new Subject<boolean>();

  public cityList = new CityList();

  public readonly displayedColumns = [ 'zipCode', 'name', 'actions' ];

  public dataSource = new MatTableDataSource();

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private router: Router,
    private cityService: CityService,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.getCities();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  private getCities(): void {
    this.cityService
      .getCities(this.cityList)
      .pipe(takeUntil(this.end))
      .subscribe(
        response => {
          if (Array.isArray(response)) {
            this.dataSource.data = [ ...response ];
          } else {
            this.dataSource.data = new Array<City>();
          }
        },
        () => {
          this.dataSource.data = new Array<City>();
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
            this.getCities();
          }
        )
      ;
    }
  }

  public pageEvent($event: PageEvent): void {
    if ($event) {
      this.cityList.page = $event.pageIndex;
      this.cityList.limit = $event.pageSize;
      this.getCities();
    }
  }

  public matSortChange($event: Sort): void {
    if ($event) {
      const index = this.cityList.sort.indexOf($event.active);
      this.cityList.order[index] = <'asc' | 'desc'>$event.direction;
      this.getCities();
    }
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
