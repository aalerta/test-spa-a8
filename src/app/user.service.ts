import {Injectable} from '@angular/core';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: User;

  constructor() {
    this.currentUser = new User({email: 'angelo@alerta.it', id: 'aalerta', name: 'Angelo', surname: 'Alerta'});
  }

  getCurrentUser(): User {
    return this.currentUser;
  }
}
