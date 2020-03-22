import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CategoryComponent } from './homePage/category/category.component';
import { ItemCategoryComponent } from './itemsCategory/itemsCategory.component';
import { HomePageComponent } from './homePage/homePage.component';
import { ItemComponent } from './item/item.component';
import { MyRequestComponent } from './item/my-request/my-request.component';
import { RequestDelailsComponent } from './item/request-delails/request-delails.component';
import { SearchComponent } from './homePage/search/search.component';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';

import {
  MatStepperModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatToolbarModule,
  MatButtonModule,
  MatBadgeModule,
  MatIconModule,
  MatListModule
} from "@angular/material";



@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ItemCategoryComponent,
    HeaderComponent,
    HomePageComponent,
    ItemComponent,
    MyRequestComponent,
    RequestDelailsComponent,
    SearchComponent
    ],
  imports: [
    MatListModule,
    MatIconModule,
    MatStepperModule,
    MatBadgeModule,
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    BrowserModule,
    AppRoutingModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
