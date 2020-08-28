import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-text-form-field',
  templateUrl: './text-form-field.component.html',
  styleUrls: ['./text-form-field.component.css']
})
export class TextFormFieldComponent implements OnInit {

  public textFormField = new FormControl('');

  @Input() public ipLabel = '';

  @Input() public ipRequired = false;

  constructor() { }

  ngOnInit(): void { }

  public getValue(): string {
    return this.textFormField.value;
  }
}
