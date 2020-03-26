import { EnumToArrayPipe } from './pipes/enumToArray.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CategoryComponent } from './homePage/category/category.component';
import { ItemsComponent } from './items/items.component';
import { HomePageComponent } from './homePage/homePage.component';
import { ItemComponent } from './item/item.component';
import { MyRequestComponent } from './item/my-request/my-request.component';
import { RequestDelailsComponent } from './item/request-delails/request-delails.component';
import { SearchComponent } from './homePage/search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';

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
    AppComponent,
    CategoryComponent,
    ItemsComponent,
    HeaderComponent,
    HomePageComponent,
    ItemComponent,
    MyRequestComponent,
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
