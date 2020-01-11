import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../../types/question';

@Component({
  selector: 'app-base-list-item',
  templateUrl: './base-list-item.component.html',
  styleUrls: ['./base-list-item.component.scss']
})
export class BaseListItemComponent implements OnInit {
  @Input() value: Question;

  constructor() { }

  ngOnInit() {
  }

}
