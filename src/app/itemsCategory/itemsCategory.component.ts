import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-itemCategory',
  templateUrl: './itemsCategory.component.html',
  styleUrls: ['./itemsCategory.component.css']
})
export class ItemCategoryComponent implements OnInit {
  itemsOfCategory:any;
  constructor(private categoryService : CategoryService, private router:Router) {
   }

  ngOnInit() {
    this.itemsOfCategory = this.categoryService.getItemsOfCategory();
  }

  onItemClick(id){
    this.categoryService.onItemClick(id);
    this.router.navigate(["/itemCategory/item"]);
  }
}
