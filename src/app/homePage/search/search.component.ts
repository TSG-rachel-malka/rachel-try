import { Item } from './../../models/item.model';

import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith, filter} from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  categories: any[];
  categoryCtrl = new FormControl();
  filteredItemsCategories: Observable<Item[]>;
  itemsCategories: Item[];
  filteredCategories: Observable<string[]>;
  constructor(private categoryService : CategoryService, private router:Router, private route:ActivatedRoute) {}

  ngOnInit() {
    this.categories = this.categoryService.getCategories().slice();
    this.itemsCategories = this.categoryService.getItemsCategories();
    this.filteredItemsCategories = this.categoryCtrl.valueChanges
    .pipe(
      map(item => item ? this._filterItems(item) : this.itemsCategories.slice())
    );
  }
  private _filterItems(value: string): Item[]{
    if(!value){
      return;
   }
   const filterValue = value.toLowerCase();
    const categoriesId: string[] = this._getCategoriesId(filterValue);
      return this.itemsCategories.filter(item => item.name.toLowerCase().includes(filterValue)
    );
  }
  private _getCategoriesId(value: string): string[]{
     this.categories.filter(category => {return category.name.includes(value)}
     );
     return this.categories.map(category => category.sys_id);
    
  }
  onSelectionChanged(event) {
    if(event.option && event.option.id){
      const item_id: number = +event.option.id;
      if(item_id){
        this.router.navigate(['item', item_id], {relativeTo: this.route});
      }
    }
  }

}