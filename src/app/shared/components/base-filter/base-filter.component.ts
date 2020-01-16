import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { SORT_BY_FILTER } from '../../../questions/questions.component';

@Component({
  selector: 'app-base-filter',
  templateUrl: './base-filter.component.html',
  styleUrls: ['./base-filter.component.scss']
})
export class BaseFilterComponent implements OnChanges, OnInit {
  @Input() currentSortBy: SelectorValue;
  @Output() filterChanged: EventEmitter<any> = new EventEmitter<any>();
  public sortBy = SORT_BY_FILTER;
  public selectedSort: SelectorValue;

  ngOnInit(): void {
    this.selectedSort = this.sortBy[0];
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  public sortByChanged(): void {
    this.filterChanged.emit({ date: this.selectedSort.value });
  }
}

type SelectorValue = {
  value: string;
  title: string;
};
