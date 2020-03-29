import { Request } from './../../models/request.model';
import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';
import { CategoryService } from '../../category.service';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  myRequests:Request[];
  myRequestsUpdated = new Subject<Request[]>();

  constructor(private categoryService:CategoryService) {
    this.myRequests = this.categoryService.getRequestData();
  }

  getRequests(userId): Request[]{
      if(userId){
        return this.myRequests.filter(request => request.user_id.toLowerCase().indexOf(userId) === 0);
      }
      else return this.myRequests;   
  }

  getRequestsUpdated() {
    return this.myRequestsUpdated.asObservable();
  }

}