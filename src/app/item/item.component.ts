import { ItemService } from './item.service';
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
  createIncident: boolean;
  constructor(private categoryService : CategoryService, private router:Router, public route: ActivatedRoute, 
              private itemService: ItemService) {}

  ngOnInit() {
    debugger;
    this.userId = this.categoryService.userId;
    this.route.params.subscribe(
      (params: Params) => {
        if(params['itemId']){
          this.itemId = params['itemId'];
        }
        else {
          this.createIncident = true;
        }
      }
    ); 
    if(this.itemId){
      this.item = this.categoryService.getItemForm(this.itemId);
    }
    //else this.item = this.categoryService.getItemForm();
    else if(this.createIncident) {
      this.item = this.itemService.getIncidentItem();
    }
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
