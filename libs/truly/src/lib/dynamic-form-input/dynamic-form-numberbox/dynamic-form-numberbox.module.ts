import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormConfigModule, DynamicFormInputType } from '@dynamic-forms/core';
import { InputModule } from 'truly-ui';
import { tlDynamicFormLibrary } from '../../dynamic-form-config/dynamic-form-library';
import { TlDynamicFormNumberboxComponent } from './dynamic-form-numberbox.component';

export const tlDynamicFormNumberboxType: DynamicFormInputType = {
  type: 'numberbox',
  component: TlDynamicFormNumberboxComponent,
  libraryName: tlDynamicFormLibrary.name
};

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputModule,
    DynamicFormConfigModule.withInput(tlDynamicFormNumberboxType)
  ],
  declarations: [
    TlDynamicFormNumberboxComponent
  ],
  exports: [
    TlDynamicFormNumberboxComponent,
    DynamicFormConfigModule
  ],
  entryComponents: [
    TlDynamicFormNumberboxComponent
  ]
})
export class TlDynamicFormNumberboxModule {}
