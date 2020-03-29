import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from '../../../data/models/category.model';

@Component({
  selector: 'app-category-memu',
  templateUrl: './category-memu.component.html',
  styleUrls: ['./category-memu.component.css']
})
export class CategoryMenuComponent implements OnInit {
  categories:Category[];
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categories = this.categoryService.getCategories();
    console.log(this.categories);
  }

}
