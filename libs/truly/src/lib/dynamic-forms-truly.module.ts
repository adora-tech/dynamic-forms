import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormConfig, DYNAMIC_FORM_CONFIG } from '@dynamic-forms/core';
import { DynamicFormConfigService } from '@dynamic-forms/core';
import { DynamicFormsCoreModule } from '@dynamic-forms/core';
import { dynamicFormsCoreServices } from '@dynamic-forms/core';
import { CoreModule } from 'truly-ui';
import { DynamicFormInputTrulyModule } from './dynamic-form-input/dynamic-form-input.module';
import { trulyDynamicFormConfig, trulyDynamicFormConfigFactory } from './dynamic-forms-truly.config';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DynamicFormsCoreModule,
    CoreModule.forRoot({
      theme: 'indigo'
    }),
    DynamicFormInputTrulyModule
  ],
  exports: [
    DynamicFormsCoreModule
  ]
})
export class DynamicFormsTrulyModule {
  static forRoot(config?: DynamicFormConfig): ModuleWithProviders {
    return {
      ngModule: DynamicFormsTrulyModule,
      providers: [
        {
          provide: DYNAMIC_FORM_CONFIG,
          useValue: config || trulyDynamicFormConfig,
          multi: true
        },
        {
          provide: DynamicFormConfigService,
          useFactory: trulyDynamicFormConfigFactory,
          deps: [ DYNAMIC_FORM_CONFIG ]
        },
        ...dynamicFormsCoreServices
      ]
    };
  }
}
