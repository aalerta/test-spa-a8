import {Injectable} from '@angular/core';
import {User} from './user';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  getCurrentUser(): Observable<User> {
    return this.httpClient.get('/assets/currentUser.json').pipe(map(object => new User(object)));
  }
}
