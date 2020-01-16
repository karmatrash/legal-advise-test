import { Component, Input } from '@angular/core';

import { Question } from '@app-shared/types/question';

@Component({
  selector: 'app-base-list-item',
  templateUrl: './base-list-item.component.html',
  styleUrls: ['./base-list-item.component.scss']
})
export class BaseListItemComponent {
  @Input() value: Question;
}
