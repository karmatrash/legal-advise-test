import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatSelectModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatCardModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  exports: [
    MatCardModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
})
export class MaterialModule { }
