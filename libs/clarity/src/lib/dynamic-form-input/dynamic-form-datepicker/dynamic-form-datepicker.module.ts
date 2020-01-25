import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ClrCommonFormsModule, ClrDatepickerModule } from '@clr/angular';
import { DynamicFormConfigModule, DynamicFormInputType } from '@dynamic-forms/core';
import { clrDynamicFormLibrary } from '../../dynamic-form-config/dynamic-form-library';
import { ClrDynamicFormDatepickerComponent } from './dynamic-form-datepicker.component';

export const clrDynamicFormDatepickerType: DynamicFormInputType = {
  type: 'datepicker',
  component: ClrDynamicFormDatepickerComponent,
  libraryName: clrDynamicFormLibrary.name
};

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClrCommonFormsModule,
    ClrDatepickerModule,
    DynamicFormConfigModule.withInput(clrDynamicFormDatepickerType)
  ],
  declarations: [
    ClrDynamicFormDatepickerComponent
  ],
  exports: [
    DynamicFormConfigModule,
    ClrDynamicFormDatepickerComponent
  ],
  entryComponents: [
    ClrDynamicFormDatepickerComponent
  ]
})
export class ClrDynamicFormDatepickerModule {}
