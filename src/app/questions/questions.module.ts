import { NgModule } from '@angular/core';

import { CoreModule } from '../core/core.module';
import { QuestionsComponent } from './questions.component';
import { SharedModule } from '@app-shared/shared.module';
import { QuestionsRoutingModule } from './questions.routing.module';

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
export class QuestionsModule { }
