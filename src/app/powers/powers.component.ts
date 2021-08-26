import { Component, OnInit } from '@angular/core';
import { PowerWebService } from '../shared/web-services/power.webservice';

@Component({
  selector: 'app-powers',
  templateUrl: './powers.component.html',
  styleUrls: ['./powers.component.scss']
})
export class PowersComponent {

  constructor(
    private powerWebService: PowerWebService

  ) {
    powerWebService.getPowers().subscribe(
      (powers) => {
        // Tout s'est bien passé
        console.log('getPowers from API: ', powers);
      }, (error) => {
        // Il y a une erreur
        console.error('ERROR getPowers from API :', error);
      }
    )
  }


}
