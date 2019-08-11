import { Component } from '@angular/core';
import { DynamicFormCheckbox, DynamicFormInputComponent } from '@dynamic-forms/core';

@Component({
  selector: 'tl-dynamic-form-checkbox',
  templateUrl: './dynamic-form-checkbox.component.html'
})
export class DynamicFormCheckboxComponent extends DynamicFormInputComponent<DynamicFormCheckbox> {}