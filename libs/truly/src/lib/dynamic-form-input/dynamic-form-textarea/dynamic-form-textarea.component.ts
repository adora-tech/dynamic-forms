import { Component } from '@angular/core';
import { DynamicFormInputBase, DynamicFormTextarea, DynamicFormValidationService } from '@dynamic-forms/core';

@Component({
  selector: 'tl-dynamic-form-textarea',
  templateUrl: './dynamic-form-textarea.component.html'
})
export class DynamicFormTextareaComponent extends DynamicFormInputBase<DynamicFormTextarea> {
  constructor(protected validationService: DynamicFormValidationService) {
    super(validationService);
  }
}

