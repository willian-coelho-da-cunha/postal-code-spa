import { Component, OnInit, HostBinding, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit {

  @HostBinding() public style = 'width: 100%; min-width: 100%;';

  constructor() { }

  ngOnInit(): void { }
}
