import { dynamicFormConfig, DynamicFormConfig } from '@dynamic-forms/core';
import { nbDynamicFormInputConfig } from './dynamic-form-input/dynamic-form-input.config';

export const nbDynamicFormConfig: DynamicFormConfig = {
  library: 'nebular',
  elementConfig: dynamicFormConfig.elementConfig,
  fieldConfig: dynamicFormConfig.fieldConfig,
  inputConfig: nbDynamicFormInputConfig,
  wrapperConfig: dynamicFormConfig.wrapperConfig,
  validationConfig: dynamicFormConfig.validationConfig
};
