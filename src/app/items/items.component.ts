import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  itemsOfCategory: any;
  categoryId: number;
  constructor(private categoryService : CategoryService, private router:Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        debugger;
        if(params['categoryId']){
          this.categoryId = params['categoryId'];
        }
      }
    ); 
    this.itemsOfCategory = this.categoryService.getItemsOfCategory(this.categoryId); 
  }

  onItemClick(itemId){
    this.router.navigate(['item', itemId]);
  }
}
