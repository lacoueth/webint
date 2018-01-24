import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dragndrop',
  templateUrl: './dragndrop.component.html',
  styleUrls: ['./dragndrop.component.css']
})
export class DragndropComponent implements OnInit {
  index = 0;
  exercices = [];
  currentexo = null;

  constructor() {
  }

  ngOnInit() {
    /*// Check for the various File API support.
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      // Great success! All the File APIs are supported.
    } else {
      alert('The File APIs are not fully supported in this browser.');
    }*/
  }


  allowDrop(ev) {
    ev.preventDefault();
    document.getElementById('div1').style.border = '4px dotted green';
  }

  launchExo(param) {
    document.getElementById('titlecontent').style.display = 'block';
    this.currentexo = param.value - 1;
    document.getElementById('titlecontent').innerHTML = 'Vous consultez l\'exercice : ' + param.title;
    // Set the extension for the file
    const fileExtensionText = /text.*/;
    const fileExtensionPdf = /.*pdf/;
    // Get the file object
    const fileTobeRead = this.exercices[param.value - 1];
    // Check of the extension match
    if (fileTobeRead.type.match(fileExtensionText)) {
      // Initialize the FileReader object to read the 2file
      const fileReader = new FileReader();
      fileReader.onload = function () {
        const fileContents = document.getElementById('printingtext');
        fileContents.innerText = fileReader.result;
      };
      fileReader.readAsText(fileTobeRead);

      document.getElementById('printingPDF').style.display = 'none';
      document.getElementById('printingtext').style.display = 'block';
    } else if (fileTobeRead.type.match(fileExtensionPdf)) {
      const url = URL.createObjectURL(fileTobeRead);
      document.getElementById('printingPDF').setAttribute('width', '400');
      document.getElementById('printingPDF').setAttribute('height', '400');
      document.getElementById('printingPDF').setAttribute('data', url);

      document.getElementById('printingPDF').style.display = 'block';
      document.getElementById('printingtext').style.display = 'none';
    } else {
      alert('Please select text or a pdf file');
      document.getElementById('printingPDF').style.display = 'none';
      document.getElementById('printingtext').style.display = 'none';
    }
  }


  quitDrag() {
    document.getElementById('div1').style.border = '1px solid #aaaaaa';
  }

  drop(ev) {
    ev.preventDefault();
    const dt = ev.dataTransfer;
    if (dt.items) {
      for (var i = 0; i < dt.items.length; i++) {
        if (dt.items[i].kind === 'file') {
          var f = dt.items[i].getAsFile();
          if (f.type.match(/.*pdf/) || f.type.match(/text.*/)) {
            this.index = this.index + 1;
            var node = document.createElement('LI');
            var textnode = document.createTextNode(f.name);
            node.appendChild(textnode);
            node.setAttribute('onclick', 'launchExo(this)');
            node.setAttribute('title', f.name);
            node.setAttribute('value', this.index.toString());
            this.exercices.push(f);
            document.getElementById('myList').appendChild(node);
          } else {
            alert('Can\'tload' + f.name + '.Please select text or a pdf file');
          }
        }
      }
      document.getElementById('div1').style.border = '1px solid #aaaaaa';
    }

  }

  handleFiles(ev) {
    const f = ev
      .target
      .files[0];

    if (f.type.match(/.*pdf/) || f.type.match(/text.*/)) {
      this.index = this.index + 1;
      // const namef = f.name;
      // var node = document.createElement('LI');
      // var textnode = document.createTextNode(namef);
      // node.appendChild(textnode);
      // node.setAttribute('onclick', 'launchExo(this)');
      // node.setAttribute('title', namef);
      // node.setAttribute('value', this.index.toString());
      this.exercices.push(f);
      // document.getElementById('myList').appendChild(node);
    } else {
      alert('Can\'t load ' + f.name + '.Please select text or a pdf file');
    }
  }

  remove() {
    if (this.currentexo != null) {
      const list = document.getElementById('myList');
      list.removeChild(list.childNodes[this.currentexo + 1]);
      this.exercices.splice(this.currentexo, 1);
      for (let i = 1; i < this.exercices.length + 1; i++) {
        (list.childNodes[i] as HTMLElement).setAttribute('value', i.toString())
      }
      document.getElementById('printingPDF').style.display = 'none';
      document.getElementById('printingtext').style.display = 'none';
      document.getElementById('titlecontent').style.display = 'none';
      this.index = this.exercices.length;
      this.currentexo = null;
    }
  }

}
