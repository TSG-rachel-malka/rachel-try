import { Injectable } from '@angular/core';

import data from "./categories.json";
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  mockDate = data;
  ItemsOfCategoryClicked: any;
  constructor() {
   }

  getCategories(){
    return this.mockDate;
  }
  onCategoryClick(category:any){
    console.log(category);
    this.ItemsOfCategoryClicked = category;
  }
  getItemsOfCategory(){
    return this.ItemsOfCategoryClicked;
  }
  
}
