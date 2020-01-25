import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ClrCheckboxModule } from '@clr/angular';
import { DynamicFormConfigModule, DynamicFormInputType } from '@dynamic-forms/core';
import { clrDynamicFormLibrary } from '../../dynamic-form-config/dynamic-form-library';
import { ClrDynamicFormCheckboxComponent } from './dynamic-form-checkbox.component';

export const clrDynamicFormCheckboxType: DynamicFormInputType = {
  type: 'checkbox',
  component: ClrDynamicFormCheckboxComponent,
  libraryName: clrDynamicFormLibrary.name
};

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClrCheckboxModule,
    DynamicFormConfigModule.withInput(clrDynamicFormCheckboxType)
  ],
  declarations: [
    ClrDynamicFormCheckboxComponent
  ],
  exports: [
    DynamicFormConfigModule,
    ClrDynamicFormCheckboxComponent
  ],
  entryComponents: [
    ClrDynamicFormCheckboxComponent
  ]
})
export class ClrDynamicFormCheckboxModule {}
