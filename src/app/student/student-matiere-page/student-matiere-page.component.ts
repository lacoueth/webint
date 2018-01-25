import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-student-matiere-page',
  templateUrl: './student-matiere-page.component.html',
  styleUrls: ['./student-matiere-page.component.css']
})
export class StudentMatierePageComponent implements OnInit {

  private random = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium ligula mauris, eget accumsan nunc dictum eu. Etiam nisi lacus, sagittis eu lorem ut, venenatis fringilla sem. Quisque nisi ligula, viverra eu molestie sed, auctor non turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.';

  matiere: string;
  datetime : string;
  studentData: any;
  studentMarks: any;
  groupstopass =[];
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
  constructor(private _route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this._route.data.subscribe(res => {
      this.studentData = res['studentData']['profile'];

      this._route.params.subscribe(param => {
        this.matiere = param['matiere'];
        this.groupstopass =[];
        this.studentMarks = res['studentData']['marks'];
        for (const x of this.studentMarks) {
          this.groupstopass.push({name : x.matiere, route: '/student/' + x.matiere})
        }
      });
    });
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
