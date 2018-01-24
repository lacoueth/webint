import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-form',
  templateUrl: './exercice-form.component.html',
  styleUrls: ['./exercice-form.component.css']
})
export class ExerciceFormComponent implements OnInit {
  onKhole = false;
  comments: string;
  mark: number;
  exercice: any;
  onMark: false
  constructor() { }

  ngOnInit() {
  }
  sendKhole(){

  }
 startExercice(event) {
    this.onKhole = true;
    this.exercice = event
 }
}
