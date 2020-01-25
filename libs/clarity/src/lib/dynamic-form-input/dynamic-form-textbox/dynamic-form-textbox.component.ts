import { Component } from '@angular/core';
import { DynamicFormInputBase, DynamicFormTextbox, DynamicFormValidationService } from '@dynamic-forms/core';

@Component({
  selector: 'clr-dynamic-form-textbox',
  templateUrl: './dynamic-form-textbox.component.html'
})
export class ClrDynamicFormTextboxComponent extends DynamicFormInputBase<DynamicFormTextbox> {
  constructor(protected validationService: DynamicFormValidationService) {
    super(validationService);
  }
}
