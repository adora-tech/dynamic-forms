import { Component } from '@angular/core';
import { DynamicFormSelect } from '@dynamic-forms/core';
import { ClrDynamicFormInputComponent } from '../clr-dynamic-form-input.component';

@Component({
  selector: 'clr-dynamic-form-select',
  templateUrl: './dynamic-form-select.component.html'
})
export class DynamicFormSelectComponent extends ClrDynamicFormInputComponent<DynamicFormSelect> {}
