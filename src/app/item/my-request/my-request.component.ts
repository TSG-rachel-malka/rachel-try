import { AfterViewInit } from '@angular/core';
//import { MatTableDataSource } from '@angular/material/table';
import { Request } from './../../models/request.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from '../../category.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RequestsService } from './requests.service';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
import { tap } from 'rxjs/operators';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';




@Component({
  selector: 'app-my-request',
  templateUrl: './my-request.component.html',
  styleUrls: ['./my-request.component.css']
})
export class MyRequestComponent implements OnInit {
  @ViewChild(MatPaginator, {static: false, read: true}) paginator: MatPaginator;
  displayedColumns: string[] = ['name', 'description', 'status', 'create', 'task_type'];
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
    this.myRequestSub = this.myRequestsService.myRequestsUpdated
      .subscribe((requestData:{request: Request[], requestCount: number}) => {
          this.myRequests = requestData.request;
          this.requestCount = requestData.requestCount;
        }
      );
      debugger;
    this.myRequests = this.myRequestsService.getRequests(this.userId).slice();
    debugger;
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
