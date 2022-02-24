import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/model/ItemSearch';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  @Input() set items(values: Item[]) {
    this.localItems = values;
  };
  public localItems: Item[];
  
  constructor() { }

  ngOnInit() {

  }

}
