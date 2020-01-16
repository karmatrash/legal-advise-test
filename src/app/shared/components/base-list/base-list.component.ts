import { Filter } from '@app-shared/types/filter';
import { Question } from '@app-shared/types/question';
import { Pagination } from '@app-shared/types/pagination';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-base-list',
  templateUrl: './base-list.component.html',
  styleUrls: ['./base-list.component.scss']
})
export class BaseListComponent {
  @Input() data: Question[];
  @Input() loading: boolean;
  @Input() pagination: Pagination;
  @Input() filters: Filter;
  @Output() paginationChanged: EventEmitter<Pagination> = new EventEmitter<Pagination>();
  @Output() filterChanged: EventEmitter<Filter> = new EventEmitter<Filter>();

  public onPaginationChanged(value: Pagination): void {
    this.paginationChanged.emit(value);
  }

  public onFilterChanged(value: Filter): void {
    this.filterChanged.emit(value);
  }
}
