import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ClrInputModule } from '@clr/angular';
import { DynamicFormComboboxComponent } from './dynamic-form-combobox.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClrInputModule
  ],
  declarations: [
    DynamicFormComboboxComponent
  ],
  entryComponents: [
    DynamicFormComboboxComponent
  ]
})
export class DynamicFormComboboxModule {}
