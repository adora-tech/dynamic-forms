import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormConfig, DYNAMIC_FORM_CONFIG } from '@dynamic-forms/core';
import { DynamicFormConfigService } from '@dynamic-forms/core';
import { DynamicFormsCoreModule } from '@dynamic-forms/core';
import { dynamicFormsCoreServices } from '@dynamic-forms/core';
import { CoreModule } from 'truly-ui';
import { TlDynamicFormControlModule } from './dynamic-form-control/dynamic-form-control.module';
import { TlDynamicFormInputModule } from './dynamic-form-input/dynamic-form-input.module';
import { tlDynamicFormConfig, tlDynamicFormConfigFactory } from './dynamic-forms-truly.config';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DynamicFormsCoreModule,
    CoreModule.forRoot({
      theme: 'indigo'
    }),
    TlDynamicFormControlModule,
    TlDynamicFormInputModule
  ],
  exports: [
    DynamicFormsCoreModule
  ]
})
export class TlDynamicFormsModule {
  static forRoot(config?: DynamicFormConfig): ModuleWithProviders {
    return {
      ngModule: TlDynamicFormsModule,
      providers: [
        {
          provide: DYNAMIC_FORM_CONFIG,
          useValue: config || tlDynamicFormConfig,
          multi: true
        },
        {
          provide: DynamicFormConfigService,
          useFactory: tlDynamicFormConfigFactory,
          deps: [ DYNAMIC_FORM_CONFIG ]
        },
        ...dynamicFormsCoreServices
      ]
    };
  }
}
