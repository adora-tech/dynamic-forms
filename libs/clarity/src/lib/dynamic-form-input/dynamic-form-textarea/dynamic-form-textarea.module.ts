import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ClrTextareaModule } from '@clr/angular';
import { DynamicFormTextareaComponent } from './dynamic-form-textarea.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClrTextareaModule
  ],
  declarations: [
    DynamicFormTextareaComponent
  ],
  entryComponents: [
    DynamicFormTextareaComponent
  ]
})
export class DynamicFormTextareaModule {}
