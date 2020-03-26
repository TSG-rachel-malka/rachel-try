import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Subscription } from 'rxjs';

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
  constructor(private categoryService:CategoryService) {  }
  ngOnInit() {
    this.userId = this.categoryService.userId;
    this.requestCounter = this.categoryService.getRequestsCounterInit(this.userId);
    this.categoryService.getRequestCounter().subscribe(requestCounter => {
        this.requestCounter = requestCounter;
    });
  }

}
