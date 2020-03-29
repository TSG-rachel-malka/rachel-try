import { ItemService } from '../item.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { RequestsService } from '../../request/request.service';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {
  item;
  userId;
  itemId: string;
  createIncident: boolean;
  constructor(private itemService : ItemService, private router:Router, public route: ActivatedRoute ,private requestsService :RequestsService ) {}

  ngOnInit() {
    debugger;
    this.userId = this.itemService.userId;
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
      this.item = this.itemService.getItemForm(this.itemId);
    }
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
    this.itemService.onSubmitItem(this.item,form.value);
    const idRequest = this.itemService.getSysIdRequest();
    this.router.navigate(["myRequests/456789/requestDetail", idRequest ]); // mock data
    this.requestsService.requestCount();
  }

}
