import { Component, OnChanges, Input, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-form-field',
  templateUrl: './email-form-field.component.html',
  styleUrls: ['./email-form-field.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmailFormFieldComponent implements OnChanges {

  public emailFormField = new FormControl('', [ Validators.email ]);

  @Input() public ipLabel = '';

  @Input() public ipRequired = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes['ipRequired'] && changes['ipRequired'].previousValue !== changes['ipRequired'].currentValue) {
      if (changes['ipRequired'].currentValue === true) {
        this.emailFormField.setValidators([ Validators.email, Validators.required ]);
      } else {
        this.emailFormField.setValidators([ Validators.email ]);
      }
      this.emailFormField.updateValueAndValidity();
    }
  }

  public getValue(): string {
    return this.emailFormField.value;
  }

  public isValid(): boolean {
    return this.emailFormField.valid;
  }
}
