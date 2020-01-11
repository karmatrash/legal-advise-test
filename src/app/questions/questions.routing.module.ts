import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuestionsComponent } from './questions.component';

const ROUTER_QUESTIONS = 'questions';
const mainRoutes: Routes = [
  { path: ROUTER_QUESTIONS, component: QuestionsComponent },
  { path: '', redirectTo: ROUTER_QUESTIONS, pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forChild(mainRoutes),
  ],
  exports: [
    RouterModule,
  ]
})
export class QuestionsRoutingModule { }
