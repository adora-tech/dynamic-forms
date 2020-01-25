import { Component } from '@angular/core';
import { DynamicFormInputBase, DynamicFormNumberbox, DynamicFormValidationService } from '@dynamic-forms/core';

@Component({
  selector: 'nb-dynamic-form-numberbox',
  templateUrl: './dynamic-form-numberbox.component.html'
})
export class NbDynamicFormNumberboxComponent extends DynamicFormInputBase<DynamicFormNumberbox> {
  constructor(protected validationService: DynamicFormValidationService) {
    super(validationService);
  }
}
