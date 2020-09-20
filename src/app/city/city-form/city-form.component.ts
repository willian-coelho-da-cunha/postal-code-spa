import { Component, OnInit, AfterViewInit, OnDestroy, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { Subject, combineLatest } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

/**@description Models.*/
import { City } from '../model/city.model';

/**@description Services.*/
import { CityService } from '../city.service';
import { LoginService } from '../../login/login.service';

/**@description Library.*/
import { CepFormFieldComponent } from '../../library/cep-form-field/cep-form-field/cep-form-field.component';
import { TextFormFieldComponent } from '../../library/text-form-field/text-form-field/text-form-field.component';

@Component({
  selector: 'app-city-form',
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CityFormComponent implements OnInit, AfterViewInit, OnDestroy {

  private end = new Subject<boolean>();

  public saveInProgress = false;

  public submitButtonDisabled = true;

  public cepFormField_label = $localize`Zip code`;

  public textFormField_label = $localize`Name`;

  public save_button_label = $localize`Save`;

  public cancel_button_label = $localize`Cancel`;

  public logout_button_label = $localize`Log Out`;

  @ViewChild(CepFormFieldComponent) private cepFormField: CepFormFieldComponent;

  @ViewChild(TextFormFieldComponent) private textFormField: TextFormFieldComponent;

  constructor(
    private router: Router,
    private cityService: CityService,
    private loginService: LoginService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getAttributeByActivatedRoute();
  }

  ngAfterViewInit(): void {
    combineLatest([
      this.cepFormField.getStatusChanges(),
      this.textFormField.getStatusChanges()])
    .pipe(takeUntil(this.end))
    .subscribe(
      response => {
        this.submitButtonDisabled = response[0] !== 'VALID' || response[1] !== 'VALID';
      }
    );
  }

  ngOnDestroy(): void {
    this.end.next();
    this.end.complete();
  }

  private getAttributeByActivatedRoute(): void {
    this.activatedRoute
      .params
      .pipe(takeUntil(this.end))
      .subscribe(
        response => {
          const cityId = response ? response['id'] : null;
          if (cityId) {
            this.getCity(cityId);
          }
        }
      )
    ;
  }

  private getCity(cityId: string): void {
    this.cityService
      .getCity(cityId)
      .pipe(takeUntil(this.end))
      .subscribe(
        response => {
          if (response) {
            this.cepFormField.setValue(response.zipCode);
            this.textFormField.setValue(response.name);
          }
        }
      )
    ;
  }

  private saveCity(city: City): void {
    this.cityService
      .saveCity(city)
      .pipe(takeUntil(this.end))
      .subscribe(
        () => {
          this.router.navigate(['/city/list']);
        }
      )
    ;
  }

  public clickSave(): void {
    const city = new City();
    this.saveInProgress = true;
    city.name = this.textFormField.getValue();
    city.zipCode = this.cepFormField.getValue();
    this.saveCity(city);
  }

  public clickCancel(): void {
    this.router.navigate(['/city/list']);
  }

  public clickLogOut(): void {
    this.loginService
      .logout()
      .pipe(takeUntil(this.end))
      .subscribe(
        () => {
          this.router.navigate(['/login']);
        }
      )
    ;
  }
}
