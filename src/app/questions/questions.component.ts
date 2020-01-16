import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { DataStore } from '@app-shared/data.store';
import { DataService } from '@app-shared/data.service';
import { Pagination } from '@app-shared/types/pagination';
import { Filter } from '@app-shared/types/filter';

export const DEFAULT_PER_PAGE_OPTIONS = [5, 10, 25, 100];
export const SORT_BY_FILTER = [
  { value: 'relevancy', title: 'Relevancy' },
  { value: 'date:desc', title: 'Date (newest first)' },
  { value: 'date:asc', title: 'Date (oldest first)' },
  { value: 'views:desc', title: 'Views (999 - 0)' },
  { value: 'views:asc', title: 'Views (0 - 999)' },
];
export const DEFAULT_PARAMS = {
  perPage: 10,
  page: 1,
  sortBy: SORT_BY_FILTER[1].value,
};

@Component({
  selector: 'app-main',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  constructor(
    public store: DataStore,
    private router: Router,
    private route: ActivatedRoute,
    private service: DataService,
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      if (this.isParamsValid(params)) {
        this.service.updateQueryParams(params);
        this.service.getData();
      } else {
        this.navigateToDefault();
      }
    });
  }

  public onPaginationChanged(value: Pagination): void {
    const result = {
      perPage: value.limit,
      page: value.page,
    };

    this.updateList(result);
  }

  public onFilterChanged(value: Filter): void {
    this.updateList(value);
  }

  private updateList(paramsToBeUpdated: Params): void {
    const params = this.service.getQueryParams();
    const updatedParams = { ...params, ...paramsToBeUpdated };

    this.router.navigate(['/questions'], { queryParams: updatedParams }).then();
  }

  private isParamsValid(params: Params): boolean {
    return this.paginationValid(params) && this.filtersValid(params);
  }

  private paginationValid(params: Params): boolean {
    return DEFAULT_PER_PAGE_OPTIONS.includes(+params.perPage) && !!params.page;
  }

  private filtersValid(params: Params): boolean {
    const item = SORT_BY_FILTER.find(el => el.value === params.sortBy);

    return !!item;
  }

  private navigateToDefault(): void {
    this.router.navigate(['/questions'], { queryParams: DEFAULT_PARAMS }).then();
  }
}
