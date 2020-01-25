import { async, inject, TestBed } from '@angular/core/testing';
import { DynamicFormInputTypes, DYNAMIC_FORM_INPUT_TYPES } from '@dynamic-forms/core';
import { nbDynamicFormLibrary } from '../../dynamic-form-config/dynamic-form-library';
import { nbDynamicFormTextareaType, NbDynamicFormTextareaModule } from './dynamic-form-textarea.module';

describe('NbDynamicFormTextareaModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NbDynamicFormTextareaModule
      ]
    });
  }));

  it('provides DYNAMIC_FORM_INPUT_TYPES',
    inject([DYNAMIC_FORM_INPUT_TYPES], (types: DynamicFormInputTypes) => {
      expect(types.length).toBe(1);
      expect(types[0]).toEqual(nbDynamicFormTextareaType);
      expect(types[0].libraryName).toEqual(nbDynamicFormLibrary.name);
    })
  );
});
