import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SearchMapper } from './search-mapper';
import { ItemSearch } from '../model/ItemSearch';
import { Search } from '../model/Item';
import { Description, ItemDetail } from '../model/itemDetail';
import { Detail } from '../model/detail';
@Injectable({
  providedIn: 'root'
})

export class ApiService {
    
  apiName = 'http://localhost:4000/api';

  constructor(
    private httpClient: HttpClient,
    private searchMapper: SearchMapper,
  ) { }

    search(searchText: string) : Observable<ItemSearch> {
      const urlPath = `${this.apiName}/items?q=${searchText}`        
      return this.httpClient.get(urlPath).pipe(
          map((data: Search) => this.searchMapper.toItemSearch(data))
      );
    }

    getItemById(itemId: string) : Observable<ItemDetail> {
      const urlPath = `${this.apiName}/items/${itemId}`        
      return this.httpClient.get(urlPath).pipe(
        map((data: Detail) => this.searchMapper.toDetail(data))
      );
    }

    getItemDescriptionById(itemId: string) : Observable<Description> {
      const urlPath = `${this.apiName}/items/${itemId}/description`
      return this.httpClient.get(urlPath).pipe(
        map((data: Description) => this.searchMapper.toDescription(data))
      );
    }
    
}
