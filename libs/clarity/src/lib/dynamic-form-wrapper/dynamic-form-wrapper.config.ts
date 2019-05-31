import { DynamicFormWrapperConfig } from '@dynamic-forms/core';
import { ClrDynamicFormControlLabelComponent } from './dynamic-form-control-label.component';

export const clrDynamicFormWrapperConfig: DynamicFormWrapperConfig = {
  types: [
    { type: 'label', component: ClrDynamicFormControlLabelComponent }
  ]
};
