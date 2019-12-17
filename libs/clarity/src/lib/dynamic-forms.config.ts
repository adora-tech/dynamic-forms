import { dynamicFormConfig, DynamicFormConfig } from '@dynamic-forms/core';
import { clrDynamicFormInputConfig } from './dynamic-form-input/dynamic-form-input.config';

export const clrDynamicFormConfig: DynamicFormConfig = {
  library: 'clarity',
  elementConfig: dynamicFormConfig.elementConfig,
  fieldConfig: dynamicFormConfig.fieldConfig,
  inputConfig: clrDynamicFormInputConfig,
  wrapperConfig: dynamicFormConfig.wrapperConfig,
  validationConfig: dynamicFormConfig.validationConfig
};
