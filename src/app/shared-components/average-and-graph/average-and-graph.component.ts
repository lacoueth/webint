import {Component, Input, OnInit} from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';

@Component({
  selector: 'app-average-and-graph',
  templateUrl: './average-and-graph.component.html',
  styleUrls: ['./average-and-graph.component.css'],
  providers : [{provide: APP_BASE_HREF, useValue : '/' }]
})
export class AverageAndGraphComponent implements OnInit {

  @Input() marks: {
    date: string,
    kholleur: string,
    mark: number
  }[];

  avg: number;

  constructor() {
  }

  ngOnInit() {
    this.avg = 13;
  }

}
