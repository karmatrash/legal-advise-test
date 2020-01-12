import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { QuestionsResponse } from '@app-shared/types/questions.response';
import { ApiRestService } from '@app-shared/api.service';
import { QuestionsStore } from './questions.store';
import { switchMap } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable()
export class QuestionsService {

  constructor(
    private http: HttpClient,
    private store: QuestionsStore,
    private api: ApiRestService,
  ) {
    this.initQuestionsObservable();
  }

  questionsRequest = new Subject();

  private initQuestionsObservable(): void {
    this.questionsRequest.pipe(switchMap(() => {
      return this.api.get('search?entities=questions', );
    }))
      .subscribe((response: { data: QuestionsResponse }) => {
        this.store.setData(response.data);
        this.store.setQuestionsLoading(false);
      }, () => {
        this.store.setData({});
        this.store.setQuestionsLoading(false);
      });
  }

  // private createParams() {
  //
  // }

  public getQuestions(): void {
    this.store.setQuestionsLoading(true);
    this.questionsRequest.next();
  }
}
