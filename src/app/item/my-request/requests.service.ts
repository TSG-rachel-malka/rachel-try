import { Request } from './../../models/request.model';
import { Injectable } from '@angular/core';

import data from '../../jsonFiles/request.json';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  myRequests:Request[] = data;
  myRequestsUpdated = new Subject<Request[]>();
  constructor() {}

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