import { async, inject, TestBed } from '@angular/core/testing';
import { DynamicFormInputTypes, DYNAMIC_FORM_INPUT_TYPES } from '@dynamic-forms/core';
import { clrDynamicFormLibrary } from '../../dynamic-form-config/dynamic-form-library';
import { clrDynamicFormNumberboxType, ClrDynamicFormNumberboxModule } from './dynamic-form-numberbox.module';

describe('ClrDynamicFormNumberboxModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ClrDynamicFormNumberboxModule
      ]
    });
  }));

  it('provides DYNAMIC_FORM_INPUT_TYPES',
    inject([DYNAMIC_FORM_INPUT_TYPES], (types: DynamicFormInputTypes) => {
      expect(types.length).toBe(1);
      expect(types[0]).toEqual(clrDynamicFormNumberboxType);
      expect(types[0].libraryName).toEqual(clrDynamicFormLibrary.name);
    })
  );
});
