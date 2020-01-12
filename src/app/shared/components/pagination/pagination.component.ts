import { PageEvent } from '@angular/material';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() data: any;
  @Output() changed: EventEmitter<{}> = new EventEmitter<{}>();

  constructor() { }

  public onPaginationChange(paginationEvent: PageEvent): void {
    this.changed.emit(paginationEvent);
  }

  // private parsePagination(value: PageEvent): PageEvent {
  //   debugger;
  //   return value;
  // }
}
