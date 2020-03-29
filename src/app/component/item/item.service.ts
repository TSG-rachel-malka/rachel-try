import { Injectable } from '@angular/core';
// import { Category } from '../models/category.model';
import { Item } from '../../data/models/item.model';
import itemData from '../../data/jsonFiles/item.json';
@Injectable({
  providedIn: 'root'
})
export class ItemService {

    mockDataItem = itemData;
    getIncidentItem(): Item {
        return this.mockDataItem.find(item => item.name == 'incident IT');
    }        
}