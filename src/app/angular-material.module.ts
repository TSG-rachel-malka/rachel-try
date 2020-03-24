   import { NgModule } from "@angular/core";
   import {MatAutocompleteModule} from '@angular/material/autocomplete';
   import {MatFormFieldModule} from '@angular/material/form-field';
   import {MatSelectModule} from '@angular/material/select';
   import {MatInputModule} from '@angular/material/input';
   import {MatTableModule, MatTableDataSource} from '@angular/material/table';
   import {MatPaginatorModule} from '@angular/material/paginator';

 @NgModule({
     exports: [
         MatAutocompleteModule,
         MatFormFieldModule,
         MatInputModule,
         MatSelectModule,
         MatTableModule,
         MatPaginatorModule,
         MatTableDataSource
     ]

 })

 export class AngularMaterialModule {}