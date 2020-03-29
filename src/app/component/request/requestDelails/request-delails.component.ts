import { Status } from '../../../data/enum/status.enum';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category/category.service';
import { Params, ActivatedRoute } from '@angular/router';
import { RequestsService } from '../request.service';

@Component({
  selector: 'app-request-delails',
  templateUrl: './request-delails.component.html',
  styleUrls: ['./request-delails.component.css']
})
export class RequestDelailsComponent implements OnInit{
  idRequest: number;
  currentStep;
  isLinear = true;
  statusRequest = Status;
  requestDetail:any;
  
  constructor(private requestsService :RequestsService, public route: ActivatedRoute) { }
  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        if(params['idRequest']){
          this.idRequest = params['idRequest'];
        }
      }
    ); 
    this.requestDetail = this.requestsService.getRequestDetail(this.idRequest); 
  }
}
