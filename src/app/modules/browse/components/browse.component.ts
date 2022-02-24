import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ItemSearch } from 'src/app/model/ItemSearch';
import { ApiService } from '../../api.service';
import { SearchMapper } from '../../search-mapper';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.sass']
})
export class BrowseComponent implements OnInit {  
  
  items$: Observable<ItemSearch | boolean>;
  constructor(
    private apiService: ApiService,
    private searchMapper: SearchMapper,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {    
    this.route.params.subscribe(params => {  
      this.items$ = params.search ?  this.apiService.search(params.search) : of(true);      
    });         
  }

  sendSearch($event) {
    if ($event != '') {
      this.items$ = this.apiService.search($event);
      console.log('ob:', this.items$)            
    }
  }

}
