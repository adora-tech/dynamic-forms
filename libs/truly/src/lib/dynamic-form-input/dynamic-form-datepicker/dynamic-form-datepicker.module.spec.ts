import { async, inject, TestBed } from '@angular/core/testing';
import { DynamicFormInputTypes, DYNAMIC_FORM_INPUT_TYPES } from '@dynamic-forms/core';
import { tlDynamicFormLibrary } from '../../dynamic-form-config/dynamic-form-library';
import { tlDynamicFormDatepickerType, TlDynamicFormDatepickerModule } from './dynamic-form-datepicker.module';

describe('TlDynamicFormDatepickerModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TlDynamicFormDatepickerModule
      ]
    });
  }));

  it('provides DYNAMIC_FORM_INPUT_TYPES',
    inject([DYNAMIC_FORM_INPUT_TYPES], (types: DynamicFormInputTypes) => {
      expect(types.length).toBe(1);
      expect(types[0]).toEqual(tlDynamicFormDatepickerType);
      expect(types[0].libraryName).toEqual(tlDynamicFormLibrary.name);
    })
  );
});
