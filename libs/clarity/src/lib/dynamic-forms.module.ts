import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { DynamicFormsModule, DynamicFormArrayModule, DynamicFormConfigModule,
  DynamicFormContainerModule, DynamicFormContentModule, DynamicFormControlModule,
  DynamicFormGroupModule, DYNAMIC_FORM_LIBRARY } from '@dynamic-forms/core';
import { clrDynamicFormLibrary } from './dynamic-form-config/dynamic-form-library';
import { ClrDynamicFormInputModule } from './dynamic-form-input/dynamic-form-input.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClarityModule,
    DynamicFormsModule,
    DynamicFormArrayModule,
    DynamicFormConfigModule.withValidation(),
    DynamicFormContainerModule,
    DynamicFormContentModule,
    DynamicFormControlModule,
    DynamicFormGroupModule,
    ClrDynamicFormInputModule
  ],
  exports: [
    DynamicFormsModule
  ]
})
export class ClrDynamicFormsModule {
  static forRoot(): ModuleWithProviders<ClrDynamicFormsModule> {
    return {
      ngModule: ClrDynamicFormsModule,
      providers: [
        {
          provide: DYNAMIC_FORM_LIBRARY,
          useValue: clrDynamicFormLibrary
        }
      ]
    };
  }
}
