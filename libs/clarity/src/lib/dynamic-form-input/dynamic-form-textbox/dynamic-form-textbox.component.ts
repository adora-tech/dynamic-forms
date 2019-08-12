import { Component } from '@angular/core';
import { DynamicFormTextbox } from '@dynamic-forms/core';
import { ClrDynamicFormInputComponent } from '../clr-dynamic-form-input.component';

@Component({
  selector: 'clr-dynamic-form-textbox',
  templateUrl: './dynamic-form-textbox.component.html'
})
export class DynamicFormTextboxComponent extends ClrDynamicFormInputComponent<DynamicFormTextbox> {}
