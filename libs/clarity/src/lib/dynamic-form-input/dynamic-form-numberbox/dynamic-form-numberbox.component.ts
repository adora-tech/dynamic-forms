import { Component } from '@angular/core';
import { DynamicFormNumberbox } from '@dynamic-forms/core';
import { ClrDynamicFormInputComponent } from '../clr-dynamic-form-input.component';

@Component({
  selector: 'clr-dynamic-form-numberbox',
  templateUrl: './dynamic-form-numberbox.component.html'
})
export class DynamicFormNumberboxComponent extends ClrDynamicFormInputComponent<DynamicFormNumberbox> {}
