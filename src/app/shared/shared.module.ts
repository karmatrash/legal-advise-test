import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { BaseListComponent } from './components/base-list/base-list.component';
import { BaseListItemComponent } from './components/base-list-item/base-list-item.component';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [
    BaseListComponent,
    BaseListItemComponent,
    PaginationComponent,
  ],
  exports: [
    BaseListComponent,
    BaseListItemComponent,
  ],
  providers: []
})
export class SharedModule {}
