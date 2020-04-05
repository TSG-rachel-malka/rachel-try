
import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
// import { Category } from 'src/app/models/category.model';
import { CategoryService } from '../../category/category.service';

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
  constructor(private categoryService : CategoryService, private router:Router, private route:ActivatedRoute) {}

  ngOnInit() {
    this.categories = this.categoryService.getCategories().slice();
    this.itemsCategories = this.categoryService.getItemsCategories();
    this.filteredItemsCategories = this.categoryCtrl.valueChanges
    .pipe(
      map(category => category ? this._filterItems(category) : this.itemsCategories.slice())
    );
  }

  private _filterItems(value: string): any[]{
    debugger;
    if(!value){
       return;
    }
    const filterValue = value.toLowerCase();
    let categoriesId: string[];
    this.categories.filter(category => category.name.toLowerCase().includes(filterValue));
    categoriesId = this.categories.map(category => category.sys_id);
     // || categoriesId.indexOf(item.category_id) > 1
      return this.itemsCategories.filter(item => item.name.toLowerCase().includes(filterValue));
  }
  onSelectionChanged(event) {
    debugger;
    if(event.option && event.option.id){
      const item_id: number = +event.option.id;
      if(item_id){
        this.router.navigate(['item', item_id], {relativeTo: this.route});
      }
    }
  }

}
