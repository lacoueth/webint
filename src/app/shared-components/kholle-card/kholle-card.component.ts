import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-kholle-card',
  templateUrl: './kholle-card.component.html',
  styleUrls: ['./kholle-card.component.css']
})
export class KholleCardComponent implements OnInit {

  @Input() kholleData: {
    date: string;
    hour: string;
    kholleurName: string;
    enonce: string;
    comments: string;
    mark: number;
  };

  constructor() {
  }

  ngOnInit() {
  }

}
