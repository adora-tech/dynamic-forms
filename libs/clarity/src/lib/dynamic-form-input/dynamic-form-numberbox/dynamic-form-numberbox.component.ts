import { Component } from '@angular/core';
import { DynamicFormInputBase, DynamicFormNumberbox, DynamicFormValidationService } from '@dynamic-forms/core';

@Component({
  selector: 'clr-dynamic-form-numberbox',
  templateUrl: './dynamic-form-numberbox.component.html'
})
export class ClrDynamicFormNumberboxComponent extends DynamicFormInputBase<DynamicFormNumberbox> {
  constructor(protected validationService: DynamicFormValidationService) {
    super(validationService);
  }
}
