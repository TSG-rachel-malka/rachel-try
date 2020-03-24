import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { CategoryService } from '../../category.service';
import { Request } from '../../models/request.model';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-request-delails',
  templateUrl: './request-delails.component.html',
  styleUrls: ['./request-delails.component.css']
})
export class RequestDelailsComponent implements OnInit{
  idRequest: number;
  currentStep;
  isLinear = true;
  statusRequest:any;
  requestDetail:any;
  constructor(private categoryService:CategoryService, public route: ActivatedRoute) { }
  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        if(params['idRequest']){
          this.idRequest = params['idRequest'];
        }
      }
    ); 
    this.statusRequest = this.categoryService.getStatusOptionsRequest();
    this.requestDetail = this.categoryService.getRequestDetail(this.idRequest); 
  }
}
