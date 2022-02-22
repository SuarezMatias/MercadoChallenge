import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { ApiService } from '../../api.service';

@Injectable()
export class DetailDataResolver implements Resolve<any> {

  constructor(private apiService: ApiService) {}

  resolve(route: ActivatedRouteSnapshot) {
    debugger;
    const itemId = route.paramMap.get('itemId');
    return this.apiService.getItemById(itemId);
  }

}