import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { getDynamicFormProviders, DynamicFormsModule, DynamicFormConfig } from '@dynamic-forms/core';
import { NbDynamicFormInputModule} from './dynamic-form-input/dynamic-form-input.module';
import { nbDynamicFormConfig } from './dynamic-forms.config';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DynamicFormsModule,
    NbDynamicFormInputModule
  ],
  exports: [
    DynamicFormsModule
  ]
})
export class NbDynamicFormsModule {
  static forRoot(config?: DynamicFormConfig): ModuleWithProviders {
    return {
      ngModule: NbDynamicFormsModule,
      providers: getDynamicFormProviders(nbDynamicFormConfig, config)
    };
  }
}
