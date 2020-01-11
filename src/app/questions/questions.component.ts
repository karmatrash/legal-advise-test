import { Component, OnInit } from '@angular/core';

import { QuestionsService } from './questions.service';

@Component({
  selector: 'app-main',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  constructor(public service: QuestionsService) { }

  ngOnInit() {
    this.service.getQuestions();
  }

}
