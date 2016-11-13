import { Component } from '@angular/core';
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {

  title: string;

  constructor(titlePage: Title) {
    let title = "Angular 2 with Star Wars API, Pokémon API, Material Design via MDL, Firebase via AngularFire2";
    titlePage.setTitle(title);
    this.title = title;
  }

/*  title = 'components works!';

  items: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
    this.items = af.database.list('/items');
  }

  addItem(textNewItem: string) {
    this.items.push({ text: textNewItem });
  }

  updateItem(keyItem: string, textUpdateItem: string) {
    this.items.update(keyItem, { text: textUpdateItem });
  }

  deleteItem(keyItem: string) {
    this.items.remove(keyItem);
  }

  deleteAllItems() {
    this.items.remove();
  }
  */

}
