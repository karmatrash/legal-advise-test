import { Question } from '../../types/question';
import { Pagination } from '@app-shared/types/pagination';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-base-list',
  templateUrl: './base-list.component.html',
  styleUrls: ['./base-list.component.scss']
})
export class BaseListComponent implements OnInit {
  @Input() data: Question[];
  @Input() loading: boolean;
  @Input() pagination: Pagination;
  @Output() paginationChanged: EventEmitter<Pagination> = new EventEmitter<Pagination>();

  ngOnInit() {
  }

  public onPaginationChanged(data: any): void {
    this.paginationChanged.emit(data);
  }
}
