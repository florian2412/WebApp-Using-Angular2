import {Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-starwars-footer-card-list',
  templateUrl: 'starwars-footer-card-list.component.html',
  styleUrls: ['starwars-footer-card-list.component.css']
})
export class StarwarsFooterCardListComponent implements OnInit, OnChanges {

  // Inputs
  @Input() previous: string;
  @Input() next: string;

  // Output
  @Output() selected = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
    console.log("Previous : ", this.previous);
    console.log("Next : ", this.next);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Previous : ", this.previous);
    console.log("Next : ", this.next);
  }

  selectPreviousOrNext(previousOrNext) {
    this.selected.emit(previousOrNext);
  }

}
