import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {UploadEvent, UploadFile} from 'ngx-file-drop';

@Component({
  selector: 'app-dragndrop',
  templateUrl: './dragndrop.component.html',
  styleUrls: ['./dragndrop.component.css']
})
export class DragndropComponent implements OnInit {
  @Output() exerciceUpdated = new EventEmitter();

  index = 0;
  exercice: any;
  currentexo = null;

  constructor() {
  }

  ngOnInit() {

  }

  activeColor: string = 'green';
  baseColor: string = '#ccc';
  overlayColor: string = 'rgba(255,255,255,0.5)';

  dragging: boolean = false;
  loaded: boolean = false;
  imageLoaded: boolean = false;
  imageSrc: string = '';

  handleDragEnter() {
    this.dragging = true;
  }

  handleDragLeave() {
    this.dragging = false;
  }

  handleDrop(e) {
    e.preventDefault();
    this.dragging = false;
    this.handleInputChange(e);
  }

  handleImageLoad() {
    this.imageLoaded = true;
  }

  handleInputChange(e) {
    console.log(e)
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var reader = new FileReader();

    this.loaded = false;

    reader.onload = this._handleReaderLoaded.bind(this);
    this.exercice = file;

  }

  _handleReaderLoaded(e) {
    var reader = e.target;
    this.imageSrc = reader.result;
    this.loaded = true;
  }

  startKhole() {
    this.exerciceUpdated.emit(this.exercice);
  }

}

