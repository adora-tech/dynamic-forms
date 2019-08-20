import { dynamicFormConfig, DynamicFormConfig } from '@dynamic-forms/core';
import { trulyDynamicFormInputConfig } from './dynamic-form-input/dynamic-form-input.config';

export const tlDynamicFormConfig: DynamicFormConfig = {
  library: 'truly',
  wrapperConfig: dynamicFormConfig.wrapperConfig,
  fieldConfig: dynamicFormConfig.fieldConfig,
  inputConfig: trulyDynamicFormInputConfig,
  validationConfig: dynamicFormConfig.validationConfig
};
