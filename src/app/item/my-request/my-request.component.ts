import { MatTableDataSource } from '@angular/material/table';
import { Request } from './../../models/request.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from '../../category.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RequestsService } from './requests.service';
import { MatPaginator } from '@angular/material';
import { Subscription } from 'rxjs';




@Component({
  selector: 'app-my-request',
  templateUrl: './my-request.component.html',
  styleUrls: ['./my-request.component.css']
})
export class MyRequestComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  displayedColumns: string[] = ['name', 'description', 'status', 'create'];
  requestDetail:any;
  myRequests: Request[];
  myRequestSub: Subscription;
  dataSource;
  userId;
  constructor(private categoryServicea:CategoryService, 
              public route: ActivatedRoute, 
              public myRequestsService: RequestsService,
              public router: Router){}
  
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
    this.router.navigate(['requestDetail', requestId], {relativeTo: this.route});
  }

}
