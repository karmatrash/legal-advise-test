import { NgModule } from '@angular/core';

import { QuestionsRoutingModule } from './questions.routing.module';
import { QuestionsComponent } from './questions.component';
import { SharedModule } from '@app-shared/shared.module';
import { QuestionsService } from './questions.service';
import { QuestionsStore } from './questions.store';
import { CoreModule } from '../core/core.module';

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
    QuestionsStore,
  ]
})
export class QuestionsModule {}
