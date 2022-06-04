import { inject, TestBed } from '@angular/core/testing';
import { DynamicFormFieldWrapperTypeConfig, DYNAMIC_FORM_FIELD_WRAPPER_TYPE_CONFIG } from '@dynamic-forms/core';
import { bsDynamicFormControlErrorsType, BsDynamicFormControlErrorsModule } from './dynamic-form-control-errors.module';

describe('BsDynamicFormControlErrorsModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BsDynamicFormControlErrorsModule,
      ],
    });
  });

  it('provides DYNAMIC_FORM_FIELD_WRAPPER_TYPE_CONFIG',
    inject([DYNAMIC_FORM_FIELD_WRAPPER_TYPE_CONFIG], (config: DynamicFormFieldWrapperTypeConfig) => {
      expect(config.length).toBe(1);
      expect(config[0]).toEqual(bsDynamicFormControlErrorsType);
    }),
  );
});
