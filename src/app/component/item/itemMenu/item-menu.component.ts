import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category/category.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-item-menu',
  templateUrl: './item-menu.component.html',
  styleUrls: ['./item-menu.component.css']
})
export class ItemMenuComponent implements OnInit {
  itemsOfCategory: any;
  categoryId: number;
  constructor(private categoryService : CategoryService, private router:Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        if(params['categoryId']){
          this.categoryId = params['categoryId'];
        }
      }
    ); 
    this.itemsOfCategory = this.categoryService.getItemsMeuu(this.categoryId); 
  }

  onItemClick(itemId){
    this.router.navigate(['item', itemId]);
  }
}
