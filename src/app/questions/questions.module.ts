import { NgModule } from '@angular/core';

import { QuestionsRoutingModule } from './questions.routing.module';
import { QuestionsComponent } from './questions.component';
import { SharedModule } from '@app-shared/shared.module';
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
  providers: []
})
export class QuestionsModule {}
