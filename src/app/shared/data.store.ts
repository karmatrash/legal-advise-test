import { Params } from '@angular/router';

import { Filter } from '@app-shared/types/filter';
import { BehaviorSubject, Observable } from 'rxjs';
import { Question } from '@app-shared/types/question';
import { Pagination } from '@app-shared/types/pagination';
import { QuestionsResponse } from '@app-shared/types/questions.response';

export class DataStore {
  private _questions: BehaviorSubject<Question[]> = new BehaviorSubject<Question[]>([]);
  questions: Observable<Question[]> = this._questions.asObservable();

  private _questionsLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  questionsLoading = this._questionsLoading.asObservable();

  private _queryParams: Params;
  public pagination: Pagination;
  public filters: Filter;

  get queryParams(): Params {
    return this._queryParams;
  }

  set queryParams(value: Params) {
    this._queryParams = value;
  }

  public setDataLoading(value: boolean): void {
    this._questionsLoading.next(value);
  }

  public setData(response: QuestionsResponse): void {
    if (!response) {
      this._questions.next(null);
    } else {
      this._questions.next(response.list);
      this.saveDataParams(response);
    }
  }

  private saveDataParams(response: QuestionsResponse): void {
    this.pagination = {
      total: response.total,
      page: response.pagination.page,
      pages: response.pagination.pages,
      items: response.pagination.items,
      limit: response.pagination.limit,
    };

    const filters = { ...this.queryParams };
    delete filters.page;
    delete filters.perPage;

    this.filters = filters;
  }
}
