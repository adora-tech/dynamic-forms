import { Component } from '@angular/core';
import { DynamicFormInputBase, DynamicFormTextarea, DynamicFormValidationService } from '@dynamic-forms/core';

@Component({
  selector: 'nb-dynamic-form-textarea',
  templateUrl: './dynamic-form-textarea.component.html'
})
export class NbDynamicFormTextareaComponent extends DynamicFormInputBase<DynamicFormTextarea> {
  constructor(protected validationService: DynamicFormValidationService) {
    super(validationService);
  }
}
