import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { getDynamicFormProviders, DynamicFormsModule, DynamicFormConfig } from '@dynamic-forms/core';
import { ClrDynamicFormInputModule } from './dynamic-form-input/dynamic-form-input.module';
import { clrDynamicFormConfig } from './dynamic-forms.config';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClarityModule,
    DynamicFormsModule,
    ClrDynamicFormInputModule
  ],
  exports: [
    DynamicFormsModule
  ]
})
export class ClrDynamicFormsModule {
  static forRoot(config?: DynamicFormConfig): ModuleWithProviders {
    return {
      ngModule: ClrDynamicFormsModule,
      providers: getDynamicFormProviders(clrDynamicFormConfig, config)
    };
  }
}
