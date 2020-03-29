import { EnumToArrayPipe } from './pipes/enumToArray.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CategoryHomeComponent } from './component/category/categoryHome/category-home.component';
import { ItemMenuComponent } from './component/item/itemMenu/item-menu.component';
import { HomePageComponent } from './component/homePage/homePage.component';
import { ItemFormComponent } from './component/item/itemForm/item-form.component';
import { RequestListComponent } from './component/request/requestList/request-list.component';
import { RequestDelailsComponent } from './component/request/requestDelails/request-delails.component';
import { SearchComponent } from './component/homePage/search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './component/header/header.component';

import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatDialogModule,
  MatAutocompleteModule,
  MatBadgeModule,
  MatFormFieldModule,
  MatSelectModule,
  MatListModule,
  MatIconModule,
  MatStepperModule,
  MatGridListModule,
  MatSortModule, 
  MatTableModule
} from "@angular/material";


@NgModule({
  declarations: [
    ItemMenuComponent,
    ItemFormComponent,
    RequestListComponent,
    AppComponent,
    CategoryHomeComponent,
    HeaderComponent,
    HomePageComponent, 
    RequestDelailsComponent,
    SearchComponent,
    EnumToArrayPipe
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    MatExpansionModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatStepperModule,
    MatBadgeModule,
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatSortModule, MatTableModule,
    MatPaginatorModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
