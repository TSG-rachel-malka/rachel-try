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
      sendIncident(incidentVariables: string){
        /*
        
        */         
       const httpOptions = {  
        headers: new HttpHeaders({  
          'X-User-Token': '06f26f9249b30010c99245fe5483bc1dff069b6327202477a702b7a028b9f2e294462060',
          'Content-Type':'application/json',
          'Authorization': 'Basic UkVTVDoxMjM0NTY=',
          'Access-Control-Allow-Origin': "http://presnowka.westeurope.cloudapp.azure.com:16001/api/sn_sc/servicecatalog/items/1b53e3d249b30010c99245fe5483bcd2/submit_producer",
          'Access-Control-Allow-Credentials': 'true',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization, Origin',
          'Origin': 'http://localhost:4200',
          'Accept': 'application/json',
          'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36',
          'origin-when-cross-origin': 'http://presnowka.westeurope.cloudapp.azure.com:16001',
          'Access-Control-Request-Method': 'POST',
          'access-control-allow-credentials': 'access-control-allow-headers,access-control-allow-origin,authorization,content-type,user-agent,x-user-token'
        }) 
      };
      
       this.http.post<{ message: string; incident: Incident }>("http://presnowka.westeurope.cloudapp.azure.com:16001/api/sn_sc/servicecatalog/items/1b53e3d249b30010c99245fe5483bcd2/submit_producer",
        {"variables":{"caller_id":"a8f98bb0eb32010045e1a5115206fe3a","subcategory":"test","u_environment":"221f79b7c6112284005d646b76ab978c","u_equipment_type":"fc58735249f30010c99245fe5483bcb1","u_equipment_name":"c5efafda49b30010c99245fe5483bcf4","short_description":"Test"}}
        ,{headers: new HttpHeaders({
          'Content-Type':'application/json;charset=UTF-8',
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': "*",
          'Access-Control-Allow-Credentials': 'true',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization, Origin',
          'X-User-Token': '06f26f9249b30010c99245fe5483bc1dff069b6327202477a702b7a028b9f2e294462060',
          'Authorization': 'Basic UkVTVDoxMjM0NTY=',
          'Origin': 'http://localhost:4200',
          'User-Agent':'PostmanRuntime/7.24.0',
          'Access-Control-Request-Method': 'POST'
        })}).subscribe((res) => {
          /*if(res.status == 200){
            requestData.push(this.requestDetail);
          }*/
          debugger;
          console.log(res);
        }, error => {
          debugger;
          console.log(error);
         });
      }
    onSubmitItem(item:any,value:any){
      
     debugger;
     this.sendIncident(item);
     /*this.httpHeaders.append('Access-Control-Allow-Origin', '*');
      this.httpHeaders.append('Access-Control-Allow-Credentials','true');
      this.httpHeaders.append('Accept','application/json');
      this.httpHeaders.append('User-Agent','PostmanRuntime/7.24.0');
      this.httpHeaders.append('X-UserToken','3a0ff83ae9370010c992087d8fea8f16cbd4f5a4846e06f94ac6d8861d78d2d289282098');
      this.httpHeaders.append('Content-Type','application/json');
      this.httpHeaders.append('Authorization','Basic UkVTVDoxMjM0NTY=');
      this.httpHeaders.append('Origin','http://localhost:4200');
      //presnowka.westeurope.cloudapp.azure.com:16001/api/sn_sc/servicecatalog/items/1b53e3d249b30010c99245fe5483bcd2/submit_producer');
/*this.httpHeaders.append('Access-Control-Allow-Credentials','true');
this.httpHeaders.append('Accept','application/json');
this.httpHeaders.append('User-Agent','PostmanRuntime/7.24.0');
this.httpHeaders.append('X-UserToken','3a0ff83ae9370010c992087d8fea8f16cbd4f5a4846e06f94ac6d8861d78d2d289282098');
this.httpHeaders.append('Content-Type','application/json');
this.httpHeaders.append('Authorization','Basic cmFjaGVsZTpBYTEyMzQ1NiE=');
this.httpHeaders.append('Origin','http://localhost:4200')*/
/*this.httpHeaders.append('Content-Type', 'application/json');
this.httpHeaders.append('Accept', 'application/json');
this.httpHeaders.append('Access-Control-Allow-Origin', 'http://presnowka.westeurope.cloudapp.azure.com:16001/api');
this.httpHeaders.append('Access-Control-Allow-Credentials', 'true');
this.httpHeaders.append('Access-Control-Allow-Methods','POST');
this.httpHeaders.append('Authorization', 'Basic cmFjaGVsZTpBYTEyMzQ1NiE=' );
this.httpHeaders.append('Authorization', 'Basic cmFjaGVsZTpBYTEyMzQ1NiE=' );
*/
/*const httpOptions = {  
        headers: new HttpHeaders({  
          'X-User-Token': '06f26f9249b30010c99245fe5483bc1dff069b6327202477a702b7a028b9f2e294462060',
          'Content-Type':'application/json',
          'Authorization': 'Basic UkVTVDoxMjM0NTY=',
          'Access-Control-Allow-Origin': "http://presnowka.westeurope.cloudapp.azure.com:16001/api/sn_sc/servicecatalog/items/1b53e3d249b30010c99245fe5483bcd2/submit_producer",
          'Access-Control-Allow-Credentials': 'true',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization, Origin',
          'Origin': 'http://localhost:4200',
          'Accept': 'application/json',
          'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36',
          'origin-when-cross-origin': 'http://presnowka.westeurope.cloudapp.azure.com:16001',
          'Access-Control-Request-Method': 'POST'

        }) 
      };*/
      //,{headers: this.httpHeaders}
      debugger;
      //this.requestDetail = {user_id: this.userId, sys_id:"RI"+ id, name:item.name, description:item.description, img:item.img ,create:date,status:{value: 0, name: 'Create'}, task_type: taskType, details: value};
        var id = 12; // mock data
        id++;
        this.sys_idRequest++;
        const date = ((new Date()).toLocaleDateString()).toString();
        var taskType: string;
        if(item.name == 'incident IT'){
          taskType = 'incident';
              debugger;
              this.sendIncident(item)
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
  
}