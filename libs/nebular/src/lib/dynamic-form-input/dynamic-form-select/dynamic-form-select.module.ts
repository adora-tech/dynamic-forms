import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormConfigModule, DynamicFormInputType } from '@dynamic-forms/core';
import { nbDynamicFormLibrary } from '../../dynamic-form-config/dynamic-form-library';
import { NbDynamicFormSelectComponent } from './dynamic-form-select.component';

export const nbDynamicFormSelectType: DynamicFormInputType = {
  type: 'select',
  component: NbDynamicFormSelectComponent,
  libraryName: nbDynamicFormLibrary.name
};

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DynamicFormConfigModule.withInput(nbDynamicFormSelectType)
  ],
  declarations: [
    NbDynamicFormSelectComponent
  ],
  exports: [
    NbDynamicFormSelectComponent,
    DynamicFormConfigModule
  ],
  entryComponents: [
    NbDynamicFormSelectComponent
  ]
})
export class NbDynamicFormSelectModule {}
