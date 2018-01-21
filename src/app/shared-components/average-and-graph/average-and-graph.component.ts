import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-average-and-graph',
  templateUrl: './average-and-graph.component.html',
  styleUrls: ['./average-and-graph.component.css']
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
