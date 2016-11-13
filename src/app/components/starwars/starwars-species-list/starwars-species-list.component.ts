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

  private species: Array<SpecieModel>;

  constructor(private swapiService: SwapiService) { }

  ngOnInit() {
  }

  private getSpecies() {
    return this.swapiService
      .getResourceList(StarWarsResourcesEnum.SPECIES)
      .subscribe(response => {
          this.species = response;
        },
        () => console.log('Done')
      );
  }

}
