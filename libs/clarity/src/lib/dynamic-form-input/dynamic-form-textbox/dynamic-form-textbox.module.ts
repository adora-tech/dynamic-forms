import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ClrInputModule } from '@clr/angular';
import { DynamicFormTextboxComponent } from './dynamic-form-textbox.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClrInputModule
  ],
  declarations: [
    DynamicFormTextboxComponent
  ],
  entryComponents: [
    DynamicFormTextboxComponent
  ]
})
export class DynamicFormTextboxModule {}
