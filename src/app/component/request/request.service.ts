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
  myRequests:any[] = requestData;
  myRequestsUpdated = new Subject<{request: Request[], requestCount:number}>();
  counter = 0 ;
  requestCounter = new Subject<number>(); 
  httpHeaders = new HttpHeaders();
  constructor(private http: HttpClient){}

 
  getRequests(userId){
      if(userId){
        return this.myRequests.filter(request => request.user_id.toLowerCase().indexOf(userId) === 0);
      }
    //   this.httpHeaders.append('Access-Control-Allow-Origin', 'http://presnowka.westeurope.cloudapp.azure.com:16001/api/sn_sc/servicecatalog/items/1b53e3d249b30010c99245fe5483bcd2/submit_producer');
    //   this.httpHeaders.append('Access-Control-Allow-Credentials','true');
    //   this.httpHeaders.append('Accept','application/json');
    //   this.httpHeaders.append('X-UserToken','3a0ff83ae9370010c992087d8fea8f16cbd4f5a4846e06f94ac6d8861d78d2d289282098');
    //   this.httpHeaders.append('Content-Type','application/json');
    //   this.httpHeaders.append('Authorization','Basic cmFjaGVsZTpBYTEyMzQ1NiE=');
    //   this.httpHeaders.append('Origin','http://localhost:4200');
    //   const headers = this.httpHeaders;
      
    //   this.http.get<any>('http://presnowka.westeurope.cloudapp.azure.com:16001/api/now/table/task?sysparm_query=active%3Dtrue%5Esys_class_name%3Dincident%5EORsys_class_name%3Dsc_task%5Eopened_by%3D01020c5458330010c992d650e224fd3d&sysparm_limit=1',
    // {headers}).subscribe( data => {
    //   this.myRequests = data;
    // })

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