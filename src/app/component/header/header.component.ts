import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category/category.service';
import { Subscription } from 'rxjs';
import { RequestsService } from '../request/request.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  requestCounter:number = 0 ;

  lables = {
    categories: 'Categories', 
    myRequests: 'My Requests',
    createIncident: 'Create Incident'
  };
  userId;
  constructor(private categoryService:CategoryService , private requestsService: RequestsService) {  }
  ngOnInit() {
    this.userId = this.categoryService.userId;
    this.requestCounter = this.requestsService.getRequestsCounterInit(this.userId);
    this.requestsService.getRequestCounter().subscribe(requestCounter => {
        this.requestCounter = requestCounter;
    });
  }

}
