import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePickerModule } from 'truly-ui';
import { DynamicFormDatepickerComponent } from './dynamic-form-datepicker.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DatePickerModule
  ],
  declarations: [
    DynamicFormDatepickerComponent
  ],
  entryComponents: [
    DynamicFormDatepickerComponent
  ]
})
export class DynamicFormDatepickerModule {}
