// import { Component, OnInit } from '@angular/core';
// import { CategoryService } from '../category.service';
// import { Router, ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'app-itemsCategory',
//   templateUrl: './itemsCategory.component.html',
//   styleUrls: ['./itemsCategory.component.css']
// })
// export class ItemsCategoryComponent implements OnInit {
//   itemsOfCategory:any;
//   constructor(private categoryService : CategoryService, private router:Router, private route: ActivatedRoute) {}

//   ngOnInit() {
//     this.itemsOfCategory = this.categoryService.getItemsOfCategory(); 
//   }

//   onItemClick(id){
//     this.categoryService.onItemClick(id);
//     this.router.navigate(["item"], {relativeTo: this.route});
//   }
// }
