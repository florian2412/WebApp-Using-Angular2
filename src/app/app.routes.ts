import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StarwarsComponent } from "./components/starwars/starwars.component";
import { AboutComponent } from "./components/about/about.component";
import { PokemonComponent } from "./components/pokemon/pokemon.component";
import { ContactComponent } from "./components/contact/contact.component";

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'starwars', component: StarwarsComponent },
  { path: 'pokemon', component: PokemonComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent }
];
