import { Injectable } from '@angular/core';
import { Question } from '../shared/types/question';

@Injectable()
export class QuestionsService {
  public data: any[];

  constructor() { }

  public getQuestions() {
    fetch('https://stage.legaladviceme.com/api/search?entities=questions&sortBy=date:desc&perPage=10&page=1')
      .then(response => response.json())
      .then((response: { data: getQuestionsResponseData }) => {
        this.data =  [ ...response.data.list, $mockQuestionObj ];
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

const $mockQuestionObj = {
  id: 666666,
  alias: 'abu-dhabi-can-landlord-sell-property-without-notifying-tenant',
  answers: 1,
  date: {created: 1455089221, viewed: 1492167362},
  entity: 'questions',
  description: {},
  title: 'Can landlord sell the property without notifying the tenant?',
  views: 66666666,
};
