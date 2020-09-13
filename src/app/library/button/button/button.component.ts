import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

/**@description Angular material.*/
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {

  @Input() public ipLabel = '';

  @Input() public ipColor: ThemePalette = 'primary';

  @Input() public ipDisabled = false;

  @Output() public opClick = new EventEmitter<never>();
}
