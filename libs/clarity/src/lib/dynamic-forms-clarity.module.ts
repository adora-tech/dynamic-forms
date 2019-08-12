import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { dynamicFormsCoreServices } from '@dynamic-forms/core';
import { DynamicFormConfigService } from '@dynamic-forms/core';
import { DynamicFormConfig, DYNAMIC_FORM_CONFIG } from '@dynamic-forms/core';
import { DynamicFormsCoreModule } from '@dynamic-forms/core';
import { ClrDynamicFormControlModule } from './dynamic-form-control/dynamic-form-control.module';
import { ClrDynamicFormInputModule } from './dynamic-form-input/dynamic-form-input.module';
import { ClrDynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { clrDynamicFormConfig, clrDynamicFormConfigFactory } from './dynamic-forms-clarity.config';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClarityModule,
    DynamicFormsCoreModule,
    ClrDynamicFormControlModule,
    ClrDynamicFormInputModule
  ],
  declarations: [
    ClrDynamicFormComponent
  ],
  exports: [
    ClrDynamicFormComponent,
    DynamicFormsCoreModule
  ]
})
export class ClrDynamicFormsModule {
  static forRoot(config?: DynamicFormConfig): ModuleWithProviders {
    return {
      ngModule: ClrDynamicFormsModule,
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
