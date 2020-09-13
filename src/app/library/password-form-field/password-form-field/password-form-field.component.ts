import { Component, OnChanges, Input, HostBinding, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

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

  @Input() public ipReadonly = false;

  @HostBinding() public style = 'width: 100%; min-width: 100%;';

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

  public setValue(value: string): void {
    this.passwordFormField.setValue(value);
  }

  public getValue(): string {
    return this.passwordFormField.value;
  }

  public getStatusChanges(): Observable<any> {
    return this.passwordFormField.statusChanges;
  }

  public isValid(): boolean {
    return this.passwordFormField.valid;
  }

  public changePasswordVisibility(): void {
    if (this.ipReadonly === false) {
      this.passwordHidden = !this.passwordHidden;
    }
  }
}
