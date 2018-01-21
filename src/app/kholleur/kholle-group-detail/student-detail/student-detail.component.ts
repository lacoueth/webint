import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  @Input() student: any;

  private random = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium ligula mauris, eget accumsan nunc dictum eu. Etiam nisi lacus, sagittis eu lorem ut, venenatis fringilla sem. Quisque nisi ligula, viverra eu molestie sed, auctor non turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.';

  studentKholles: {
    date: string;
    hour: string;
    kholleurName: string;
    enonce: string;
    comments: string;
    mark: number;
  }[] = [
    {date: '12/23/12', hour: '16', kholleurName: 'M.DUBOIS', enonce: this.random, comments: this.random.substr(13, 140), mark: 13},
    {date: '12/23/12', hour: '18', kholleurName: 'Mme.FOUFA', enonce: this.random, comments: this.random.substr(13, 140), mark: 14},
    {date: '12/23/12', hour: '17', kholleurName: 'Duc du Bourg', enonce: this.random, comments: this.random.substr(13, 140), mark: 9},
    {date: '12/23/12', hour: '13', kholleurName: 'M.SNOW', enonce: this.random, comments: this.random.substr(13, 140), mark: 18}
  ];

  newExercice = false;

  constructor() {
  }

  ngOnInit() {
  }

}
