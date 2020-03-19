import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-my-request',
  templateUrl: './my-request.component.html',
  styleUrls: ['./my-request.component.css']
})
export class MyRequestComponent implements OnInit {
  requestDetail;
  constructor(private categoryServicea:CategoryService) { }

  ngOnInit() {
    this.requestDetail = this.categoryServicea.getRequestDetail();
  }

}
