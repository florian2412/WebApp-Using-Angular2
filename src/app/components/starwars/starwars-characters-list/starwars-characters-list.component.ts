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

  private characters: Array<CharacterModel> = new Array();
  private next: any = null;
  private previous: any = null;

  constructor(private swapiService: SwapiService) {}

  ngOnInit() {}

  private getCharacters() {
    return this.swapiService
      .getResourceListByRessourceEnum(StarWarsResourcesEnum.PEOPLE)
      .subscribe(
        response => this.managerResponse(response),
        error => this.swapiService.handleError,
        () => console.log('Done')
      );
  }

  private managerResponse(response: any) {
    this.characters = response.results;
    this.next = response.next;
    this.previous = response.previous;
  }

  private updateList(url: string) {
    return this.swapiService
      .getRessourceListByNextURL(url)
      .subscribe(
        response => this.managerResponse(response),
        error => this.swapiService.handleError,
        () => console.log('Done')
      );
  }


  private showDetails(character) {
    console.log(character);
  }

}
