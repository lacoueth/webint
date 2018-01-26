import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-name-and-pic',
  templateUrl: './name-and-pic.component.html',
  styleUrls: ['./name-and-pic.component.css']
})
export class NameAndPicComponent implements OnInit {

  @Input() picUrl: string;
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() routes: any;
  @Input() inHeader = true;
  datetime: string;


  private days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  constructor() {
  }

  ngOnInit() {
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
