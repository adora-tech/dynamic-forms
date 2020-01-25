import { async, inject, TestBed } from '@angular/core/testing';
import { DynamicFormInputTypes, DYNAMIC_FORM_INPUT_TYPES } from '@dynamic-forms/core';
import { clrDynamicFormLibrary } from '../../dynamic-form-config/dynamic-form-library';
import { clrDynamicFormCheckboxType, ClrDynamicFormCheckboxModule } from './dynamic-form-checkbox.module';

describe('ClrDynamicFormCheckboxModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ClrDynamicFormCheckboxModule
      ]
    });
  }));

  it('provides DYNAMIC_FORM_INPUT_TYPES',
    inject([DYNAMIC_FORM_INPUT_TYPES], (types: DynamicFormInputTypes) => {
      expect(types.length).toBe(1);
      expect(types[0]).toEqual(clrDynamicFormCheckboxType);
      expect(types[0].libraryName).toEqual(clrDynamicFormLibrary.name);
    })
  );
});
