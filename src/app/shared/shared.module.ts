import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { BaseListComponent } from './components/base-list/base-list.component';
import { BaseListItemComponent } from './components/base-list-item/base-list-item.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ApiRestService } from '@app-shared/api.service';
import { DataService } from '@app-shared/data.service';
import { DataStore } from '@app-shared/data.store';
import { BaseFilterComponent } from './components/base-filter/base-filter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
  ],
  declarations: [
    BaseListComponent,
    BaseListItemComponent,
    PaginationComponent,
    BaseFilterComponent,
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
