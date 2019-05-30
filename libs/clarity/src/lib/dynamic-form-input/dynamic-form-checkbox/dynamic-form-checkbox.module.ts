import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ClrCheckboxModule } from '@clr/angular';
import { DynamicFormCheckboxComponent } from './dynamic-form-checkbox.component';

@NgModule({
  imports: [
    CommonModule,
    ClrCheckboxModule,
    ReactiveFormsModule
  ],
  declarations: [
    DynamicFormCheckboxComponent
  ],
  entryComponents: [
    DynamicFormCheckboxComponent
  ]
})
export class DynamicFormCheckboxModule {}
