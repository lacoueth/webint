import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-date-and-time',
  templateUrl: './date-and-time.component.html',
  styleUrls: ['./date-and-time.component.css']
})
export class DateAndTimeComponent implements OnInit {

  datetime: string;

  private days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  constructor() {
  }

  ngOnInit() {
    // const date = new Date();
    // this.datetime = this.days[date.getDay()] + date.getDate() + date.getMonth();
    this.datetime = this.getCurrentDate();
  }


  getCurrentDate() {
    const options = {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    };
    return (new Date()).toLocaleDateString('fr-FR', options);
  }
}
