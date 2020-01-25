import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ClrRadioModule } from '@clr/angular';
import { DynamicFormConfigModule, DynamicFormInputType } from '@dynamic-forms/core';
import { clrDynamicFormLibrary } from '../../dynamic-form-config/dynamic-form-library';
import { ClrDynamicFormRadioComponent } from './dynamic-form-radio.component';

export const clrDynamicFormRadioType: DynamicFormInputType = {
  type: 'radio',
  component: ClrDynamicFormRadioComponent,
  libraryName: clrDynamicFormLibrary.name
};

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClrRadioModule,
    DynamicFormConfigModule.withInput(clrDynamicFormRadioType)
  ],
  declarations: [
    ClrDynamicFormRadioComponent
  ],
  exports: [
    DynamicFormConfigModule,
    ClrDynamicFormRadioComponent
  ],
  entryComponents: [
    ClrDynamicFormRadioComponent
  ]
})
export class ClrDynamicFormRadioModule {}
