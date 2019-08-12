import { Component } from '@angular/core';
import { DynamicFormCombobox } from '@dynamic-forms/core';
import { ClrDynamicFormInputComponent } from '../clr-dynamic-form-input.component';

@Component({
  selector: 'clr-dynamic-form-combobox',
  templateUrl: './dynamic-form-combobox.component.html'
})
export class DynamicFormComboboxComponent extends ClrDynamicFormInputComponent<DynamicFormCombobox> {}
