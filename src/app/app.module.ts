import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './components/app/app.component';
import { HomeComponent } from "./components/home/home.component";
import { ROUTES } from "./app.routes";
import { ContactComponent} from "./components/contact/contact.component";
import { AboutComponent } from "./components/about/about.component";
import { PokemonComponent } from "./components/pokemon/pokemon.component";
import { StarwarsComponent } from './components/starwars/starwars.component';
import { StarwarsCharactersListComponent } from './components/starwars/starwars-characters-list/starwars-characters-list.component';
import { StarwarsFilmsListComponent } from './components/starwars/starwars-films-list/starwars-films-list.component';
import { StarwarsPlanetsListComponent } from './components/starwars/starwars-planets-list/starwars-planets-list.component';
import { StarwarsSpeciesListComponent } from './components/starwars/starwars-species-list/starwars-species-list.component';
import { StarwarsVehiclesListComponent } from './components/starwars/starwars-vehicles-list/starwars-vehicles-list.component';
import { StarwarsStarshipsListComponent } from './components/starwars/starwars-starships-list/starwars-starships-list.component';
import { SwapiService } from "./services/swapi/swapi.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    PokemonComponent,
    StarwarsComponent,
    StarwarsCharactersListComponent,
    StarwarsFilmsListComponent,
    StarwarsPlanetsListComponent,
    StarwarsSpeciesListComponent,
    StarwarsVehiclesListComponent,
    StarwarsStarshipsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [ SwapiService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
