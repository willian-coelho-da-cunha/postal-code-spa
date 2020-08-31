import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-cancel-button',
  templateUrl: './cancel-button.component.html',
  styleUrls: ['./cancel-button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CancelButtonComponent {

  @Input() public ipLabel = '';

  @Input() public ipColor: ThemePalette = 'warn';

  @Input() public ipDisabled = false;

  @Output() public opClick = new EventEmitter<never>();
}
