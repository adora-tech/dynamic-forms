import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ClrInputModule } from '@clr/angular';
import { DynamicFormConfigModule, DynamicFormInputType } from '@dynamic-forms/core';
import { clrDynamicFormLibrary } from '../../dynamic-form-config/dynamic-form-library';
import { ClrDynamicFormNumberboxComponent } from './dynamic-form-numberbox.component';

export const clrDynamicFormNumberboxType: DynamicFormInputType = {
  type: 'numberbox',
  component: ClrDynamicFormNumberboxComponent,
  libraryName: clrDynamicFormLibrary.name
};

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClrInputModule,
    DynamicFormConfigModule.withInput(clrDynamicFormNumberboxType)
  ],
  declarations: [
    ClrDynamicFormNumberboxComponent
  ],
  exports: [
    DynamicFormConfigModule,
    ClrDynamicFormNumberboxComponent
  ],
  entryComponents: [
    ClrDynamicFormNumberboxComponent
  ]
})
export class ClrDynamicFormNumberboxModule {}
