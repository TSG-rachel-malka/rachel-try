import { MatTableDataSource } from '@angular/material/table';
import { Request } from './../../models/request.model';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { CategoryService } from '../../category.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RequestsService } from './requests.service';
import { MatPaginator } from '@angular/material';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-my-request',
  templateUrl: './my-request.component.html',
  styleUrls: ['./my-request.component.css']
})
export class MyRequestComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  displayedColumns: string[] = ['name', 'description', 'status', 'create'];
  totalPosts = 10;
  postsPerPage = 2;
  pageSizeOptions  = [5,10];
  requestDetail:any;
  myRequests: Request[];
  myRequestSub: Subscription;
  dataSource;
  userId;
  constructor(private categoryServicea:CategoryService, 
              public router: Router,
              public route: ActivatedRoute, 
              public myRequestsService: RequestsService){}
  
  
  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.userId = +params['userId'];
      }
    );
    this.myRequestSub = this.myRequestsService.myRequestsUpdated
      .subscribe(
        (request: Request[]) => {
          this.myRequests = request;
        }
      );
    this.myRequests = this.myRequestsService.getRequests(this.userId).slice();
    this.myRequestSub = this.myRequestsService.getRequestsUpdated().subscribe();
    this.dataSource = new MatTableDataSource<Request>(this.myRequests);
    this.dataSource.paginator = this.paginator;
  }
  expandRequest(requestId){
    //if it is not working check if exist params in request details component in this version
    this.router.navigate(['requestDetails', requestId]);
  }
  ngOnDestroy() {
    this.myRequestSub.unsubscribe();
  }
}
