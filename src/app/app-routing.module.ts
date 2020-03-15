import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { CategoryComponent } from './category/category.component';


const routes: Routes = [
  { path: '', component: CategoryComponent },
  { path: 'items', component: ItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
