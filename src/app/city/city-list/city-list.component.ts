import { Component, OnInit, ViewChild } from '@angular/core';

import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  public readonly displayedColumns = [ 'cep', 'name' ];

  public dataSource = new MatTableDataSource();

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    this.getCities();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public getCities(): void { }
}
