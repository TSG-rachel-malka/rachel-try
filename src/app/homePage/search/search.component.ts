
import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { Router } from '@angular/router';
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
  filteredItemsCategories: Observable<any[]>;
  itemsCategories: any[];
  constructor(private categoryService : CategoryService, private router:Router) {}

  ngOnInit() {
    this.categories = this.categoryService.getCategories().slice();
    this.itemsCategories = this.categoryService.getItemsCategories();
    this.filteredItemsCategories = this.categoryCtrl.valueChanges
    .pipe(
      map(category => category ? this._filterItems(category) : this.itemsCategories.slice())
    );
  }

  onCategoryClick(category:Category){
    this.categoryService.onCategoryClick(category);
    this.router.navigate(['itemCategory']);
  }

  private _filterItems(value: string): any[]{
    if(!value){
       return;
    }
    const filterValue = value.toLowerCase();
    let categoriesId: string[];
    this.categories.filter(category => category.name.toLowerCase().includes(filterValue));
    categoriesId = this.categories.map(category => category.sys_id);
     // || categoriesId.indexOf(item.category_id) > 1
      return this.itemsCategories.filter(item => item.name.toLowerCase().includes(filterValue)
    );
  }
  

}
