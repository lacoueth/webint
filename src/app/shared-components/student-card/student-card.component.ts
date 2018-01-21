import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent implements OnInit {

  @Input() student: {
    firstName: string;
    lastName: string;
    average?: number;
    picUrl: string
  };
  picUrl: string;
  firstName: string;
  lastName: string;
  averageMark?: number;

  constructor() { }

  ngOnInit() {
  }

}
