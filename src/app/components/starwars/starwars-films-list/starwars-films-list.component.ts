import { Component, OnInit } from '@angular/core';
import { StarWarsResourcesEnum } from "../../../resources/starwars.resource.enum";
import { SwapiService } from "../../../services/swapi/swapi.service";
import {FilmModel} from "../../../model/starwars/film.model";
import {Observable} from "rxjs";
import {errorHandler} from "@angular/platform-browser/src/browser";

@Component({
  selector: 'app-starwars-films-list',
  templateUrl: 'starwars-films-list.component.html',
  styleUrls: ['starwars-films-list.component.css']
})
export class StarwarsFilmsListComponent implements OnInit {

  private films: Array<FilmModel> = new Array();

  constructor(private swapiService: SwapiService) { }

  ngOnInit() {
  }

  private getFilms() {
    return this.swapiService
      .getResourceListByRessourceEnum(StarWarsResourcesEnum.FILMS)
      .subscribe(
        response => this.films = response.results,
        error => this.swapiService.handleError,
        () => console.log('Done')
      );
  }


  private showDetails(film) {
    console.log(film);
  }

}
