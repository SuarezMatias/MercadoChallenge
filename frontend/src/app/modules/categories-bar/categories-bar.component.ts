import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-bar',
  templateUrl: './categories-bar.component.html',
  styleUrls: ['./categories-bar.component.sass']
})
export class CategoriesBarComponent implements OnInit {
  items: any[] = [
    "Electronica, Audio y Video",
    "Ipod",
    "Reproductores",
    "Ipod touch",
    "32 GB"
  ]
  constructor() { }

  ngOnInit() {
  }

}
