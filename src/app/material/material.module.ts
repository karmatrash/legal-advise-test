import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatCardModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
  ],
  exports: [
    MatCardModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
  ],
})
export class MaterialModule {}
