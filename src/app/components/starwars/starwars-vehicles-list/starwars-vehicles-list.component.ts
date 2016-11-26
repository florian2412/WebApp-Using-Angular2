import { Component, OnInit } from '@angular/core';
import {VehicleModel} from "../../../model/starwars/vehicle.model";
import {SwapiService} from "../../../services/swapi/swapi.service";
import {StarWarsResourcesEnum} from "../../../resources/starwars.resource.enum";

@Component({
  selector: 'app-starwars-vehicles-list',
  templateUrl: 'starwars-vehicles-list.component.html',
  styleUrls: ['starwars-vehicles-list.component.css']
})
export class StarwarsVehiclesListComponent implements OnInit {

  private vehicles: Array<VehicleModel>;

  constructor(private swapiService: SwapiService) { }

  ngOnInit() {
  }

  private getVehicles() {
    return this.swapiService
      .getResourceListByRessourceEnum(StarWarsResourcesEnum.VEHICLES)
      .subscribe(
        response => this.vehicles = response,
        error => this.swapiService.handleError,
        () => console.log('Done')
      );
  }

}
