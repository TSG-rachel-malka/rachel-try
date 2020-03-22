import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemCategoryComponent } from './itemsCategory/itemsCategory.component';
import { HomePageComponent } from './homePage/homePage.component';
import { ItemComponent } from './item/item.component';
import { MyRequestComponent } from './item/my-request/my-request.component';
import { RequestDelailsComponent } from './item/request-delails/request-delails.component';


const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'itemCategory', component: ItemCategoryComponent },
  { path: 'itemCategory/item' , component: ItemComponent },
  { path: 'myRequest', component: MyRequestComponent },
  { path: 'itemCategory/item/requestDetail' , component: RequestDelailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
