import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputModule } from 'truly-ui';
import { DynamicFormNumberboxComponent } from './dynamic-form-numberbox.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputModule
  ],
  declarations: [
    DynamicFormNumberboxComponent
  ],
  entryComponents: [
    DynamicFormNumberboxComponent
  ]
})
export class DynamicFormNumberboxModule {}
