import { Component } from '@angular/core';
import { DynamicFormInputBase, DynamicFormNumberbox, DynamicFormValidationService } from '@dynamic-forms/core';

@Component({
  selector: 'bs-dynamic-form-numberbox',
  templateUrl: './dynamic-form-numberbox.component.html'
})
export class BsDynamicFormNumberboxComponent extends DynamicFormInputBase<DynamicFormNumberbox> {
  constructor(protected override validationService: DynamicFormValidationService) {
    super(validationService);
  }
}
