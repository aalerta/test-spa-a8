import {Component} from '@angular/core';
import {ApplicationInfoService} from './application-info.service';
import {UserService} from './user.service';

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
    const applicationInfo = applicationInfoService.getApplicationInfo();
    this.title = applicationInfo.title;
    this.version = applicationInfo.version;
  }
}
