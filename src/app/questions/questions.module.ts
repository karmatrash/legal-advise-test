import { NgModule } from '@angular/core';

import { QuestionsComponent } from './questions.component';
import { QuestionsRoutingModule } from './questions.routing.module';

@NgModule({
  imports: [
    QuestionsRoutingModule,
  ],
  declarations: [
    QuestionsComponent,
  ],
  exports: [],
  providers: []
})
export class QuestionsModule {}
