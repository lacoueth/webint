import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-kholle-group',
  templateUrl: './kholle-group.component.html',
  styleUrls: ['./kholle-group.component.css']
})
export class KholleGroupComponent implements OnInit {

  @Input() group: {

  }

  constructor() { }

  ngOnInit() {
  }

}
