import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DataStore } from '@app-shared/data.store';
import { DataService } from '@app-shared/data.service';
import { ApiRestService } from '@app-shared/api.service';
import { MaterialModule } from '../material/material.module';
import { BaseListComponent } from './components/base-list/base-list.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { BaseFilterComponent } from './components/base-filter/base-filter.component';
import { BaseListItemComponent } from './components/base-list-item/base-list-item.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
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
export class SharedModule { }
