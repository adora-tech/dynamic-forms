import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePickerModule } from 'truly-ui';
import { TlDynamicFormDatepickerComponent } from './dynamic-form-datepicker.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DatePickerModule
  ],
  declarations: [
    TlDynamicFormDatepickerComponent
  ],
  entryComponents: [
    TlDynamicFormDatepickerComponent
  ]
})
export class TlDynamicFormDatepickerModule {}
