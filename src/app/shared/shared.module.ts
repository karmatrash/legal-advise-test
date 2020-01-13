import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { BaseListComponent } from './components/base-list/base-list.component';
import { BaseListItemComponent } from './components/base-list-item/base-list-item.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ApiRestService } from '@app-shared/api.service';
import { DataService } from '@app-shared/data.service';
import { DataStore } from '@app-shared/data.store';

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
  providers: [
    ApiRestService,
    DataService,
    DataStore,
  ]
})
export class SharedModule {}
