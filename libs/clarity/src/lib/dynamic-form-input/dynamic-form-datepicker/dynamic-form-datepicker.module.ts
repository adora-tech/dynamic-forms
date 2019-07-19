import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ClrDatepickerModule } from '@clr/angular';
import { DynamicFormDatepickerComponent } from './dynamic-form-datepicker.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClrDatepickerModule
  ],
  declarations: [
    DynamicFormDatepickerComponent
  ],
  entryComponents: [
    DynamicFormDatepickerComponent
  ]
})
export class DynamicFormDatepickerModule {}
