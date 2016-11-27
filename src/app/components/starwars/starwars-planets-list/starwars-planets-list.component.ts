import { Component, OnInit } from '@angular/core';
import {PlanetModel} from "../../../model/starwars/planet.model";
import {SwapiService} from "../../../services/swapi/swapi.service";
import {StarWarsResourcesEnum} from "../../../resources/starwars.resource.enum";
import {Subscriber} from "rxjs";

@Component({
  selector: 'app-starwars-planets-list',
  templateUrl: 'starwars-planets-list.component.html',
  styleUrls: ['starwars-planets-list.component.css']
})

export class StarwarsPlanetsListComponent implements OnInit {

  private planets: Array<PlanetModel> = new Array();
  private next: any = null;
  private previous: any = null;

  constructor(private swapiService: SwapiService) { }

  ngOnInit() { }

  private getPlanets() {
    return this.swapiService
      .getResourceListByRessourceEnum(StarWarsResourcesEnum.PLANETS)
      .subscribe(this.doSubscribe());
  }

  private doSubscribe() {
    return new Subscriber(
      response => this.manageResponse(response),
      error => this.swapiService.handleError,
      () => console.log('Done')
    )
  }

  private manageResponse(response: any) {
    this.planets = response.results;
    this.next = response.next;
    this.previous = response.previous;
  }

  private updateList(url: string) {
    return this.swapiService
      .getRessourceListByNextURL(url)
      .subscribe(this.doSubscribe());
  }

  private showDetails(planet) {
    console.log(planet);
  }

/*
  private showDialog() {

    var dialogButton = document.querySelector('.dialog-button');
    var dialog = document.querySelector('#dialog');
    if (!dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    dialogButton.addEventListener('click', function () {
      dialog.showModal();
    });
    dialog.querySelector('button:not([disabled])')
      .addEventListener('click', function () {
        dialog.close();
      });

  }
  */
}
