import { Component, AfterViewInit, OnDestroy, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { combineLatest, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';

/**@description Services.*/
import { LoginService } from '../login.service';

/**@description Library.*/
import { EmailFormFieldComponent } from '../../library/email-form-field/email-form-field/email-form-field.component';
import { PasswordFormFieldComponent } from '../../library/password-form-field/password-form-field/password-form-field.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements AfterViewInit, OnDestroy {

  private readonly end: Subject<void> = new Subject<void>();

  public loginInProgress = false;

  public submitButtonDisabled = true;

  public button_label = $localize`Log In`;

  public emailFormField_label = $localize`Your e-mail address`;

  public passwordFormField_label = $localize`Your password`;

  @ViewChild(EmailFormFieldComponent) private emailFormField: EmailFormFieldComponent;

  @ViewChild(PasswordFormFieldComponent) private passwordFormField: PasswordFormFieldComponent;

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngAfterViewInit(): void {
    combineLatest([
      this.emailFormField.getStatusChanges(),
      this.passwordFormField.getStatusChanges()])
    .pipe(takeUntil(this.end))
    .subscribe({
      next: (response): void => {
        this.submitButtonDisabled = response[0] !== 'VALID' || response[1] !== 'VALID';
      }
    });
  }

  ngOnDestroy(): void {
    this.end.next();
    this.end.complete();
  }

  public login(): void {
    this.loginInProgress = true;
    this.loginService
      .login(this.emailFormField.getValue(), this.passwordFormField.getValue())
      .pipe(takeUntil(this.end))
      .subscribe({
        next: (): void => {
          this.loginInProgress = false;
          this.router.navigate(['/city/list']);
        },
        error: (): void => {
          this.loginInProgress = false;
        }
      })
    ;
  }
}
