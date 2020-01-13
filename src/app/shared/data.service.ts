import { Params } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { QuestionsResponse } from '@app-shared/types/questions.response';
import { ApiRestService } from '@app-shared/api.service';
import { DataStore } from '@app-shared/data.store';
import { switchMap } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable()
export class DataService {

  constructor(
    private http: HttpClient,
    private store: DataStore,
    private api: ApiRestService,
  ) {
    this.initRequestObservable();
  }

  private queryParams: Params;
  private dataRequest = new Subject();

  public getData(): void {
    this.store.setDataLoading(true);
    this.dataRequest.next();
  }

  public updateQueryParams(params): void {
    this.queryParams = params;
  }

  private initRequestObservable(): void {
    this.dataRequest.pipe(switchMap(() => {
      return this.api.get('search?entities=questions', { params: this.createParams() });
    }))
      .subscribe((response: { data: QuestionsResponse }) => {
        this.store.setData(response.data);
        this.store.setDataLoading(false);
      }, () => {
        this.store.setData(null);
        this.store.setDataLoading(false);
      });
  }

  private createParams(): HttpParams {
    let params = new HttpParams();

    Object.keys(this.queryParams)
      .forEach(param => {
        params = params.append(param, this.queryParams[param]);
      });

    return params;
  }
}
