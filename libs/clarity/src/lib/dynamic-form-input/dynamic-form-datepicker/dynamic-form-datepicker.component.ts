import { Component } from '@angular/core';
import { DynamicFormDatepicker, DynamicFormInputComponent } from '@dynamic-forms/core';

@Component({
  selector: 'clr-dynamic-form-datepicker',
  templateUrl: './dynamic-form-datepicker.component.html'
})
export class DynamicFormDatepickerComponent extends DynamicFormInputComponent<DynamicFormDatepicker> {}
