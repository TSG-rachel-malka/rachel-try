import { Incident } from './../../data/models/incident.model';
import { Injectable } from '@angular/core';
import { Item } from '../../data/models/item.model';
import itemData from '../../data/jsonFiles/item.json';
import requestData from '../../data/jsonFiles/request.json';
import incidentData from '../../data/jsonFiles/incidentFormFields.json';
import { Request } from '../../data/models/request.model'
import { HttpClient} from '@angular/common/http'; 
import { Router } from '@angular/router';
import { RequestsService } from '../request/request.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
    userId = '456789'; // mock data
    requestDetail: Request;
    itemClicked: Item;
    sys_idRequest:any = 0;
    mockDataItem = itemData;
    constructor(private http: HttpClient,  private router: Router, private requestService: RequestsService) {}
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
      debugger;
        const date = ((new Date()).toLocaleDateString()).toString();
        var taskType: string;
        if(item.name == 'incident IT'){
          taskType = 'incident';
          value = JSON.stringify(value);
          value = JSON.parse(value);
          const jsonFields = {"variables":{}};
          jsonFields['variables'] = value;
          this.http
          .post<any>(
            'http://localhost:3000/api/incident',
            jsonFields
          )
          .subscribe(responseData => {      
            if(responseData.body){
              const resBody = responseData.body.result;
              this.requestDetail = {'user_id': this.userId,'sys_id': resBody.sys_id, 'number': resBody.number, 'name': item.name, 'description': item.description, 'img': item.img,
                                    'create': date, 'status':{value:0, name:'Create'}, 'task_type': resBody.table, 'details': []};
              //requestData.push(this.requestDetail);
             this.requestService.addRequest(this.requestDetail);
            }
              this.router.navigate(["/myRequests/456789/requestDetail/"+ this.requestDetail.sys_id]);
          });
        } else {
          taskType = 'request';
          requestData.push(this.requestDetail);
        }
        
     
        
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