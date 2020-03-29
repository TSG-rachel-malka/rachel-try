import { Request } from '../../data/models/request.model';
import { Injectable } from '@angular/core';
import requestData from '../../data/jsonFiles/request.json';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  statusOptionsRequest = [
    { id: 0, value:'new'},
    { id: 1, value:'in progress'},
    { id: 2, value:'canceled'},
    { id: 3, value:'closed'}];
  mockDataRequest = requestData;
  myRequests:Request[] = requestData;
  myRequestsUpdated = new Subject<{request: Request[], requestCount:number}>();
  counter = 0 ;
  requestCounter = new Subject<number>(); 
  
  getRequests(userId){
      if(userId){
        return this.myRequests.filter(request => request.user_id.toLowerCase().indexOf(userId) === 0);
      }
  }

  getRequestsUpdated(){
    return this.myRequestsUpdated.asObservable();
  }

  getRequestData(){
    this.mockDataRequest = requestData;
    return this.mockDataRequest;
  }
  getRequestDetail(id){
    return requestData.find(request => request.sys_id === id); 
  } 

  getRequestCounter(){
    return this.requestCounter;
 }
  getRequestsCounterInit(userId): number {
    if(userId)
      this.counter = (requestData.filter(request => request.user_id.toLowerCase().indexOf(userId) === 0)).length;
    else this.counter = requestData.length;
    return this.counter;  
  }
  getStatusOptionsRequest(){
    return this.statusOptionsRequest;
  }

requestCount(){
    this.counter++;
    this.requestCounter.next(this.counter);
}   

}