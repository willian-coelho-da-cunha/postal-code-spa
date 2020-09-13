import { Component, HostBinding, Input, OnInit } from '@angular/core';

export type ResponsiveRange = 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5 | 5.5 | 6 | 6.5 | 7 | 7.5 | 8 | 8.5 | 9 | 9.5 | 10;

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  private _ipAlignHorizontal: 'start' | 'center' | 'end' = 'start'

  private _ipAlignVertical: 'start' | 'center' | 'end' = 'start';

  public _ipLayout = 'row wrap';

  public align = 'start start';

  public _ipXs = '100%';

  public _ipSm = '100%';

  public _ipMd = '100%';

  public _ipLg = '100%';

  public _ipXl = '100%';

  @Input()
  set ipLayout(value: 'row' | 'column') {
    this._ipLayout = `${value} wrap`;
  }

  @Input()
  public set ipAlignHorizontal(value: 'start' | 'center' | 'end') {
    this.align = `${value} ${this._ipAlignVertical}`;
    this._ipAlignHorizontal = value;
  }

  @Input()
  public set ipAlignVertical(value: 'start' | 'center' | 'end') {
    this.align = `${this._ipAlignHorizontal} ${value}`;
    this._ipAlignVertical = value;
  }

  @Input()
  set ipXs(value: ResponsiveRange) {
    this._ipXs = `${(value * 10).toFixed(2)}%`;
  }

  @Input()
  set ipSm(value: ResponsiveRange) {
    this._ipSm = `${(value * 10).toFixed(2)}%`;
  }

  @Input()
  set ipMd(value: ResponsiveRange) {
    this._ipMd = `${(value * 10).toFixed(2)}%`;
  }

  @Input()
  set ipLg(value: ResponsiveRange) {
    this._ipLg = `${(value * 10).toFixed(2)}%`;
  }

  @Input()
  set ipXl(value: ResponsiveRange) {
    this._ipXl = `${(value * 10).toFixed(2)}%`;
  }

  @HostBinding() public style = 'width: 100%; min-width: 100%; place-content: center;';

  constructor() { }

  ngOnInit(): void { }
}
