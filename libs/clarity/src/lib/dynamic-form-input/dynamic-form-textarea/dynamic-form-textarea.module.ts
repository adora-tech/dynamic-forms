import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ClrTextareaModule } from '@clr/angular';
import { DynamicFormConfigModule, DynamicFormInputType } from '@dynamic-forms/core';
import { clrDynamicFormLibrary } from '../../dynamic-form-config/dynamic-form-library';
import { ClrDynamicFormTextareaComponent } from './dynamic-form-textarea.component';

export const clrDynamicFormTextareaType: DynamicFormInputType = {
  type: 'textarea',
  component: ClrDynamicFormTextareaComponent,
  libraryName: clrDynamicFormLibrary.name
};

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClrTextareaModule,
    DynamicFormConfigModule.withInput(clrDynamicFormTextareaType)
  ],
  declarations: [
    ClrDynamicFormTextareaComponent
  ],
  exports: [
    ClrDynamicFormTextareaComponent,
    DynamicFormConfigModule
  ],
  entryComponents: [
    ClrDynamicFormTextareaComponent
  ]
})
export class ClrDynamicFormTextareaModule {}
