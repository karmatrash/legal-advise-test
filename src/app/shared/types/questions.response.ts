import { Question } from '@app-shared/types/question';

export type QuestionsResponse = {
  total: number;
  list: Question[];
  pagination: {
    page, pages, items, limit: number;
  };
};
