import { Request } from './../../models/request.model';
import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  myRequests:Request[];
 // myRequestsUpdated = new Subject<Request[]>();
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