import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClrDynamicFormCheckboxModule } from './dynamic-form-checkbox/dynamic-form-checkbox.module';
import { ClrDynamicFormComboboxModule } from './dynamic-form-combobox/dynamic-form-combobox.module';
import { ClrDynamicFormDatepickerModule } from './dynamic-form-datepicker/dynamic-form-datepicker.module';
import { ClrDynamicFormNumberboxModule } from './dynamic-form-numberbox/dynamic-form-numberbox.module';
import { ClrDynamicFormRadioModule } from './dynamic-form-radio/dynamic-form-radio.module';
import { ClrDynamicFormSelectModule } from './dynamic-form-select/dynamic-form-select.module';
import { ClrDynamicFormTextareaModule } from './dynamic-form-textarea/dynamic-form-textarea.module';
import { ClrDynamicFormTextboxModule } from './dynamic-form-textbox/dynamic-form-textbox.module';

@NgModule({
  imports: [
    CommonModule,
    ClrDynamicFormCheckboxModule,
    ClrDynamicFormComboboxModule,
    ClrDynamicFormDatepickerModule,
    ClrDynamicFormNumberboxModule,
    ClrDynamicFormRadioModule,
    ClrDynamicFormSelectModule,
    ClrDynamicFormTextareaModule,
    ClrDynamicFormTextboxModule
  ]
})
export class ClrDynamicFormInputModule {}
