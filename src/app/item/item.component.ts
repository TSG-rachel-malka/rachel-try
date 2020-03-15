import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  itemsOfCategory:any;
  constructor(private categoryService : CategoryService) {
   }

  ngOnInit() {
    this.itemsOfCategory = this.categoryService.getItemsOfCategory();
  }
}
