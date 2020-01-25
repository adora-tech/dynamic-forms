import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormConfigModule, DynamicFormInputType } from '@dynamic-forms/core';
import { NbCheckboxModule } from '@nebular/theme';
import { nbDynamicFormLibrary } from '../../dynamic-form-config/dynamic-form-library';
import { NbDynamicFormCheckboxComponent } from './dynamic-form-checkbox.component';

export const nbDynamicFormCheckboxType: DynamicFormInputType = {
  type: 'checkbox',
  component: NbDynamicFormCheckboxComponent,
  libraryName: nbDynamicFormLibrary.name
};

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbCheckboxModule,
    DynamicFormConfigModule.withInput(nbDynamicFormCheckboxType)
  ],
  declarations: [
    NbDynamicFormCheckboxComponent
  ],
  exports: [
    NbDynamicFormCheckboxComponent,
    DynamicFormConfigModule
  ],
  entryComponents: [
    NbDynamicFormCheckboxComponent
  ]
})
export class NbDynamicFormCheckboxModule {}
