import { DynamicFormInput, DynamicFormInputComponent, DynamicFormValidationService } from '@dynamic-forms/core';

export class ClrDynamicFormInputComponent<FormInput extends DynamicFormInput = DynamicFormInput>
  extends DynamicFormInputComponent<FormInput> {

  constructor(protected validationService: DynamicFormValidationService) {
    super();
  }

  get errorMessage() {
    return this.validationService.getErrorMessage(this.control.errors);
  }
}
