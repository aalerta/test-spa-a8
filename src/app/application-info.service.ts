import {Injectable} from '@angular/core';
import {ApplicationInfo} from './application-info';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationInfoService {

  constructor(private httpClient: HttpClient) {
  }

  getApplicationInfo(): Observable<ApplicationInfo> {
    return this.httpClient.get('/assets/application-info.json').pipe(map(object => new ApplicationInfo(object)));
  }
}
