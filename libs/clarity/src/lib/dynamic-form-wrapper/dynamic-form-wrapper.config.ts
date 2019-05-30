import { DynamicFormWrapperConfig } from '@dynamic-forms/core';
import { DynamicFormLabelWrapperClarityComponent } from './dynamic-form-label-wrapper.component';

export const clrDynamicFormWrapperConfig: DynamicFormWrapperConfig = {
  types: [
    { type: 'label', component: DynamicFormLabelWrapperClarityComponent }
  ]
};
