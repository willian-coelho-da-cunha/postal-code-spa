import { ValidatorFn, AbstractControl } from '@angular/forms';

export function cepValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    if (control.value && control.value < 10000000) {
      return { cep: true };
    }
    return null;
  }
}
