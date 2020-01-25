import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormConfigModule, DynamicFormInputType } from '@dynamic-forms/core';
import { AutoCompleteModule} from 'truly-ui';
import { tlDynamicFormLibrary } from '../../dynamic-form-config/dynamic-form-library';
import { TlDynamicFormComboboxComponent } from './dynamic-form-combobox.component';

export const tlDynamicFormComboboxType: DynamicFormInputType = {
  type: 'combobox',
  component: TlDynamicFormComboboxComponent,
  libraryName: tlDynamicFormLibrary.name
};

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    DynamicFormConfigModule.withInput(tlDynamicFormComboboxType)
  ],
  declarations: [
    TlDynamicFormComboboxComponent
  ],
  exports: [
    TlDynamicFormComboboxComponent,
    DynamicFormConfigModule
  ],
  entryComponents: [
    TlDynamicFormComboboxComponent
  ]
})
export class TlDynamicFormComboboxModule {}
