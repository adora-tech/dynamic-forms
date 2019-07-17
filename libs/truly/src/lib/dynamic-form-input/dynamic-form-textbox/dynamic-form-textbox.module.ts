import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputModule } from 'truly-ui';
import { DynamicFormTextboxComponent } from './dynamic-form-textbox.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputModule
  ],
  declarations: [
    DynamicFormTextboxComponent
  ],
  entryComponents: [
    DynamicFormTextboxComponent
  ]
})
export class DynamicFormTextboxModule {}
