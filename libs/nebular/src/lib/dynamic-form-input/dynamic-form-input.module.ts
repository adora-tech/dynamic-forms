import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbDynamicFormCheckboxModule } from './dynamic-form-checkbox/dynamic-form-checkbox.module';
import { NbDynamicFormComboboxModule } from './dynamic-form-combobox/dynamic-form-combobox.module';
import { NbDynamicFormDatepickerModule } from './dynamic-form-datepicker/dynamic-form-datepicker.module';
import { NbDynamicFormNumberboxModule } from './dynamic-form-numberbox/dynamic-form-numberbox.module';
import { NbDynamicFormRadioModule } from './dynamic-form-radio/dynamic-form-radio.module';
import { NbDynamicFormSelectModule } from './dynamic-form-select/dynamic-form-select.module';
import { NbDynamicFormTextareaModule } from './dynamic-form-textarea/dynamic-form-textarea.module';
import { NbDynamicFormTextboxModule } from './dynamic-form-textbox/dynamic-form-textbox.module';

@NgModule({
  imports: [
    CommonModule,
    NbDynamicFormCheckboxModule,
    NbDynamicFormComboboxModule,
    NbDynamicFormDatepickerModule,
    NbDynamicFormNumberboxModule,
    NbDynamicFormRadioModule,
    NbDynamicFormSelectModule,
    NbDynamicFormTextareaModule,
    NbDynamicFormTextboxModule
  ]
})
export class NbDynamicFormInputModule {}
