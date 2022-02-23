import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  @Input() set items(values: any[]) {
    this.localItems = values;
  };
  public localItems: any[];
  
  constructor() { }

  ngOnInit() {

  }

}
