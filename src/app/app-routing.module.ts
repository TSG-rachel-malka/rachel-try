import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { HomePageComponent } from './homePage/homePage.component';
import { ItemComponent } from './item/item.component';
import { MyRequestComponent } from './item/my-request/my-request.component';
import { RequestDelailsComponent } from './item/request-delails/request-delails.component';


const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'items/:categoryId', component: ItemsComponent},
  // { path: 'itemCategory/item' , component: ItemComponent },
  { path: 'item/:itemId' , component: ItemComponent },
  { path: 'createIncident' , component: ItemComponent },
  { path: 'myRequests/:userId', component: MyRequestComponent },
  { path: 'myRequests/456789/requestDetail/:idRequest' , component: RequestDelailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }