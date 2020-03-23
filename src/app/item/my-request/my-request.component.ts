import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category.service';
import { ActivatedRoute } from '@angular/router';
import { RequestsService } from './requests.service';

@Component({
  selector: 'app-my-request',
  templateUrl: './my-request.component.html',
  styleUrls: ['./my-request.component.css']
})
export class MyRequestComponent implements OnInit {
  requestDetail:any;
  userId: string;
  myRequsts;
  constructor(private categoryServicea:CategoryService, public router: ActivatedRoute, public myRequestsService: RequestsService){}
  
  ngOnInit() {
    /*this.userId = this.router.params['userId'].subscribe();
   debugger;
    this.myRequsts = this.myRequestsService.getUserRequests(this.userId).slice();*/
  }

}
