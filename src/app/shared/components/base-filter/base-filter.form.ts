import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable()
export class BaseFilterForm {

  constructor(private fb: FormBuilder) { }

  initializeForm(): FormGroup {
    return this.fb.group({
      sortBy: this.fb.control(''),
    });
  }
}
