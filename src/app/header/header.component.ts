import { Component, OnInit, OnDestroy } from '@angular/core';
import { CategoryService } from '../category.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
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
  constructor(private authService: AuthService, private categoryService:CategoryService) {  }
  ngOnInit() {
    
    //this.userIsAuthenticated = this.authService.getIsAuth();
    /*this.authListenerSubs = this.authService
    .getAuthStatusListener()
    .subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
    });*/

    this.userId = this.categoryService.userId;
    this.requestCounter = this.categoryService.getRequestsCounterInit(this.userId);
    this.categoryService.getRequestCounter().subscribe(requestCounter => {
        this.requestCounter = requestCounter;
    });
  }
  
  onLogout(){
    debugger;
    this.authService.logout();
  }

  ngOnDestroy(){
    this.authListenerSubs.unsubscribe();
  }
}
