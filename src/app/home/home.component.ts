import {Component, OnInit} from '@angular/core';
import {ApplicationInfoService} from '../application-info.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string;

  constructor(private applicationInfoService: ApplicationInfoService) {
    this.title = this.applicationInfoService.getApplicationInfo().title;
  }

  ngOnInit() {
  }

}
