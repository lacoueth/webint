import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-exercice-form',
  templateUrl: './exercice-form.component.html',
  styleUrls: ['./exercice-form.component.css']
})
export class ExerciceFormComponent implements OnInit {
  @Output() newKholle = new EventEmitter<any>();

  onKhole = false;
  comments: string;
  mark: number;
  exercice: any;
  onMark: false;

  constructor() {
  }

  ngOnInit() {
  }

  sendKhole() {
    this.newKholle.emit({
      exercice: this.exercice,
      comments: this.comments,
      mark: this.mark
    });
  }

  startExercice(event) {
    this.onKhole = true;
    this.exercice = event;
    console.log(event);
  }
}
