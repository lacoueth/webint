import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-matiere-card',
  templateUrl: './matiere-card.component.html',
  styleUrls: ['./matiere-card.component.css']
})
export class MatiereCardComponent implements OnInit {

  @Input() matiere: string;
  @Input() marks: {
    date: string,
    kholleur: string,
    mark: number
  }[];

  avg;

  constructor() {
  }

  ngOnInit() {
    this.avg = 12;
    // this.avg = this.marks.map(r => r.mark) / this.marks.length;
  }

}
