import { Injectable } from '@angular/core';
import { Subscription, Subject } from 'rxjs';

import categoryData from './categories.json';
import itemData from './item.json';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  mockDateCategory = categoryData;
  mockDateItem = itemData;
  ItemsOfCategoryClicked: any;
  ItemClicked: any;
  ItemSend:any;
  counter = 0 ;
  requestCounter: Subject<number> = new Subject<number>(); 
  //requestCounter = 0;
  constructor() {}

  getCategories(){
    return this.mockDateCategory;
  }
  onCategoryClick(category:any){
    this.ItemsOfCategoryClicked = category;
  }
  getItemsOfCategory(){
    return this.ItemsOfCategoryClicked;
  }

  onItemClick(sys_id){
    this.ItemClicked = this.mockDateItem.find(item => item.sys_id === sys_id);
  }
  getItem(){
    return this.ItemClicked;
  }
  onSubmitItem(value){
    this.ItemSend = value;
  }
  getRequestDetail(){
    return this.ItemSend;
  }
  requestCount(){
    this.counter++;
    this.requestCounter.next(this.counter);;
  }
  getRequestCounter(){
    return this.requestCounter;
  }
}
