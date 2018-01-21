import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-name-and-pic',
  templateUrl: './name-and-pic.component.html',
  styleUrls: ['./name-and-pic.component.css']
})
export class NameAndPicComponent implements OnInit {

  @Input() picUrl: string;
  @Input() firstName: string;
  @Input() lastName: string;

  @Input() inHeader = true;

  constructor() {
  }

  ngOnInit() {
    /*this.picUrl = 'https://vice-images.vice.com/images/content-images/2016/07/26/ce-que-votre-photo-de-profil-facebook-dit-de-vous-body-image-1469553008.jpg?output-quality=75';
    this.firstName = 'Minila';
    this.lastName = 'Abdkoddous';*/
  }

}
