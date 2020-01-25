import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ClrSelectModule } from '@clr/angular';
import { DynamicFormConfigModule, DynamicFormInputType } from '@dynamic-forms/core';
import { clrDynamicFormLibrary } from '../../dynamic-form-config/dynamic-form-library';
import { ClrDynamicFormSelectComponent } from './dynamic-form-select.component';

export const clrDynamicFormSelectType: DynamicFormInputType = {
  type: 'select',
  component: ClrDynamicFormSelectComponent,
  libraryName: clrDynamicFormLibrary.name
};

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClrSelectModule,
    DynamicFormConfigModule.withInput(clrDynamicFormSelectType)
  ],
  declarations: [
    ClrDynamicFormSelectComponent
  ],
  exports: [
    ClrDynamicFormSelectComponent,
    DynamicFormConfigModule
  ],
  entryComponents: [
    ClrDynamicFormSelectComponent
  ]
})
export class ClrDynamicFormSelectModule {}
