import { Component } from '@angular/core';
import { DynamicFormInputBase, DynamicFormSelect, DynamicFormValidationService } from '@dynamic-forms/core';

@Component({
  selector: 'tl-dynamic-form-select',
  templateUrl: './dynamic-form-select.component.html'
})
export class TlDynamicFormSelectComponent extends DynamicFormInputBase<DynamicFormSelect> {
  constructor(protected validationService: DynamicFormValidationService) {
    super(validationService);
  }
}

