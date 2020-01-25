import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormConfigModule, DynamicFormInputType } from '@dynamic-forms/core';
import { TextareaModule } from 'truly-ui';
import { tlDynamicFormLibrary } from '../../dynamic-form-config/dynamic-form-library';
import { TlDynamicFormTextareaComponent } from './dynamic-form-textarea.component';

export const tlDynamicFormTextareaType: DynamicFormInputType = {
  type: 'textarea',
  component: TlDynamicFormTextareaComponent,
  libraryName: tlDynamicFormLibrary.name
};

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TextareaModule,
    DynamicFormConfigModule.withInput(tlDynamicFormTextareaType)
  ],
  declarations: [
    TlDynamicFormTextareaComponent
  ],
  exports: [
    TlDynamicFormTextareaComponent,
    DynamicFormConfigModule
  ],
  entryComponents: [
    TlDynamicFormTextareaComponent
  ]
})
export class TlDynamicFormTextareaModule {}
