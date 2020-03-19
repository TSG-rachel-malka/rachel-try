import { Injectable } from '@angular/core';

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
  requestCounter = 0;
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
    debugger;
    this.requestCounter++;
  }
  getRequestCounter(){
    debugger;
    return this.requestCounter;
  }
}
