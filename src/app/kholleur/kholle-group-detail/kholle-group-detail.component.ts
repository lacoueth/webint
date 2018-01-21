import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-kholle-group-detail',
  templateUrl: './kholle-group-detail.component.html',
  styleUrls: ['./kholle-group-detail.component.css']
})
export class KholleGroupDetailComponent implements OnInit {

  profile: any;
  group: any;

  selectedStudent: any;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.data.subscribe(res => {
      console.log(res['professorData']);
      this.profile = res['professorData']['profile'];
      this.group = res['professorData']['groups'][0];
      this.selectedStudent = this.group.students[0];
    })
  }
}
