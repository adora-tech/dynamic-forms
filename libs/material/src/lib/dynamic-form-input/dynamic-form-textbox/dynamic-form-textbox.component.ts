import { Component } from '@angular/core';
import { DynamicFormInputBase, DynamicFormTextbox, DynamicFormValidationService } from '@dynamic-forms/core';

@Component({
  selector: 'mat-dynamic-form-textbox',
  templateUrl: './dynamic-form-textbox.component.html'
})
export class MatDynamicFormTextboxComponent extends DynamicFormInputBase<DynamicFormTextbox> {
  constructor(protected override validationService: DynamicFormValidationService) {
    super(validationService);
  }
}
