import { Component } from '@angular/core';
import { DynamicFormInputBase, DynamicFormSelect, DynamicFormValidationService } from '@dynamic-forms/core';

@Component({
  selector: 'clr-dynamic-form-select',
  templateUrl: './dynamic-form-select.component.html'
})
export class ClrDynamicFormSelectComponent extends DynamicFormInputBase<DynamicFormSelect> {
  constructor(protected validationService: DynamicFormValidationService) {
    super(validationService);
  }
}
