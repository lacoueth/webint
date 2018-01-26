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
    enonce: any;
    comments: string;
    mark: number;
    typeOfEnonce?: string;
    index?: number;
  }[] = [
    {
      date: '6/09/17',
      hour: '16',
      kholleurName: 'M.DUBOIS',
      enonce: this.random,
      comments: this.random.substr(13, 140),
      mark: 13,
      index: 1
    },
    {
      date: '24/10/17',
      hour: '18',
      kholleurName: 'Mme.FOUFA',
      enonce: this.random,
      comments: this.random.substr(13, 140),
      mark: 14,
      index: 2
    },
    {
      date: '12/11/17',
      hour: '17',
      kholleurName: 'Duc du Bourg',
      enonce: this.random,
      comments: this.random.substr(13, 140),
      mark: 9,
      index: 3
    },
    {
      date: '18/12/17',
      hour: '13',
      kholleurName: 'M.SNOW',
      enonce: this.random,
      comments: this.random.substr(13, 140),
      mark: 18,
      index: 4
    }
  ];

  newExercice = false;

  constructor() {
  }

  ngOnInit() {
    this.studentKholles = this.studentKholles
      .sort((r, b) => {
        return -(r.index - b.index);
      })
  }

  addKholle(ev) {
    console.log(ev);
    const date = new Date();
    this.studentKholles.push({
      date: date.getDate().toString() + '/' + (date.getMonth() + 1).toString() + '/' + date.getFullYear().toString(),
      hour: date.getHours().toString(),
      kholleurName: 'M.ABDKODDOUS',
      enonce: 'Nouvel enoncé',
      comments: ev.comments,
      mark: ev.mark,
      // typeOfEnonce: 'pdf',
      index: 5
    });

    this.ngOnInit();
  }
}
