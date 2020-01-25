import { async, inject, TestBed } from '@angular/core/testing';
import { DynamicFormInputTypes, DYNAMIC_FORM_INPUT_TYPES } from '@dynamic-forms/core';
import { clrDynamicFormLibrary } from '../../dynamic-form-config/dynamic-form-library';
import { clrDynamicFormRadioType, ClrDynamicFormRadioModule } from './dynamic-form-radio.module';

describe('ClrDynamicFormRadioModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ClrDynamicFormRadioModule
      ]
    });
  }));

  it('provides DYNAMIC_FORM_INPUT_TYPES',
    inject([DYNAMIC_FORM_INPUT_TYPES], (types: DynamicFormInputTypes) => {
      expect(types.length).toBe(1);
      expect(types[0]).toEqual(clrDynamicFormRadioType);
      expect(types[0].libraryName).toEqual(clrDynamicFormLibrary.name);
    })
  );
});
