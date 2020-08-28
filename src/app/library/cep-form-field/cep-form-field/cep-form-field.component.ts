import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';
import { FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

export function cepValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    if (control.value > 100000 && control.value < 999999 && !(/(\d)\w\1/).test(String(control.value))) {
      return null;
    }
    return { cep: true };
  }
}

@Component({
  selector: 'app-cep-form-field',
  templateUrl: './cep-form-field.component.html',
  styleUrls: ['./cep-form-field.component.css']
})
export class CepFormFieldComponent implements OnChanges {

  public cepFormField = new FormControl('', [ cepValidator ]);

  @Input() public ipLabel = '';

  @Input() public ipRequired = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes['ipRequired'] && changes['ipRequired'].previousValue !== changes['ipRequired'].currentValue) {
      if (changes['ipRequired'].currentValue === true) {
        this.cepFormField.setValidators([ cepValidator, Validators.required ]);
      } else {
        this.cepFormField.setValidators([ cepValidator ]);
      }
      this.cepFormField.updateValueAndValidity();
    }
  }

  public getValue(): number {
    return this.cepFormField.value;
  }
}
