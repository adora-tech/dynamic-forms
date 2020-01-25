import { Component } from '@angular/core';
import { DynamicFormDatepicker, DynamicFormInputBase, DynamicFormValidationService } from '@dynamic-forms/core';

@Component({
  selector: 'nb-dynamic-form-datepicker',
  templateUrl: './dynamic-form-datepicker.component.html'
})
export class NbDynamicFormDatepickerComponent extends DynamicFormInputBase<DynamicFormDatepicker> {
  constructor(protected validationService: DynamicFormValidationService) {
    super(validationService);
  }
}
