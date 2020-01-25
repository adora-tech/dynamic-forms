import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormConfigModule, DynamicFormInputType } from '@dynamic-forms/core';
import { tlDynamicFormLibrary } from '../../dynamic-form-config/dynamic-form-library';
import { TlDynamicFormSelectComponent } from './dynamic-form-select.component';

export const tlDynamicFormSelectType: DynamicFormInputType = {
  type: 'select',
  component: TlDynamicFormSelectComponent,
  libraryName: tlDynamicFormLibrary.name
};

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DynamicFormConfigModule.withInput(tlDynamicFormSelectType)
  ],
  declarations: [
    TlDynamicFormSelectComponent
  ],
  exports: [
    TlDynamicFormSelectComponent,
    DynamicFormConfigModule
  ],
  entryComponents: [
    TlDynamicFormSelectComponent
  ]
})
export class TlDynamicFormSelectModule {}
