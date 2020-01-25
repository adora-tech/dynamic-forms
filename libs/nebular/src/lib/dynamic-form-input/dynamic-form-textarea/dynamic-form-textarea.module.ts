import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormConfigModule, DynamicFormInputType } from '@dynamic-forms/core';
import { nbDynamicFormLibrary } from '../../dynamic-form-config/dynamic-form-library';
import { NbDynamicFormTextareaComponent } from './dynamic-form-textarea.component';

export const nbDynamicFormTextareaType: DynamicFormInputType = {
  type: 'textarea',
  component: NbDynamicFormTextareaComponent,
  libraryName: nbDynamicFormLibrary.name
};

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DynamicFormConfigModule.withInput(nbDynamicFormTextareaType)
  ],
  declarations: [
    NbDynamicFormTextareaComponent
  ],
  exports: [
    NbDynamicFormTextareaComponent,
    DynamicFormConfigModule
  ],
  entryComponents: [
    NbDynamicFormTextareaComponent
  ]
})
export class NbDynamicFormTextareaModule {}
