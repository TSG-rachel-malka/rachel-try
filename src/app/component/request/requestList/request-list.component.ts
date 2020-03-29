import { Status } from '../../../data/enum/status.enum';
import { Request } from '../../../data/models/request.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from '../../category/category.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RequestsService } from '../request.service';
import {MatPaginator} from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';





@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {
  @ViewChild(MatPaginator, {static: false, read: true}) paginator: MatPaginator;
  displayedColumns: string[] = ['name', 'description', 'status', 'create', 'task_type'];
  statusRequest = Status;
  requestDetail:any;
  myRequests;
  myRequestSub: Subscription;
  userId;
  dataSource;
  requestCount: number;
  constructor(private categoryServicea:CategoryService, 
              public route: ActivatedRoute, 
              public myRequestsService: RequestsService,
              public router: Router){
              this.dataSource = new MatTableDataSource<Request>();

              }
  
  ngOnInit() {
    debugger;
    this.route.params.subscribe(
      (params: Params) => {
        this.userId = +params['userId'];
      }
    );
    this.myRequests = this.myRequestsService.getRequests(this.userId).slice();
    debugger;
    this.myRequestSub = this.myRequestsService.myRequestsUpdated
      .subscribe((requestData:{request: Request[], requestCount: number}) => {
          this.myRequests = requestData.request;
          this.requestCount = requestData.requestCount;
        }
      );
    this.myRequestSub = this.myRequestsService.getRequestsUpdated().subscribe();
    this.requestCount = this.myRequests.length;
    this.dataSource.data =  this.myRequests;
    this.dataSource.paginator = this.paginator;
    //this.dataSource.paginator._length = this.requestCount;
  }

  expandRequest(requestId){
    this.router.navigate(['requestDetail', requestId], {relativeTo: this.route});
  }

}