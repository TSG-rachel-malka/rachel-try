import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  item;
  constructor(private categoryService : CategoryService, private router:Router) { 
    this.item = this.categoryService.getItem();
    console.log(this.item);
  }

  ngOnInit() {
  }
  onCancelClick(){
    this.router.navigate(["itemCategory"]);
  }  
  onSubmit(value){
    this.categoryService.onSubmitItem(value);
    this.categoryService.requestCount().subscribe();
    this.router.navigate(["itemCategory/item/requestDetail"]);

  }

}
