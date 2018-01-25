import {Component, Input, OnInit, ViewChild,ChangeDetectorRef, AfterViewInit} from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';

@Component({
  selector: 'app-average-and-graph',
  templateUrl: './average-and-graph.component.html',
  styleUrls: ['./average-and-graph.component.css'],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}]
})
export class AverageAndGraphComponent implements OnInit {

  @ViewChild('canvas')canvas: any;
  gradient : any;
  reload = true
  datasets = [
    {
      label: "Note",
      data: [12, 19, 3, 5, 2, 16, 14, 6, 10],
      lineTension: 0,

    }
  ];

  labels = ['4 Janv', '13 Janv', '21 Janv', '6 Fev', '18 Fev', '25 Fev', '4 Mars', '5 Avr', '19 Avr'];
  backgroundColor = [{ // grey
    backgroundColor : 'rgba(149,38,167,0.5)',
  }];
  options = {
    legend: {
      display: false
    },
    tooltips: {
      enabled: false
    },
    bezierCurve: false,

    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };
  @Input() marks: {
    date: string,
    kholleur: string,
    mark: number;

  }[];

  avg: number;

  constructor( private cd : ChangeDetectorRef) {
  }

  ngOnInit() {
    this.avg = 13;

  }

}
