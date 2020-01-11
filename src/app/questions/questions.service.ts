import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Question } from '@app-shared/types/question';
import { Pagination } from '@app-shared/types/pagination';

const baseURL = 'https://stage.legaladviceme.com/api';

const DEFAULT_PARAMS = {
  perPage: 10,
  page: 25,
};

@Injectable()
export class QuestionsService {
  public data: any[];
  public loading = false;
  public pagination: Pagination;

  constructor(private http: HttpClient) { }

  public getQuestions(params = DEFAULT_PARAMS) {
    this.loading = true;

    this.http.get(`${baseURL}/search?entities=questions&perPage=${params.perPage}&page=${params.page}`)
      .subscribe((response: { data: getQuestionsResponseData }) => {
        this.data = response.data.list;
        this.loading = false;
        this.pagination = { total: response.data.total, ...response.data.pagination };
      });
  }
}

type getQuestionsResponseData = {
  total: number;
  list: Question[];
  pagination: {
    page, pages, items, limit: number;
  };
};
