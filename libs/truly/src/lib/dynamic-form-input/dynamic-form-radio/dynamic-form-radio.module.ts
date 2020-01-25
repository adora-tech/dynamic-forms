import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormConfigModule, DynamicFormInputType } from '@dynamic-forms/core';
import { tlDynamicFormLibrary } from '../../dynamic-form-config/dynamic-form-library';
import { TlDynamicFormRadioComponent } from './dynamic-form-radio.component';

export const tlDynamicFormRadioType: DynamicFormInputType = {
  type: 'radio',
  component: TlDynamicFormRadioComponent,
  libraryName: tlDynamicFormLibrary.name
};

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DynamicFormConfigModule.withInput(tlDynamicFormRadioType)
  ],
  declarations: [
    TlDynamicFormRadioComponent
  ],
  exports: [
    TlDynamicFormRadioComponent,
    DynamicFormConfigModule
  ],
  entryComponents: [
    TlDynamicFormRadioComponent
  ]
})
export class TlDynamicFormRadioModule {}
