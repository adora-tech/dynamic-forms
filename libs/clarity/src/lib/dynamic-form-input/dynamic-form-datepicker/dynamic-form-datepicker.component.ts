import { Component } from '@angular/core';
import { DynamicFormDatepicker } from '@dynamic-forms/core';
import { ClrDynamicFormInputComponent } from '../clr-dynamic-form-input.component';

@Component({
  selector: 'clr-dynamic-form-datepicker',
  templateUrl: './dynamic-form-datepicker.component.html'
})
export class DynamicFormDatepickerComponent extends ClrDynamicFormInputComponent<DynamicFormDatepicker> {}
