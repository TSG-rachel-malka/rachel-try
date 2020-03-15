import { Injectable } from '@angular/core';

import data from "./categories.json";
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  mockDate = data;
  constructor() {
   }

  getCategories(){
    return this.mockDate;
  }
}
