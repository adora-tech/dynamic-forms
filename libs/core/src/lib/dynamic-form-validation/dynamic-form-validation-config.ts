import { InjectionToken } from '@angular/core';
import { dynamicFormLibrary, DynamicFormLibraryName } from '../dynamic-form-library/dynamic-form-library';

export interface DynamicFormValidationConfig {
  defaultMessage: string;
  messages: { [key: string]: string };
  libraryName: DynamicFormLibraryName;
}

export type DynamicFormValidationConfigs = DynamicFormValidationConfig[];

export const DYNAMIC_FORM_VALIDATION_CONFIGS = new InjectionToken<DynamicFormValidationConfigs>('DynamicFormValidationConfigs');

export const dynamicFormValidationConfig: DynamicFormValidationConfig = {
  defaultMessage: 'The field is invalid.',
  messages: {
    required: 'The field is required.',
    email: 'The field is not an email.',
    pattern: 'The field does not fit the pattern.',
    min: 'The field does not fit the min value.',
    max: 'The field does not fit the max value.',
    minlength: 'The field does not fit the min length.',
    maxlength: 'The field does not fit the max length.',
    requiredGroup: 'The group is required.',
    allRequiredGroup: 'The group requires all fields.',
    requiredArray: 'The array is required',
    minlengthArray: 'The array does not fit the min length.',
    maxlengthArray: 'The array does not fit the max length.',
    requiredDictionary: 'The dictionary is required',
    minlengthDictionary: 'The dictionary does not fit the min length.',
    maxlengthDictionary: 'The dictionary does not fit the max length.',
  },
  libraryName: dynamicFormLibrary.name,
};
