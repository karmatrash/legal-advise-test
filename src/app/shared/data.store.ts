import { BehaviorSubject, Observable } from 'rxjs';
import { Question } from '@app-shared/types/question';
import { QuestionsResponse } from '@app-shared/types/questions.response';

export class DataStore {
  total: number;
  private _questions: BehaviorSubject<Question[]> = new BehaviorSubject<Question[]>([]);
  questions: Observable<Question[]> = this._questions.asObservable();

  private _questionsLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  questionsLoading = this._questionsLoading.asObservable();

  public setDataLoading(value: boolean): void {
    this._questionsLoading.next(value);
  }

  public setData(response: QuestionsResponse): void {
    if (!response) {
      this.total = 0;
      this._questions.next(null);
    } else {
      this.total = response.total;
      this._questions.next(response.list);
    }
  }
}
