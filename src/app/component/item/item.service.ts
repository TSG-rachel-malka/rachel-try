import { Injectable } from '@angular/core';
import { Item } from '../../data/models/item.model';
import itemData from '../../data/jsonFiles/item.json';
import requestData from '../../data/jsonFiles/request.json';
import { Request } from '../../data/models/request.model'

@Injectable({
  providedIn: 'root'
})
export class ItemService {
    userId = '456789'; // mock data
    requestDetail: Request;
    itemClicked: Item;
    sys_idRequest:any = 0;
    mockDataItem = itemData;

    getIncidentItem(): Item {
        return this.mockDataItem.find(item => item.name == 'incident IT');
    }  
    getItemForm(itemId?: string){
        if(itemId) {
          return this.mockDataItem.find(item => item.sys_id === itemId);
        }
        return this.itemClicked;
      }
    onSubmitItem(item:any,value:any){
        var id = 12; // mock data
        id++;
        this.sys_idRequest++;
        const date = ((new Date()).toLocaleDateString()).toString();
        var taskType = 'reqest';
        if(item.name == 'incident IT'){
          taskType = 'incident';
        }
        this.requestDetail = {user_id: this.userId, sys_id:"RI"+ id, name:item.name, description:item.description, img:item.img ,create:date,status:0, task_type: taskType, details: value};
        requestData.push(this.requestDetail);
      } 
      getSysIdRequest(){
        return this.requestDetail.sys_id;
      } 
  
}