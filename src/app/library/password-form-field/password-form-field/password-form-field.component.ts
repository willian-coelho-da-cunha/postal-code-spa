import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-password-form-field',
  templateUrl: './password-form-field.component.html',
  styleUrls: ['./password-form-field.component.css']
})
export class PasswordFormFieldComponent {

  public passwordFormField = new FormControl('');

  public passwordHidden = true;

  @Input() public ipLabel = '';

  @Input() public ipRequired = false;

  public getValue(): string {
    return this.passwordFormField.value;
  }
}
