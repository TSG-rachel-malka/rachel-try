import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  requestCounter=0;
  userId = '456789';
  constructor(private categoryService:CategoryService) { }

  ngOnInit() {
    this.categoryService.getRequestCounter().subscribe((requestCounter)=> {
      this.requestCounter = requestCounter;
    });
  }

}
