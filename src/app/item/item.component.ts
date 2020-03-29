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
  userId;
  itemId: string;
  constructor(private categoryService : CategoryService, private router:Router, public route: ActivatedRoute) {}

  ngOnInit() {
    this.userId = this.categoryService.userId;
    this.route.params.subscribe(
      (params: Params) => {
        if(params['itemId']){
          this.itemId = params['itemId'];
        }
      }
    ); 
    if(this.itemId){
      this.item = this.categoryService.getItemForm(this.itemId);
    }
    else this.item = this.categoryService.getItemForm();
  }
  onCancelClick(){
    this.router.navigate(["items" , this.itemId]);
  }  
  onSubmit(form: NgForm){
    if(form.invalid)
      return;
    this.categoryService.onSubmitItem(this.item,form.value);
    const idRequest = this.categoryService.getSysIdRequest();
    this.router.navigate(["myRequests/456789/requestDetail", idRequest ]); // mock data
    this.categoryService.requestCount();
  }

}
