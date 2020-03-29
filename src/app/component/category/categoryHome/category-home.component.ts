import { Component } from '@angular/core';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';
import { Category } from '../../../data/models/category.model';

@Component({
  selector: 'app-category-home',
  templateUrl: './category-home.component.html',
  styleUrls: ['./category-home.component.css']
})
export class CategoryHomeComponent {
  categories:Category[];
  imgSrc: string = "assets/{{category.img}}";
  constructor(private categoryService : CategoryService, private router:Router) { 
    this.categories = this.categoryService.getCategories();
  }

  onCategoryClick(categoryId){
    this.router.navigate(['items', categoryId]);
  }
}
