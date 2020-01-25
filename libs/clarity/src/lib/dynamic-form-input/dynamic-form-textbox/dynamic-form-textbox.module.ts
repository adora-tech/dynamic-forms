import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ClrInputModule } from '@clr/angular';
import { DynamicFormConfigModule, DynamicFormInputType } from '@dynamic-forms/core';
import { clrDynamicFormLibrary } from '../../dynamic-form-config/dynamic-form-library';
import { ClrDynamicFormTextboxComponent } from './dynamic-form-textbox.component';

export const clrDynamicFormTextboxType: DynamicFormInputType = {
  type: 'textbox',
  component: ClrDynamicFormTextboxComponent,
  libraryName: clrDynamicFormLibrary.name
};

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClrInputModule,
    DynamicFormConfigModule.withInput(clrDynamicFormTextboxType)
  ],
  declarations: [
    ClrDynamicFormTextboxComponent
  ],
  exports: [
    ClrDynamicFormTextboxComponent,
    DynamicFormConfigModule
  ],
  entryComponents: [
    ClrDynamicFormTextboxComponent
  ]
})
export class ClrDynamicFormTextboxModule {}
