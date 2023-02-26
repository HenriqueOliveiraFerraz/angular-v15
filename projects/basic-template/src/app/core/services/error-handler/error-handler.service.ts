import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { ErrorService } from '../error/error.service';
import { NotificationService } from '../notification/notification.service';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService implements ErrorHandler {
  // Error handling is important and needs to be loaded first.
  // Because of this we should manually inject the services with Injector.
  constructor(private injector: Injector) {}

  handleError(error: unknown) {
    const errorService = this.injector.get(ErrorService);
    const notifier = this.injector.get(NotificationService);

    if (error instanceof Error) {
      const message = errorService.getClientMessage(error);
      const stackTrace = errorService.getClientStack(error);
      notifier.showErrorSnackBar(message);

      console.error(`${message} ${stackTrace}`);
    } else {
      throw error;
    }
  }
}
