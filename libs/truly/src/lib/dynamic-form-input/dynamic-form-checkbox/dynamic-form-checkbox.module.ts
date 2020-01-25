import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormConfigModule, DynamicFormInputType } from '@dynamic-forms/core';
import { CheckBoxModule} from 'truly-ui';
import { tlDynamicFormLibrary } from '../../dynamic-form-config/dynamic-form-library';
import { TlDynamicFormCheckboxComponent } from './dynamic-form-checkbox.component';

export const tlDynamicFormCheckboxType: DynamicFormInputType = {
  type: 'checkbox',
  component: TlDynamicFormCheckboxComponent,
  libraryName: tlDynamicFormLibrary.name
};

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CheckBoxModule,
    DynamicFormConfigModule.withInput(tlDynamicFormCheckboxType)
  ],
  declarations: [
    TlDynamicFormCheckboxComponent
  ],
  exports: [
    TlDynamicFormCheckboxComponent,
    DynamicFormConfigModule
  ],
  entryComponents: [
    TlDynamicFormCheckboxComponent
  ]
})
export class TlDynamicFormCheckboxModule {}
