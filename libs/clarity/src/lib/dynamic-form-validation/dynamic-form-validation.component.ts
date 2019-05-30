import { Component } from '@angular/core';
import { DynamicFormValidationComponent, DynamicFormValidationService } from '@dynamic-forms/core';

@Component({
  selector: 'clr-dynamic-form-validation',
  templateUrl: './dynamic-form-validation.component.html',
  styleUrls: ['./dynamic-form-validation.component.scss']
})
export class DynamicFormValidationClarityComponent extends DynamicFormValidationComponent {
  constructor(protected validationService: DynamicFormValidationService) {
    super(validationService);
  }
}
