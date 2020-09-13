import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  private _ipAlignHorizontal: 'start' | 'center' | 'end' = 'start'

  private _ipAlignVertical: 'start' | 'center' | 'end' = 'start';

  public align = 'start start';

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
}
