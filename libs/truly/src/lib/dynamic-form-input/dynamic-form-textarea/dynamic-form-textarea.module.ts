import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TextareaModule } from 'truly-ui';
import { TlDynamicFormTextareaComponent } from './dynamic-form-textarea.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TextareaModule
  ],
  declarations: [
    TlDynamicFormTextareaComponent
  ],
  entryComponents: [
    TlDynamicFormTextareaComponent
  ]
})
export class TlDynamicFormTextareaModule {}
