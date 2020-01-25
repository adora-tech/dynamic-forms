import { Component } from '@angular/core';
import { DynamicFormInputBase, DynamicFormRadio, DynamicFormValidationService } from '@dynamic-forms/core';

@Component({
  selector: 'clr-dynamic-form-radio',
  templateUrl: './dynamic-form-radio.component.html'
})
export class ClrDynamicFormRadioComponent extends DynamicFormInputBase<DynamicFormRadio> {
  constructor(protected validationService: DynamicFormValidationService) {
    super(validationService);
  }
}
