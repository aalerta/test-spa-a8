import {Component} from '@angular/core';
import {ApplicationInfoService} from './application-info.service';
import {UserService} from './user.service';
import {User} from './user';
import {ApplicationInfo} from './application-info';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  version: string;
  user: string;

  constructor(private applicationInfoService: ApplicationInfoService, private userService: UserService) {
    const applicationInfo: ApplicationInfo = applicationInfoService.getApplicationInfo();
    this.title = applicationInfo.title;
    this.version = applicationInfo.version;
    const currentUser: User = userService.getCurrentUser();
    this.user = currentUser.name + ' ' + currentUser.surname + ' (' + currentUser.email + ')';
  }
}
