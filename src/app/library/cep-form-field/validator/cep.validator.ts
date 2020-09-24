import { ValidatorFn, AbstractControl } from '@angular/forms';

export function cepValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    if (control.value && (/(\d)\w\1/).test(String(control.value))) {
      return { cep: true };
    }
    return null;
  }
}
