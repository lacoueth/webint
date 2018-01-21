import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route} from '@angular/router';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {

  studentData: any;
  studentMarks: any;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.data.subscribe(res => {
      console.log(res['studentData']);
      this.studentData = res['studentData']['profile'];
      this.studentMarks = res['studentData']['marks'];
    })
  }

}
