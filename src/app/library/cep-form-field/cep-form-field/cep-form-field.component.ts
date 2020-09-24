import { Component, OnChanges, Input, HostBinding, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

/**@description Custom validators.*/
import { cepValidator } from '../validator/cep.validator';

@Component({
  selector: 'app-cep-form-field',
  templateUrl: './cep-form-field.component.html',
  styleUrls: ['./cep-form-field.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CepFormFieldComponent implements OnChanges {

  public cepFormField = new FormControl('', [ cepValidator() ]);

  @Input() public ipLabel = '';

  @Input() public ipRequired = false;

  @Input() public ipReadonly = false;

  @HostBinding() public style = 'width: 100%; min-width: 100%;';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes['ipRequired'] && changes['ipRequired'].previousValue !== changes['ipRequired'].currentValue) {
      if (changes['ipRequired'].currentValue === true) {
        this.cepFormField.setValidators([ cepValidator(), Validators.required ]);
      } else {
        this.cepFormField.setValidators([ cepValidator() ]);
      }
      this.cepFormField.updateValueAndValidity();
    }
  }

  public _error(): string | undefined {
    return this.cepFormField.errors ? Object.keys(this.cepFormField.errors).shift() : undefined;
  }

  public setValue(value: number): void {
    this.cepFormField.setValue(value);
  }

  public getValue(): number {
    return this.cepFormField.value;
  }

  public getStatusChanges(): Observable<any> {
    return this.cepFormField.statusChanges;
  }

  public isValid(): boolean {
    return this.cepFormField.valid;
  }
}
