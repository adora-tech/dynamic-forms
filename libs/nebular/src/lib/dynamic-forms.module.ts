import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormsModule, DynamicFormArrayModule, DynamicFormConfigModule,
  DynamicFormContainerModule, DynamicFormContentModule, DynamicFormControlModule,
  DynamicFormGroupModule,  DYNAMIC_FORM_LIBRARY } from '@dynamic-forms/core';
import { nbDynamicFormLibrary } from './dynamic-form-config/dynamic-form-library';
import { NbDynamicFormInputModule} from './dynamic-form-input/dynamic-form-input.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DynamicFormsModule,
    DynamicFormConfigModule.withValidation(),
    DynamicFormArrayModule,
    DynamicFormContainerModule,
    DynamicFormContentModule,
    DynamicFormControlModule,
    DynamicFormGroupModule,
    NbDynamicFormInputModule
  ],
  exports: [
    DynamicFormsModule
  ]
})
export class NbDynamicFormsModule {
  static forRoot(): ModuleWithProviders<NbDynamicFormsModule> {
    return {
      ngModule: NbDynamicFormsModule,
      providers: [
        {
          provide: DYNAMIC_FORM_LIBRARY,
          useValue: nbDynamicFormLibrary
        }
      ]
    };
  }
}
