import { Component, OnChanges, OnInit, HostBinding, ChangeDetectionStrategy, Output, EventEmitter, Input, ViewChild, SimpleChanges } from '@angular/core';

/**@description Angular material.*/
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

/**@description Models.*/
import { TableColumn } from '../model/table-column.model';
import { TableControl, TableControlFactory } from '../model/table-control.model';
import { TableActionColumn } from '../model/table-action-column.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent<T> implements OnChanges, OnInit {

  public dataSource = new MatTableDataSource<T>();

  public tableControl = TableControlFactory.getInstance([]);

  public columns: Array<string> = [];

  @Input() public ipSort: Array<string> = [];

  @Input() public ipColumns: Array<TableColumn> = [];

  @Input() public ipActions: Array<TableActionColumn> = [];

  @Output() public opEdit = new EventEmitter<T>();

  @Output() public opSort = new EventEmitter<TableControl>();

  @Output() public opDelete = new EventEmitter<T>();

  @Output() public opPaginate = new EventEmitter<TableControl>();

  @ViewChild(MatSort, { static: true }) private matSort: MatSort;

  @ViewChild(MatPaginator, { static: true }) private matPaginator: MatPaginator;

  @HostBinding() public style = 'width: 100%; min-width: 100%; place-content: center;';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes['ipColumns'] && changes['ipColumns'].firstChange) {
      this.ipColumns.forEach((element: TableColumn) => {
        this.columns.push(element.attributeName);
      });
    }
    if (changes && changes['ipActions'] && changes['ipActions'].firstChange) {
      this.ipActions.forEach((element: TableActionColumn) => {
        this.columns.push(element.code);
      });
    }
  }

  ngOnInit(): void {
    this.dataSource.sort = this.matSort;
    this.dataSource.paginator = this.matPaginator;
  }

  public setDataSource(dataSource: Array<T>): void {
    this.dataSource.data = dataSource;
  }

  public setSort(attributes: Array<string>): void {
    if (Array.isArray(attributes)) {
      attributes.forEach((element: string) => {
        this.tableControl.sort.push(element);
        this.tableControl.order.push('desc');
      });
    }
  }

  public pageEvent($event: PageEvent): void {
    if ($event) {
      this.tableControl.page = $event.pageIndex;
      this.tableControl.limit = $event.pageSize;
      this.opPaginate.emit({ ...this.tableControl })
    }
  }

  public matSortChange($event: Sort): void {
    if ($event) {
      const index = this.tableControl.sort.indexOf($event.active);
      this.tableControl.order[index] = <'asc' | 'desc'>$event.direction;
      this.opSort.emit({ ...this.tableControl });
    }
  }

  public clickEditEntity(element: T): void {
    this.opEdit.emit(element);
  }

  public clickDeleteEntity(element: T): void {
    this.opDelete.emit(element);
  }
}
