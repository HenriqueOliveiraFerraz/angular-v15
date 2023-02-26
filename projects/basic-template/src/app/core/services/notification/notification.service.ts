import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(public snackBar: MatSnackBar) {}

  private readonly successDefaultSnackBarConfig: MatSnackBarConfig = {
    duration: 5000,
    panelClass: ['snack-bar-success-700'],
    horizontalPosition: 'center',
    verticalPosition: 'top',
  };

  private readonly warningDefaultSnackBarConfig: MatSnackBarConfig = {
    duration: 5000,
    panelClass: ['snack-bar-warning-700'],
    horizontalPosition: 'center',
    verticalPosition: 'top',
  };

  private readonly errorDefaultSnackBarConfig: MatSnackBarConfig = {
    duration: 5000,
    panelClass: ['snack-bar-warn-700'],
    horizontalPosition: 'center',
    verticalPosition: 'top',
  };

  showSuccessSnackBar(
    message: string,
    action = 'X',
    config = this.successDefaultSnackBarConfig
  ): void {
    this.snackBar.open(message, action, config);
  }

  showSuccessSnackBarComponent<T extends ComponentType<T>>(
    component: T,
    config = this.successDefaultSnackBarConfig
  ) {
    this.snackBar.openFromComponent(component, config);
  }

  showWarningSnackBar(
    message: string,
    action = 'X',
    config = this.warningDefaultSnackBarConfig
  ): void {
    this.snackBar.open(message, action, config);
  }

  showWarningSnackBarComponent<T extends ComponentType<T>>(
    component: T,
    config = this.warningDefaultSnackBarConfig
  ) {
    this.snackBar.openFromComponent(component, config);
  }

  showErrorSnackBar(
    message: string,
    action = 'X',
    config = this.errorDefaultSnackBarConfig
  ): void {
    this.snackBar.open(message, action, config);
  }

  showErrorSnackBarComponent<T extends ComponentType<T>>(
    component: T,
    config = this.errorDefaultSnackBarConfig
  ) {
    this.snackBar.openFromComponent(component, config);
  }
}
