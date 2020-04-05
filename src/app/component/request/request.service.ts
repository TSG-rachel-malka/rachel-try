import { Request } from '../../data/models/request.model';
import { Injectable } from '@angular/core';
import requestData from '../../data/jsonFiles/request.json';

import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  myRequests = new Subject<any>();
  myRequestsUpdated = new Subject<{request: Request[], requestCount:number}>();
  counter = 0 ;
  requestCounter = new Subject<number>(); 
  httpHeaders = new HttpHeaders();
  constructor(private http: HttpClient){}

 
  getRequests(){
          this.http
          .get<any>(
            'http://localhost:3000/api/incident')
          .subscribe(responseData => {
            this.myRequests.next(responseData.body.result);
            //this.counter = responseData.body.result.length;
          });
          return this.myRequests;
        } 
  
  // getRequestsUpdated(){
  //   return this.myRequestsUpdated.asObservable();
  // }

  // getRequestData(){
  //   this.mockDataRequest = requestData;
  //   return this.mockDataRequest;
  // }
  getRequestDetail(id){
    //const myReq = this.myRequests;
    //return myReq.find(request => request.sys_id === id); 
   } 

  getRequestCounter(){
    return this.requestCounter;
 }
  getRequestsCounterInit(userId) {
     this.counter = (requestData.filter(request => request.user_id.toLowerCase().indexOf(userId) === 0)).length;
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