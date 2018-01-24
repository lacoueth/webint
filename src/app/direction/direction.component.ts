import {Component, OnInit} from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.css']
})
export class DirectionComponent implements OnInit {

  map;
  panel;
  direction;

  constructor() {
  }

  ngOnInit() {
    this.panel = document.getElementById('panel');
    this.map = new google.maps.Map(document.getElementById('map'));

    this.direction = new google.maps.DirectionsRenderer({
      map: this.map,
      panel: this.panel
    });

    this.calculate();
  }

  calculate() {
    const origin = '450 Route des Chappes, 06410 Biot';
    const destination = '150 Allée de la Citadelle, 34000 Montpellier';
    // const destination = '365 rue evariste galois, 06410 biot';

    if (origin && destination) {
      const request = {
        origin: origin,
        destination: destination,
        travelMode: google.maps.DirectionsTravelMode.DRIVING // Type de transport
      };

      const directionsService = new google.maps.DirectionsService(); // Service de calcul d'itinéraire
      directionsService.route(request, (response, status) => { // Envoie de la requête pour calculer le parcours
        if (status === google.maps.DirectionsStatus.OK) {
          this.direction.setDirections(response); // Trace l'itinéraire sur la carte et les différentes étapes du parcours
        }
      });
    }
  };

}
