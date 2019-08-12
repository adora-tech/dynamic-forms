import { Component } from '@angular/core';
import { DynamicFormTextarea } from '@dynamic-forms/core';
import { ClrDynamicFormInputComponent } from '../clr-dynamic-form-input.component';

@Component({
  selector: 'clr-dynamic-form-textarea',
  templateUrl: './dynamic-form-textarea.component.html'
})
export class DynamicFormTextareaComponent extends ClrDynamicFormInputComponent<DynamicFormTextarea> {}
