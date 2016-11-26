import { Component, OnInit } from '@angular/core';
import {StarshipModel} from "../../../model/starwars/starship.model";
import {SwapiService} from "../../../services/swapi/swapi.service";
import {StarWarsResourcesEnum} from "../../../resources/starwars.resource.enum";

@Component({
  selector: 'app-starwars-starships-list',
  templateUrl: 'starwars-starships-list.component.html',
  styleUrls: ['starwars-starships-list.component.css']
})
export class StarwarsStarshipsListComponent implements OnInit {

  private starships: Array<StarshipModel> = new Array();

  constructor(private swapiService: SwapiService) { }

  ngOnInit() {
  }

  private getStarships() {
    return this.swapiService
      .getResourceListByRessourceEnum(StarWarsResourcesEnum.STARSHIPS)
      .subscribe(
        response => this.starships = response.results,
        error => this.swapiService.handleError,
        () => console.log('Done')
      );
  }

  private showDetails(starship) {
    console.log(starship);
  }

}
