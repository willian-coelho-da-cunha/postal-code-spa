import { Component, OnChanges, Input, HostBinding, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-text-form-field',
  templateUrl: './text-form-field.component.html',
  styleUrls: ['./text-form-field.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextFormFieldComponent implements OnChanges {

  public textFormField = new FormControl('');

  @Input() public ipLabel = '';

  @Input() public ipRequired = false;

  @Input() public ipReadonly = false;

  @HostBinding() public style = 'width: 100%; min-width: 100%;';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes['ipRequired'] && changes['ipRequired'].previousValue !== changes['ipRequired'].currentValue) {
      if (changes['ipRequired'].currentValue === true) {
        this.textFormField.setValidators([ Validators.required ]);
      } else {
        this.textFormField.setValidators([ ]);
      }
      this.textFormField.updateValueAndValidity();
    }
  }

  public _error(): string | undefined {
    return this.textFormField.errors ? Object.keys(this.textFormField.errors).shift() : undefined;
  }

  public setValue(value: string): void {
    this.textFormField.setValue(value);
  }

  public getValue(): string {
    return this.textFormField.value;
  }

  public getStatusChanges(): Observable<any> {
    return this.textFormField.statusChanges;
  }

  public isValid(): boolean {
    return this.textFormField.valid;
  }
}
