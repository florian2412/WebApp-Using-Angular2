import { Component, OnInit } from '@angular/core';
import {PlanetModel} from "../../../model/starwars/planet.model";
import {SwapiService} from "../../../services/swapi/swapi.service";
import {StarWarsResourcesEnum} from "../../../resources/starwars.resource.enum";

@Component({
  selector: 'app-starwars-planets-list',
  templateUrl: 'starwars-planets-list.component.html',
  styleUrls: ['starwars-planets-list.component.css']
})
export class StarwarsPlanetsListComponent implements OnInit {

  private planets: Array<PlanetModel>;

  constructor(private swapiService: SwapiService) { }

  ngOnInit() {
  }

  private getPlanets() {
    return this.swapiService
      .getResourceList(StarWarsResourcesEnum.PLANETS)
      .subscribe(response => {
          this.planets = response;
        },
        () => console.log('Done')
      );
  }

}
