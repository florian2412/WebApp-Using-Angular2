import { Component, OnInit } from '@angular/core';
import {SpecieModel} from "../../../model/starwars/specie.model";
import {StarWarsResourcesEnum} from "../../../resources/starwars.resource.enum";
import {SwapiService} from "../../../services/swapi/swapi.service";

@Component({
  selector: 'app-starwars-species-list',
  templateUrl: 'starwars-species-list.component.html',
  styleUrls: ['starwars-species-list.component.css']
})
export class StarwarsSpeciesListComponent implements OnInit {

  private species: Array<SpecieModel> = new Array();

  constructor(private swapiService: SwapiService) { }

  ngOnInit() {
  }

  private getSpecies() {
    return this.swapiService
      .getResourceListByRessourceEnum(StarWarsResourcesEnum.SPECIES)
      .subscribe(
        response => this.species = response.results,
        error => this.swapiService.handleError,
        () => console.log('Done')
      );
  }

  private showDetails(specie) {
    console.log(specie);
  }

}
