import { Component, OnChanges, Input, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-text-form-field',
  templateUrl: './text-form-field.component.html',
  styleUrls: ['./text-form-field.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextFormFieldComponent implements OnChanges {

  public textFormField = new FormControl('');

  @Input() public ipLabel = '';

  @Input() public ipRequired = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes['ipRequired'] && changes['ipRequired'].previousValue !== changes['ipRequired'].currentValue) {
      if (changes['ipRequired'].currentValue === true) {
        this.textFormField.setValidators([ Validators.required ]);
      } else {
        this.textFormField.setValidators([ ]);
      }
      this.textFormField.updateValueAndValidity();
    }
  }

  public getValue(): string {
    return this.textFormField.value;
  }

  public isValid(): boolean {
    return this.textFormField.valid;
  }
}
