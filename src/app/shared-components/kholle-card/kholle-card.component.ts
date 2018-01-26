import {Component, Input, OnInit} from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-kholle-card',
  templateUrl: './kholle-card.component.html',
  styleUrls: ['./kholle-card.component.css']
})
export class KholleCardComponent implements OnInit {

  @Input() kholleData: {
    date: string;
    hour: string;
    kholleurName: string;
    enonce: any;
    comments: string;
    mark: number;
    typeOfEnonce?: any;
  };

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    if (this.kholleData.typeOfEnonce) {
      this.kholleData.enonce = this.sanitizer.bypassSecurityTrustUrl(this.kholleData.enonce);
    }
  }

}
