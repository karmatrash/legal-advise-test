import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { DataStore } from '@app-shared/data.store';
import { DataService } from '@app-shared/data.service';
import { Pagination } from '@app-shared/types/pagination';

@Component({
  selector: 'app-main',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  private defaultParams = {
    perPage: 10,
    page: 1,
  };

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
    this.updateList(value);
  }

  private updateList(value: Params): void {
    const result = {
      perPage: value.limit,
      page: value.page,
    };

    this.router.navigate(['/questions'], { queryParams: result });
  }

  /**
   * TODO: Truly validate params
   * @params: Params
   */
  private isParamsValid(params: Params): boolean {
    return !!params.page && !!params.page;
  }

  private navigateToDefault() {
    this.router.navigate(['/questions'], { queryParams: this.defaultParams });
  }
}
