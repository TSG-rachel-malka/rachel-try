import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemMenuComponent } from './component/item/itemMenu/item-menu.component';
import { HomePageComponent } from './component/homePage/homePage.component';
import { ItemFormComponent } from './component/item/itemForm/item-form.component';
import { RequestListComponent } from './component/request/requestList/request-list.component';
import { RequestDelailsComponent } from './component/request/requestDelails/request-delails.component';


const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'items/:categoryId', component: ItemMenuComponent},
  { path: 'item/:itemId' , component: ItemFormComponent },
  { path: 'createIncident' , component: ItemFormComponent },
  { path: 'myRequests/:userId', component: RequestListComponent },
  { path: 'myRequests/456789/requestDetail/:idRequest' , component: RequestDelailsComponent },
  { path: "auth", loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }