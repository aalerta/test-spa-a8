import { Injectable } from '@angular/core';
import {ApplicationInfo} from './application-info';

@Injectable({
  providedIn: 'root'
})
export class ApplicationInfoService {
  applicationInfo: ApplicationInfo;

  constructor() {
    this.applicationInfo = new ApplicationInfo({title: 'test-spa-a8', version: '0.0.1'});
  }

  getApplicationInfo(): ApplicationInfo {
    return this.applicationInfo;
  }
}
