
//import { AuthService } from '../auth/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CategoryService } from '../category/category.service';
import { Subscription } from 'rxjs';
import { RequestsService } from '../request/request.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  requestCounter:number = 0 ;

  lables = {
    categories: 'Categories', 
    myRequests: 'My Requests',
    createIncident: 'Create Incident'
  };
  userId;
  userIsAuthenticated = false;
  private authListenerSubs: Subscription;
  constructor(private categoryService:CategoryService , private requestsService: RequestsService) {  }
  ngOnInit() {
    
    //this.userIsAuthenticated = this.authService.getIsAuth();
    /*this.authListenerSubs = this.authService
    .getAuthStatusListener()
    .subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
    });*/

    this.userId = this.categoryService.userId;
    this.requestCounter = this.requestsService.getRequestsCounterInit(this.userId);
    this.requestsService.getRequestCounter().subscribe(requestCounter => {
        this.requestCounter = requestCounter;
    });
  }
  
  /*onLogout(){
    debugger;
    this.authService.logout();
  }*/

  ngOnDestroy(){
    this.authListenerSubs.unsubscribe();
  }
}
