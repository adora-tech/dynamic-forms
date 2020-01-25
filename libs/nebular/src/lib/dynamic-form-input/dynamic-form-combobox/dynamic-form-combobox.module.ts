import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormConfigModule, DynamicFormInputType } from '@dynamic-forms/core';
import { nbDynamicFormLibrary } from '../../dynamic-form-config/dynamic-form-library';
import { NbDynamicFormComboboxComponent } from './dynamic-form-combobox.component';

export const nbDynamicFormComboboxType: DynamicFormInputType = {
  type: 'combobox',
  component: NbDynamicFormComboboxComponent,
  libraryName: nbDynamicFormLibrary.name
};

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DynamicFormConfigModule.withInput(nbDynamicFormComboboxType)
  ],
  declarations: [
    NbDynamicFormComboboxComponent
  ],
  exports: [
    NbDynamicFormComboboxComponent,
    DynamicFormConfigModule
  ],
  entryComponents: [
    NbDynamicFormComboboxComponent
  ]
})
export class NbDynamicFormComboboxModule {}
