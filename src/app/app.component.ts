import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @HostListener('window:keydown', ['$event'])
  navigateToPage(event) {
    switch (event.key) {
      case 'π':
        document.location.replace('/professor');
        break;
      case 'È':
        document.location.replace('/kholleur/1');
        break;
      case 'Ò':
        document.location.replace('/student');
        break;
    }
  }
}
