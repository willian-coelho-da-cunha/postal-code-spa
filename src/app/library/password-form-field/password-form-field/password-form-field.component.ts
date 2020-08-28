import { Component, OnChanges, Input, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-form-field',
  templateUrl: './password-form-field.component.html',
  styleUrls: ['./password-form-field.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PasswordFormFieldComponent implements OnChanges {

  public passwordFormField = new FormControl('');

  public passwordHidden = true;

  @Input() public ipLabel = '';

  @Input() public ipRequired = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes['ipRequired'] && changes['ipRequired'].previousValue !== changes['ipRequired'].currentValue) {
      if (changes['ipRequired'].currentValue === true) {
        this.passwordFormField.setValidators([ Validators.required ]);
      } else {
        this.passwordFormField.setValidators([ ]);
      }
      this.passwordFormField.updateValueAndValidity();
    }
  }

  public getValue(): string {
    return this.passwordFormField.value;
  }

  public isValid(): boolean {
    return this.passwordFormField.valid;
  }
}
