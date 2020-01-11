import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../../types/question';

@Component({
  selector: 'app-base-list',
  templateUrl: './base-list.component.html',
  styleUrls: ['./base-list.component.scss']
})
export class BaseListComponent implements OnInit {
  @Input() data: Question[];
  @Input() loading: boolean;
  @Input() pagination: any;

  constructor() { }

  ngOnInit() {
  }

  public onPaginationChanged(data: {}): void {
    console.log(data);
  }
}
