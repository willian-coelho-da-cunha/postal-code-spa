import { FormControl } from '@angular/forms';

export class FormField {

  public formControl = new FormControl();

  public formControlError(): string | undefined {
    return this.formControl.errors ? Object.keys(this.formControl.errors).shift() : undefined;
  }
}
