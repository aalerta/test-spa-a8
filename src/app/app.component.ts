import {Component, OnInit} from '@angular/core';
import {ApplicationInfoService} from './application-info.service';
import {UserService} from './user.service';
import {User} from './user';
import {ApplicationInfo} from './application-info';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  version: string;
  user: string;
  items: MenuItem[];

  constructor(private applicationInfoService: ApplicationInfoService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.applicationInfoService.getApplicationInfo().subscribe((applicationInfo: ApplicationInfo) => {
      this.title = applicationInfo.title;
      this.version = applicationInfo.version;
    });
    this.userService.getCurrentUser().subscribe((currentUser: User) =>
      this.user = currentUser.name + ' ' + currentUser.surname + ' (' + currentUser.email + ')'
    );
    this.items = [
        {label: 'Home', icon: 'pi pi-home', routerLink: ['/home']},
        {label: 'Contacts', icon: 'pi pi-id-card', routerLink: ['/contacts']}
    ];
  }
}
