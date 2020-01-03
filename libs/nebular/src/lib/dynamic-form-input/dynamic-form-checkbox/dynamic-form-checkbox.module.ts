import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NbCheckboxModule } from '@nebular/theme';
import { DynamicFormCheckboxComponent } from './dynamic-form-checkbox.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbCheckboxModule
  ],
  declarations: [
    DynamicFormCheckboxComponent
  ],
  entryComponents: [
    DynamicFormCheckboxComponent
  ]
})
export class DynamicFormCheckboxModule {}
