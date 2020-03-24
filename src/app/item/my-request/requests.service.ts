import { Request } from './../../models/request.model';
import { Injectable } from '@angular/core';

import data from '../../jsonFiles/request.json';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  myRequests:Request[] = data;
 
  constructor() {}

  getRequests(userId): Request[]{
      if(userId){
        return this.myRequests.filter(request => request.user_id.toLowerCase().indexOf(userId) === 0);
      }
      else return this.myRequests;   
  }
}