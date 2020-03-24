import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import categoryData from './jsonFiles/categories.json';
import itemData from './jsonFiles/item.json';
import requestData from './jsonFiles/request.json';
import { Request } from './models/request.model'
import { Category } from './models/category.model';
import { Item } from './models/item.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  statusOptionsRequest = [
    { id: 0, value:'new'},
    { id: 1, value:'in progress'},
    { id: 2, value:'canceled'},
    { id: 3, value:'closed'}];
  userId = '456789';
  requestDetail:Request;
  mockDataCategory = categoryData;
  mockDataItem = itemData;
  mockDataRequest = requestData;
  itemsOfCategoryClicked: Category;
  itemsCategories:any[] = [];
  itemClicked: Item;
  counter = 0 ;
  requestCounter = new Subject<number>(); 

  constructor() {}

  getCategories(){
    return this.mockDataCategory;
  }

  getItemsOfCategory(idCategory){
    this.itemsOfCategoryClicked = this.mockDataCategory.find(category => category.sys_id === idCategory)
    return this.itemsOfCategoryClicked.items;
  }

  onItemClick(sys_id){
    this.itemClicked = this.mockDataItem.find(item => item.sys_id === sys_id);
  }
  getItem(itemId?: string){
    if(itemId) {
      return this.mockDataItem.find(item => item.sys_id === itemId);
    }
    return this.itemClicked;
  }
  onSubmitItem(item:any,value:any){
    const date = ((new Date()).toLocaleDateString()).toString();
    this.requestDetail = {user_id: "1", sys_id:item.sys_id, name:item.name, description:item.description, img:item.img ,create:date,status:"0", details: value};
    requestData.push(this.requestDetail);
  }
  getRequestDetail(id){
    return requestData.filter(request => request.sys_id === id)

  } 
  requestCount(){
    this.counter++;
    this.requestCounter.next(this.counter);
  }
  getRequestsCounterInit(userId): number {
    if(userId)
      this.counter = (requestData.filter(request => request.user_id.toLowerCase().indexOf(userId) === 0)).length;
    else this.counter = requestData.length;
    return this.counter;  
}
  getRequestCounter(){
     return this.requestCounter;
  }
  getStatusOptionsRequest(){
    return this.statusOptionsRequest;
  }
  getItemsCategories() :any[]{
    this.mockDataCategory.map(category => {
      if(category.items.length > 0){
          category.items.map( item =>{
          this.itemsCategories.push(item);
          }
        );
      }
    });
      return this.itemsCategories;
  }
  getCategoriesId():string[]{
    return this.mockDataCategory.map(category => category.sys_id);
  }
}
