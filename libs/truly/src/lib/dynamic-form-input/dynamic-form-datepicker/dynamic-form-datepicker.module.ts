import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormConfigModule, DynamicFormInputType } from '@dynamic-forms/core';
import { DatePickerModule } from 'truly-ui';
import { tlDynamicFormLibrary } from '../../dynamic-form-config/dynamic-form-library';
import { TlDynamicFormDatepickerComponent } from './dynamic-form-datepicker.component';

export const tlDynamicFormDatepickerType: DynamicFormInputType = {
  type: 'datepicker',
  component: TlDynamicFormDatepickerComponent,
  libraryName: tlDynamicFormLibrary.name
};

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DatePickerModule,
    DynamicFormConfigModule.withInput(tlDynamicFormDatepickerType)
  ],
  declarations: [
    TlDynamicFormDatepickerComponent
  ],
  exports: [
    TlDynamicFormDatepickerComponent,
    DynamicFormConfigModule
  ],
  entryComponents: [
    TlDynamicFormDatepickerComponent
  ]
})
export class TlDynamicFormDatepickerModule {}
