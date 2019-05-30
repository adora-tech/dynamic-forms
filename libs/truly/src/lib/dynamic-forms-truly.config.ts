import {
  DynamicFormArrayComponent,
  DynamicFormConfig,
  DynamicFormConfigService,
  DynamicFormControlComponent,
  DynamicFormGroupComponent
} from '@dynamic-forms/core';
import { trulyDynamicFormInputConfig } from './dynamic-form-input/dynamic-form-input.config';

export const trulyDynamicFormConfig: DynamicFormConfig = {
  module: 'truly',
  wrapperConfig: {
    types: []
  },
  fieldConfig: {
    types: [
      { type: 'group', component: DynamicFormGroupComponent },
      { type: 'array', component: DynamicFormArrayComponent },
      { type: 'control', component: DynamicFormControlComponent }
    ]
  },
  inputConfig: trulyDynamicFormInputConfig,
  validationConfig: {
    defaultMessage: 'The field is invalid.',
    messages: {
      required: 'The field is required.',
      email: 'The field is not an email.',
      pattern: 'The field does not fit the pattern.',
      min: 'The field does not fit the min value',
      max: 'The field does not fit the max value',
      minlength: 'The field does not fit the min length',
      maxlength: 'The field does not fit the max length'
    }
  }
};

export function trulyDynamicFormConfigFactory(configs: DynamicFormConfig[]): DynamicFormConfigService {
  const config = configs.find(c => c.module === trulyDynamicFormConfig.module);
  return new DynamicFormConfigService(config);
}
