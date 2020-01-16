import { FormGroup } from '@angular/forms';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

import { Filter } from '@app-shared/types/filter';
import { SORT_BY_FILTER } from '../../../questions/questions.component';
import { BaseFilterForm } from '@app-shared/components/base-filter/base-filter.form';

@Component({
  selector: 'app-base-filter',
  templateUrl: './base-filter.component.html',
  styleUrls: ['./base-filter.component.scss'],
  providers: [BaseFilterForm]
})
export class BaseFilterComponent implements OnInit, OnChanges {
  @Input() filters: Filter;
  @Output() filterChanged: EventEmitter<any> = new EventEmitter<any>();
  public sortBy = SORT_BY_FILTER;
  public form: FormGroup;

  constructor(private filter: BaseFilterForm) { }

  ngOnInit(): void {
    this.form = this.filter.initializeForm();
    this.form.valueChanges.subscribe(value => this.onFilterChanged(value));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.filters.firstChange) {
      this.form.patchValue(changes.filters.currentValue);
    }
  }

  private onFilterChanged(value: Filter): void {
    this.filterChanged.emit(value);
  }
}
