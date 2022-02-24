import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-bar',
  templateUrl: './categories-bar.component.html',
  styleUrls: ['./categories-bar.component.sass']
})
export class CategoriesBarComponent implements OnInit {
  
  @Input() items: string[];
  
  constructor() { }

  ngOnInit() {    
  }

}
