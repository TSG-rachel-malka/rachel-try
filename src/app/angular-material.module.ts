import { NgModule } from "@angular/core";
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
    MatTableDataSource,
    MatListModule,
    MatIconModule,
    MatStepperModule,
    MatGridListModule
  } from "@angular/material";
  import {MatTableModule} from '@angular/material/table';

@NgModule({
    exports: [
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTableModule,
        MatPaginatorModule,
        MatTableDataSource,
        MatPaginatorModule,
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
        MatFormFieldModule
    ]
}) export class AngularMaterialModule {}
