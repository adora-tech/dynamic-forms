import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { getDynamicFormProviders, DynamicFormsModule, DynamicFormConfig } from '@dynamic-forms/core';
import { CoreModule } from 'truly-ui';
import { TlDynamicFormInputModule } from './dynamic-form-input/dynamic-form-input.module';
import { tlDynamicFormConfig } from './dynamic-forms.config';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DynamicFormsModule,
    CoreModule.forRoot({
      theme: 'indigo'
    }),
    TlDynamicFormInputModule
  ],
  exports: [
    DynamicFormsModule
  ]
})
export class TlDynamicFormsModule {
  static forRoot(config?: DynamicFormConfig): ModuleWithProviders {
    return {
      ngModule: TlDynamicFormsModule,
      providers: getDynamicFormProviders(tlDynamicFormConfig, config)
    };
  }
}
