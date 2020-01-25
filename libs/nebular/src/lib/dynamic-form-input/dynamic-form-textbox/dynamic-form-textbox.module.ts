import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormConfigModule, DynamicFormInputType } from '@dynamic-forms/core';
import { nbDynamicFormLibrary } from '../../dynamic-form-config/dynamic-form-library';
import { NbDynamicFormTextboxComponent } from './dynamic-form-textbox.component';

export const nbDynamicFormTextboxType: DynamicFormInputType = {
  type: 'textbox',
  component: NbDynamicFormTextboxComponent,
  libraryName: nbDynamicFormLibrary.name
};

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DynamicFormConfigModule.withInput(nbDynamicFormTextboxType)
  ],
  declarations: [
    NbDynamicFormTextboxComponent
  ],
  exports: [
    NbDynamicFormTextboxComponent,
    DynamicFormConfigModule
  ],
  entryComponents: [
    NbDynamicFormTextboxComponent
  ]
})
export class NbDynamicFormTextboxModule {}
