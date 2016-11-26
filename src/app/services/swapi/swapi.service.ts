import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import {StarWarsResourcesEnum} from "../../resources/starwars.resource.enum";

@Injectable()
export class SwapiService {

  private baseUrl = 'http://swapi.co/api/';
  private outputFormat = '?format=json';

  constructor(private http: Http) { }

  public getResourceListByRessourceEnum(resource: StarWarsResourcesEnum) : Observable<any>{
    let completeUrl = this.baseUrl + resource + "/" + this.outputFormat;
    return this.http
      .get(completeUrl)
      .map(response => response.json())
      .map(response => response)
      .catch(this.handleError);
  }

  public getRessourceListByNextURL(url: string) : Observable<any> {
    return this.http
      .get(url)
      .map(response => response.json())
      .map(response => response)
      .catch(this.handleError);
  }

  public getResourceById(resource: StarWarsResourcesEnum, id: number): Observable<any> {
    let completeUrl = this.baseUrl + resource + '/' + id + this.outputFormat;
    return this.http
      .get(completeUrl)
      .map(response => response.json())
      .catch(this.handleError);
  }

  public handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
