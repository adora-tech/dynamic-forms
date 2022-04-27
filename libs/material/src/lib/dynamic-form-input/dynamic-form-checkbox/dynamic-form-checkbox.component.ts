import { Component } from '@angular/core';
import { DynamicFormCheckbox, DynamicFormInputBase, DynamicFormValidationService } from '@dynamic-forms/core';

@Component({
  selector: 'mat-dynamic-form-checkbox',
  templateUrl: './dynamic-form-checkbox.component.html'
})
export class MatDynamicFormCheckboxComponent extends DynamicFormInputBase<DynamicFormCheckbox> {
  constructor(protected override validationService: DynamicFormValidationService) {
    super(validationService);
  }
}
