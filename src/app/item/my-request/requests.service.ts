import { Injectable } from '@angular/core';

import data from '../../jsonFiles/request.json';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  myRequests = data;
 
  constructor() {
    console.log(data);
   }

  getUserRequests(userId: string) {
    return this.myRequests.filter(request => request.user_id.toLowerCase().indexOf(userId) === 0);
  }
}