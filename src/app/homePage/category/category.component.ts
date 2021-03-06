import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  categories;

  constructor(private categoryService : CategoryService, private router:Router) { 
    this.categories = this.categoryService.getCategories();
  }

  onCategoryClick(category:any){
    this.categoryService.onCategoryClick(category);
    this.router.navigate(['itemCategory']);
  }
}
