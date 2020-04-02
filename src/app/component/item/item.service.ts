import { Incident } from './../../data/models/incident.model';
import { Injectable } from '@angular/core';
import { Item } from '../../data/models/item.model';
import itemData from '../../data/jsonFiles/item.json';
import requestData from '../../data/jsonFiles/request.json';
import incidentData from '../../data/jsonFiles/incidentFormFields.json';
import { Request } from '../../data/models/request.model'
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
    userId = '456789'; // mock data
    requestDetail: Request;
    itemClicked: Item;
    sys_idRequest:any = 0;
    mockDataItem = itemData;
    httpHeaders = new HttpHeaders();
    constructor(private http: HttpClient,  private router: Router) {}
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
      
      const headers = this.httpHeaders;

        var id = 12; // mock data
        id++;
        this.sys_idRequest++;
        const date = ((new Date()).toLocaleDateString()).toString();
        var taskType: string;
        if(item.name == 'incident IT'){
          taskType = 'incident';
          const jsonTest = {"variables":{"caller_id":"9c428c5458330010c992d650e224fddb","subcategory":"test","u_environment":"221f79b7c6112284005d646b76ab978c","u_equipment_type":"fc58735249f30010c99245fe5483bcb1","u_equipment_name":"c5efafda49b30010c99245fe5483bcf4","short_description":"MALKA TEST"}};
          this.http
          .post<any>(
            'http://localhost:3000/api/incident',
            jsonTest
          )
          .subscribe(responseData => {
            debugger;
              this.router.navigate(["/"]);
          });
        } else {
          taskType = 'reqest';
        }
        requestData.push(this.requestDetail);
     
        
      } 

    getSysIdRequest(){
      return this.requestDetail.sys_id;
    } 
    getIncidentFormField(){
      return incidentData;
    }
    getItemFormField(itemId: string){
      const itemField = this.mockDataItem.find(item => item.sys_id === itemId);
      return itemField.fields;
    }
  
}