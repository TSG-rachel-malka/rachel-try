import { MatTableDataSource } from '@angular/material/table';
import { Request } from './../../models/request.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from '../../category.service';
import { ActivatedRoute, Params } from '@angular/router';
import { RequestsService } from './requests.service';
import { MatPaginator } from '@angular/material';




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
  dataSource;
  userId;
  constructor(private categoryServicea:CategoryService, 
              public route: ActivatedRoute, 
              public myRequestsService: RequestsService){}
  
  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.userId = +params['userId'];
      }
    );
    this.myRequests = this.myRequestsService.getRequests(this.userId).slice();
    this.dataSource = new MatTableDataSource<Request>(this.myRequests);
    this.dataSource.paginator = this.paginator;
  }

}
