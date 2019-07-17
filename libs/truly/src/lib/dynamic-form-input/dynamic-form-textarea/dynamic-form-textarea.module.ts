import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TextareaModule } from 'truly-ui';
import { DynamicFormTextareaComponent } from './dynamic-form-textarea.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TextareaModule
  ],
  declarations: [
    DynamicFormTextareaComponent
  ],
  entryComponents: [
    DynamicFormTextareaComponent
  ]
})
export class DynamicFormTextareaModule {}
