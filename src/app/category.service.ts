import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

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
  requestDetail:Request;
  mockDataCategory = categoryData;
  mockDataItem = itemData;
  mockDataRequest = requestData
  itemsOfCategoryClicked: Category;
  itemsCategories:any[] = [];
  itemClicked;
  counter = 0 ;
  requestCounter: Subject<number> = new Subject<number>(); 
  statusIdRequest : Subject<number> = new Subject<number>(); 

  constructor() {}

  getCategories(){
    return this.mockDataCategory;
  }
  onCategoryClick(category:Category){
    this.itemsOfCategoryClicked = category;
  }
  getItemsOfCategory(){
    return this.itemsOfCategoryClicked;
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
    this.requestDetail = {user_id: "1", sys_id:item.sys_id, name:item.name, description:item.description, img:item.img ,create:date,status:"new", details: value};
    requestData.push(this.requestDetail);
  }
  getRequestDetail(){
    return this.requestDetail;
  } 
  requestCount(){
    this.counter++;
    this.requestCounter.next(this.counter);;
  }
  getRequestCounter(){
    return this.requestCounter;
  }
  getStatusMyRequest(){
    const statusOptionsRequest = this.statusOptionsRequest;
    const myRequestStatus = this.requestDetail.status;
    const status = statusOptionsRequest.find(status => status.value === myRequestStatus);
    this.statusIdRequest.next(status.id);
    return this.statusIdRequest;
  }
  getStatusOptionsRequest(){
    return this.statusOptionsRequest;
  }
  getItemsCategories() :Item[]{
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
