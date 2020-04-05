import { Injectable } from '@angular/core';

import categoryData from '../../data/jsonFiles/categories.json';
import itemData from '../../data/jsonFiles/item.json';
import { Category } from '../../data/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  userId = '456789'; // mock data
  mockDataCategory = categoryData;
  mockDataItem = itemData;
  itemsOfCategory: Category;
  itemsCategories:any[] = [];


  constructor() {}

  getCategories(){
    return this.mockDataCategory;
  }

  getItemsMeuu(idCategory){
    this.itemsOfCategory = this.mockDataCategory.find(category => category.sys_id === idCategory)
    return this.itemsOfCategory.items;
  }
  getItemsCategories() :any[]{
     this.mockDataCategory.forEach(category => {
       if(category.items){
        if(category.items.length > 0){
             category.items.forEach( item =>{
             this.itemsCategories.push(item);
             }
           );
     }
  
   }
     });
      return this.itemsCategories;
  }
  getCategoriesId():string[]{
    return this.mockDataCategory.map(category => category.sys_id);
  }

}
