import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormsModule, DynamicFormArrayModule, DynamicFormConfigModule,
  DynamicFormContainerModule, DynamicFormContentModule, DynamicFormControlModule,
  DynamicFormGroupModule, DYNAMIC_FORM_LIBRARY } from '@dynamic-forms/core';
import { CoreModule } from 'truly-ui';
import { tlDynamicFormLibrary } from './dynamic-form-config/dynamic-form-library';
import { TlDynamicFormInputModule } from './dynamic-form-input/dynamic-form-input.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CoreModule.forRoot({ theme: 'indigo' }),
    DynamicFormsModule,
    DynamicFormArrayModule,
    DynamicFormConfigModule.withValidation(),
    DynamicFormContainerModule,
    DynamicFormContentModule,
    DynamicFormControlModule,
    DynamicFormGroupModule,
    TlDynamicFormInputModule
  ],
  exports: [
    DynamicFormsModule
  ]
})
export class TlDynamicFormsModule {
  static forRoot(): ModuleWithProviders<TlDynamicFormsModule> {
    return {
      ngModule: TlDynamicFormsModule,
      providers: [
        {
          provide: DYNAMIC_FORM_LIBRARY,
          useValue: tlDynamicFormLibrary
        }
      ]
    };
  }
}
