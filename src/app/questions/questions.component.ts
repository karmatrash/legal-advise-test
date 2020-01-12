import { Component, OnInit } from '@angular/core';

import { QuestionsService } from './questions.service';
import { QuestionsStore } from './questions.store';

@Component({
  selector: 'app-main',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  constructor(
    private service: QuestionsService,
    public store: QuestionsStore,
  ) { }

  ngOnInit() {
    this.service.getQuestions();
  }

}
