import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
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
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {  
      this.items$ = params.search ?  this.apiService.search(params.search).pipe(catchError(this.handleError)) : of(true);      
    });         
  }

  handleError(error) {
    return of(true);
  }

  sendSearch($event) {
    if ($event != '') {
      // this.items$ = this.apiService.search($event);
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { search: $event },
        queryParamsHandling: 'merge'
      })
    }
  }

}
