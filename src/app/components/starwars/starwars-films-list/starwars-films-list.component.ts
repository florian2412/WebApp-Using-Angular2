import { Component, OnInit } from '@angular/core';
import { StarWarsResourcesEnum } from "../../../resources/starwars.resource.enum";
import { SwapiService } from "../../../services/swapi/swapi.service";
import {FilmModel} from "../../../model/starwars/film.model";

@Component({
  selector: 'app-starwars-films-list',
  templateUrl: 'starwars-films-list.component.html',
  styleUrls: ['starwars-films-list.component.css']
})
export class StarwarsFilmsListComponent implements OnInit {

  private films: Array<FilmModel>;

  constructor(private swapiService: SwapiService) { }

  ngOnInit() {
  }

  private getFilms() {
    return this.swapiService
      .getResourceList(StarWarsResourcesEnum.FILMS)
      .subscribe(response => {
          this.films = response;
        },
        () => console.log('Done')
      );
  }

}
