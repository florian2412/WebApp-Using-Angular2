import { Component } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {

  title: string;

  constructor(titlePage: Title) {
    let title = "Angular 2 with Star Wars API, Pokémon API, Material Design via MDL";
    titlePage.setTitle(title);
    this.title = title;
  }

}
