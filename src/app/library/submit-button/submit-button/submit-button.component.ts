import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-submit-button',
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubmitButtonComponent {

  @Input() public ipLabel = '';

  @Input() public ipDisabled = true;

  @Output() public opClick = new EventEmitter<never>();
}
