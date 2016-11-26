import { Component, OnInit } from '@angular/core';
import { CharacterModel } from "../../../model/starwars/character.model";
import { SwapiService } from "../../../services/swapi/swapi.service";
import 'rxjs/add/operator/map';
import { StarWarsResourcesEnum } from "../../../resources/starwars.resource.enum";

@Component({
  selector: 'app-starwars-characters-list',
  templateUrl: 'starwars-characters-list.component.html',
  styleUrls: ['starwars-characters-list.component.css']
})

export class StarwarsCharactersListComponent implements OnInit {

  private characters: Array<CharacterModel>;

  constructor(private swapiService: SwapiService) {}

  ngOnInit() {}

  private getCharacters() {
    return this.swapiService
      .getResourceListByRessourceEnum(StarWarsResourcesEnum.PEOPLE)
      .subscribe(
        response => this.characters = response,
        error => this.swapiService.handleError,
        () => console.log('Done')
      );
  }

}
