import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { CategoryService } from '../../category.service';
import { Request } from '../../models/request.model';

@Component({
  selector: 'app-request-delails',
  templateUrl: './request-delails.component.html',
  styleUrls: ['./request-delails.component.css']
})
export class RequestDelailsComponent implements OnInit{

  currentStep;
  isLinear = true;
  statusRequest:any;
  requestDetail:Request;
  constructor(private categoryService:CategoryService) { }
  ngOnInit() {
    this.statusRequest = this.categoryService.getStatusOptionsRequest();
    this.requestDetail = this.categoryService.getRequestDetail();
    this.categoryService.getStatusMyRequest().subscribe((status)=>{
      this.currentStep = status;
    });
  }
}
