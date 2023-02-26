import { HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  getClientMessage(error: Error): string {
    if (!navigator.onLine) {
      return 'No Internet Connection';
    }

    return error.message ? error.message : error.toString();
  }

  getClientStack(error: Error): string {
    return error.stack ?? 'Undefined stack';
  }

  getServerMessage(
    error: HttpErrorResponse,
    request: HttpRequest<unknown>
  ): string {
    return `${request.method} ${request.url} ${error.status} (${error.statusText})`;
  }

  getServerStack(_error: HttpErrorResponse): string {
    // handle stack trace
    return 'stack';
  }
}
