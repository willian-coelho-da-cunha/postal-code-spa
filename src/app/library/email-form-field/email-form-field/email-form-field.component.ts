import { Component, OnChanges, Input, HostBinding, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

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

  @Input() public ipReadonly = false;

  @HostBinding() public style = 'width: 100%; min-width: 100%;';

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

  public _error(): string | undefined {
    return this.emailFormField.errors ? Object.keys(this.emailFormField.errors).shift() : undefined;
  }

  public setValue(value: string): void {
    this.emailFormField.setValue(value);
  }

  public getValue(): string {
    return this.emailFormField.value;
  }

  public getStatusChanges(): Observable<any> {
    return this.emailFormField.statusChanges;
  }

  public isValid(): boolean {
    return this.emailFormField.valid;
  }
}
