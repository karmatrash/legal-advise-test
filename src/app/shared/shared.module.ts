import { NgModule } from '@angular/core';
import { BaseListComponent } from './components/base-list/base-list.component';
import { BaseListItemComponent } from './components/base-list-item/base-list-item.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    BaseListComponent,
    BaseListItemComponent,
  ],
  exports: [
    BaseListComponent,
    BaseListItemComponent,
  ],
  providers: []
})
export class SharedModule {}
