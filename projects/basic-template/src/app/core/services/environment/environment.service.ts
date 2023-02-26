import { Injectable } from '@angular/core';
import { environment } from 'projects/basic-template/src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService {
  development: boolean = environment.development;
  staging: boolean = environment.staging;
  production: boolean = environment.production;
  apiUrl: string = environment.apiUrl;
  recaptcha: {
    siteKey: string;
  } = environment.recaptcha;
}
