import { DynamicFormControl, DynamicFormValidationService } from '@dynamic-forms/core';
import { ClrDynamicFormInputComponent } from './clr-dynamic-form-input.component';

describe('ClrDynamicFormInputComponent', () => {
  it('get error message returns error message from validation service', () => {
    const validationService = <DynamicFormValidationService>{
      getErrorMessage: errors => errors ? 'Error message' : null
    };
    const component = new ClrDynamicFormInputComponent(validationService);

    component.field = <DynamicFormControl>{ control: { errors: {} } };

    expect(component.errorMessage).toBe('Error message');

    component.field = <DynamicFormControl>{ control: {} };

    expect(component.errorMessage).toBeNull();
  });
});
