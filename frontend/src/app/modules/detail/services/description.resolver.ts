import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { ApiService } from '../../api.service';

@Injectable()
export class DescriptionDataResolver implements Resolve<any> {

  constructor(private apiService: ApiService) {}

  resolve(route: ActivatedRouteSnapshot) {
    const itemId = route.paramMap.get('itemId');
    return this.apiService.getItemDescriptionById(itemId);
  }

}