import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ClrInputModule } from '@clr/angular';
import { DynamicFormConfigModule, DynamicFormInputType } from '@dynamic-forms/core';
import { clrDynamicFormLibrary } from '../../dynamic-form-config/dynamic-form-library';
import { ClrDynamicFormComboboxComponent } from './dynamic-form-combobox.component';

export const clrDynamicFormComboboxType: DynamicFormInputType = {
  type: 'combobox',
  component: ClrDynamicFormComboboxComponent,
  libraryName: clrDynamicFormLibrary.name
};

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClrInputModule,
    DynamicFormConfigModule.withInput(clrDynamicFormComboboxType)
  ],
  declarations: [
    ClrDynamicFormComboboxComponent
  ],
  exports: [
    DynamicFormConfigModule,
    ClrDynamicFormComboboxComponent
  ],
  entryComponents: [
    ClrDynamicFormComboboxComponent
  ]
})
export class ClrDynamicFormComboboxModule {}
