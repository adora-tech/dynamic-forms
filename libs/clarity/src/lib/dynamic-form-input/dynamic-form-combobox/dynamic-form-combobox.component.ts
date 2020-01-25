import { Component } from '@angular/core';
import { DynamicFormCombobox, DynamicFormInputBase, DynamicFormValidationService } from '@dynamic-forms/core';

@Component({
  selector: 'clr-dynamic-form-combobox',
  templateUrl: './dynamic-form-combobox.component.html'
})
export class ClrDynamicFormComboboxComponent extends DynamicFormInputBase<DynamicFormCombobox> {
  constructor(protected validationService: DynamicFormValidationService) {
    super(validationService);
  }
}
