import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  item;
  itemId: string;
  constructor(private categoryService : CategoryService, private router:Router, public route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        if(params['itemId']){
          this.itemId = params['itemId'];
        }
      }
    ); 
    if(this.itemId){
      this.item = this.categoryService.getItem(this.itemId);
    }
    else this.item = this.categoryService.getItem();
  }
  onCancelClick(){
    this.router.navigate(["itemCategory"]);
  }  
  onSubmit(form: NgForm){
    if(form.invalid)
      return;
    this.categoryService.onSubmitItem(this.item,form.value);
    this.categoryService.requestCount();
    this.router.navigate(["itemCategory/item/requestDetail"]);
  }

}
