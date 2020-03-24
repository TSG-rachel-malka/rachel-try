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
  imgSrc: string = "assets/{{category.img}}";
  constructor(private categoryService : CategoryService, private router:Router) { 
    this.categories = this.categoryService.getCategories();
  }

  onCategoryClick(categoryId){
   // this.categoryService.onCategoryClick(id);
    this.router.navigate(['items', categoryId]);
  }
}
