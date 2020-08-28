import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-city-form',
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CityFormComponent {

  constructor() { }

  public save(): void { }

  public cancel(): void { }
}
