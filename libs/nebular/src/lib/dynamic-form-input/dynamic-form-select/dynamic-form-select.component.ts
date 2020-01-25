import { Component } from '@angular/core';
import { DynamicFormInputBase, DynamicFormSelect, DynamicFormValidationService } from '@dynamic-forms/core';

@Component({
  selector: 'nb-dynamic-form-select',
  templateUrl: './dynamic-form-select.component.html'
})
export class NbDynamicFormSelectComponent extends DynamicFormInputBase<DynamicFormSelect> {
  constructor(protected validationService: DynamicFormValidationService) {
    super(validationService);
  }
}
