import { NgModule } from '@angular/core';

import { QuestionsComponent } from './questions.component';
import { QuestionsRoutingModule } from './questions.routing.module';
import { QuestionsService } from './questions.service';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    QuestionsRoutingModule,
    CoreModule,
    SharedModule,
  ],
  declarations: [
    QuestionsComponent,
  ],
  providers: [
    QuestionsService,
  ]
})
export class QuestionsModule {}
