import { Status } from './../../data/enum/status.enum';
import { Request } from './../../data/models/request.model';
import { Injectable } from '@angular/core';
import data from '../../data/jsonFiles/request.json';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  myRequests = data;
  myRequestsUpdated = new Subject<{request: Request[], requestCount:number}>();
  requestStatuses = Status;
  getRequests(userId){
    debugger;
      if(userId){
        return this.myRequests.filter( request => request.user_id.toLowerCase().indexOf(userId) === 0);
          /*.map(requestStatus => requestStatus {
            requestStatus.status = 2;
          });*/
        
      }
  }

  getRequestsUpdated(){
    return this.myRequestsUpdated.asObservable();
  }

}