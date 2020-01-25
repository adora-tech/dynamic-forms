import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormConfigModule, DynamicFormInputType } from '@dynamic-forms/core';
import { InputModule } from 'truly-ui';
import { tlDynamicFormLibrary } from '../../dynamic-form-config/dynamic-form-library';
import { TlDynamicFormTextboxComponent } from './dynamic-form-textbox.component';

export const tlDynamicFormTextboxType: DynamicFormInputType = {
  type: 'textbox',
  component: TlDynamicFormTextboxComponent,
  libraryName: tlDynamicFormLibrary.name
};

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputModule,
    DynamicFormConfigModule.withInput(tlDynamicFormTextboxType)
  ],
  declarations: [
    TlDynamicFormTextboxComponent
  ],
  exports: [
    TlDynamicFormTextboxComponent,
    DynamicFormConfigModule
  ],
  entryComponents: [
    TlDynamicFormTextboxComponent
  ]
})
export class TlDynamicFormTextboxModule {}
