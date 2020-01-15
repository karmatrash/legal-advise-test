import { Pagination } from '@app-shared/types/pagination';
import { MatPaginator, PageEvent } from '@angular/material';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnChanges {
  @Input() data: Pagination;
  @Output() changed: EventEmitter<{}> = new EventEmitter<{}>();
  @ViewChild('matPaginator', { static: false }) matPaginator: MatPaginator;

  public onPaginationChange(paginationEvent: PageEvent): void {
    this.changed.emit(this.parsePagination(paginationEvent));
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setProperPage();
  }

  /**
   * First loading logic while viewChild not yet rendered
   */
  private setProperPage(): void {
    setTimeout(() => {
      this.matPaginator.pageIndex = this.data.page - 1;
    }, 0);
  }

  private parsePagination(value: PageEvent): Pagination {
    return {
      pages: this.data.pages,
      total: value.length,
      page: value.pageIndex + 1,
      limit: value.pageSize,
      items: value.pageSize,
    };
  }
}
