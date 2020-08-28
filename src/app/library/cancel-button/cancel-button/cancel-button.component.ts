import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cancel-button',
  templateUrl: './cancel-button.component.html',
  styleUrls: ['./cancel-button.component.css']
})
export class CancelButtonComponent {

  @Input() public ipLabel = '';

  @Input() public ipDisabled = false;

  @Output() public opClick = new EventEmitter<never>();
}
