import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormsModule, DynamicFormArrayModule, DynamicFormConfigModule,
  DynamicFormContainerModule, DynamicFormContentModule, DynamicFormControlModule,
  DynamicFormGroupModule, DYNAMIC_FORM_LIBRARY } from '@dynamic-forms/core';
import { bsDynamicFormLibrary } from './dynamic-form-config/dynamic-form-library';
import { BsDynamicFormElementModule } from './dynamic-form-element/dynamic-form-element.module';
import { BsDynamicFormFieldWrapperModule } from './dynamic-form-field/dynamic-form-field-wrapper.module';
import { BsDynamicFormInputModule } from './dynamic-form-input/dynamic-form-input.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DynamicFormsModule,
    DynamicFormArrayModule,
    DynamicFormConfigModule.withValidation(),
    DynamicFormContainerModule,
    DynamicFormContentModule,
    DynamicFormControlModule,
    DynamicFormGroupModule,
    BsDynamicFormElementModule,
    BsDynamicFormInputModule,
    BsDynamicFormFieldWrapperModule
  ],
  exports: [
    DynamicFormsModule
  ]
})
export class BsDynamicFormsModule {
  static forRoot(): ModuleWithProviders<BsDynamicFormsModule> {
    return {
      ngModule: BsDynamicFormsModule,
      providers: [
        {
          provide: DYNAMIC_FORM_LIBRARY,
          useValue: bsDynamicFormLibrary
        }
      ]
    };
  }
}
