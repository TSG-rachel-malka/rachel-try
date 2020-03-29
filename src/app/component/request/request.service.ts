import { Request } from '../../data/models/request.model';
import { Injectable } from '@angular/core';
import data from '../../data/jsonFiles/request.json';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  myRequests:Request[] = data;
  myRequestsUpdated = new Subject<{request: Request[], requestCount:number}>();

  getRequests(userId){
      if(userId){
        return this.myRequests.filter(request => request.user_id.toLowerCase().indexOf(userId) === 0);
      }
  }

  getRequestsUpdated(){
    return this.myRequestsUpdated.asObservable();
  }

}