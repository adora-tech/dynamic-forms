import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TlDynamicFormCheckboxModule } from './dynamic-form-checkbox/dynamic-form-checkbox.module';
import { TlDynamicFormComboboxModule } from './dynamic-form-combobox/dynamic-form-combobox.module';
import { TlDynamicFormDatepickerModule } from './dynamic-form-datepicker/dynamic-form-datepicker.module';
import { TlDynamicFormNumberboxModule } from './dynamic-form-numberbox/dynamic-form-numberbox.module';
import { TlDynamicFormRadioModule } from './dynamic-form-radio/dynamic-form-radio.module';
import { TlDynamicFormSelectModule } from './dynamic-form-select/dynamic-form-select.module';
import { TlDynamicFormTextareaModule } from './dynamic-form-textarea/dynamic-form-textarea.module';
import { TlDynamicFormTextboxModule } from './dynamic-form-textbox/dynamic-form-textbox.module';

@NgModule({
  imports: [
    CommonModule,
    TlDynamicFormCheckboxModule,
    TlDynamicFormComboboxModule,
    TlDynamicFormDatepickerModule,
    TlDynamicFormNumberboxModule,
    TlDynamicFormRadioModule,
    TlDynamicFormSelectModule,
    TlDynamicFormTextareaModule,
    TlDynamicFormTextboxModule
  ]
})
export class TlDynamicFormInputModule {}
