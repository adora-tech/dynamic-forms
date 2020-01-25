import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormConfigModule, DynamicFormInputType } from '@dynamic-forms/core';
import { nbDynamicFormLibrary } from '../../dynamic-form-config/dynamic-form-library';
import { NbDynamicFormNumberboxComponent } from './dynamic-form-numberbox.component';

export const nbDynamicFormNumberboxType: DynamicFormInputType = {
  type: 'numberbox',
  component: NbDynamicFormNumberboxComponent,
  libraryName: nbDynamicFormLibrary.name
};

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DynamicFormConfigModule.withInput(nbDynamicFormNumberboxType)
  ],
  declarations: [
    NbDynamicFormNumberboxComponent
  ],
  exports: [
    NbDynamicFormNumberboxComponent,
    DynamicFormConfigModule
  ],
  entryComponents: [
    NbDynamicFormNumberboxComponent
  ]
})
export class NbDynamicFormNumberboxModule {}
