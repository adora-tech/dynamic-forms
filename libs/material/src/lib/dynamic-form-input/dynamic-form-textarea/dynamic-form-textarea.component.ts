import { Component } from '@angular/core';
import { DynamicFormInputBase, DynamicFormTextarea, DynamicFormValidationService } from '@dynamic-forms/core';

@Component({
  selector: 'mat-dynamic-form-textarea',
  templateUrl: './dynamic-form-textarea.component.html'
})
export class MatDynamicFormTextareaComponent extends DynamicFormInputBase<DynamicFormTextarea> {
  constructor(protected override validationService: DynamicFormValidationService) {
    super(validationService);
  }
}
