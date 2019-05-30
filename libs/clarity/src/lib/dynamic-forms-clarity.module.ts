import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormsCoreModule } from '@dynamic-forms/core';
import { dynamicFormsCoreServices } from '@dynamic-forms/core';
import { DynamicFormConfigService } from '@dynamic-forms/core';
import { DynamicFormConfig, DYNAMIC_FORM_CONFIG } from '@dynamic-forms/core';
import { DynamicFormControlClarityModule } from './dynamic-form-control/dynamic-form-control.module';
import { DynamicFormInputClarityModule } from './dynamic-form-input/dynamic-form-input.module';
import { DynamicFormValidationClarityModule } from './dynamic-form-validation/dynamic-form-validation.module';
import { DynamicFormWrapperClarityModule } from './dynamic-form-wrapper/dynamic-form-wrapper.module';
import { ClrDynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { clrDynamicFormConfig, clrDynamicFormConfigFactory } from './dynamic-forms-clarity.config';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DynamicFormsCoreModule,
    DynamicFormControlClarityModule,
    DynamicFormInputClarityModule,
    DynamicFormValidationClarityModule,
    DynamicFormWrapperClarityModule
  ],
  declarations: [
    ClrDynamicFormComponent
  ],
  exports: [
    ClrDynamicFormComponent,
    DynamicFormsCoreModule
  ]
})
export class DynamicFormsClarityModule {
  static forRoot(config?: DynamicFormConfig): ModuleWithProviders {
    return {
      ngModule: DynamicFormsClarityModule,
      providers: [
        {
          provide: DYNAMIC_FORM_CONFIG,
          useValue: config || clrDynamicFormConfig,
          multi: true
        },
        {
          provide: DynamicFormConfigService,
          useFactory: clrDynamicFormConfigFactory,
          deps: [ DYNAMIC_FORM_CONFIG ]
        },
        ...dynamicFormsCoreServices
      ]
    };
  }
}
