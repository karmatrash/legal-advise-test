import { Params } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Entity } from '@app-shared/types/entity';
import { DataStore } from '@app-shared/data.store';
import { ApiRestService } from '@app-shared/api.service';
import { QuestionsResponse } from '@app-shared/types/questions.response';

@Injectable()
export class DataService {
  private _currentEntity: Entity;
  private dataRequest = new Subject();

  constructor(
    private http: HttpClient,
    private store: DataStore,
    private api: ApiRestService,
  ) {
    this.initRequestObservable();
  }

  get entity(): Entity {
    return this._currentEntity;
  }

  set entity(value: Entity) {
    this._currentEntity = value;
  }

  public getData(): void {
    this.store.setDataLoading(true);
    this.dataRequest.next();
  }

  public updateQueryParams(params): void {
    this.store.queryParams = params;
  }

  public getQueryParams(): Params {
    return this.store.queryParams;
  }

  private initRequestObservable(): void {
    this.dataRequest.pipe(switchMap(() => {
      return this.api.get(`search?entities=${this.entity}`, { params: this.createParams() });
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

    Object.keys(this.store.queryParams)
      .forEach(param => {
        params = params.append(param, this.store.queryParams[param]);
      });

    return params;
  }
}
