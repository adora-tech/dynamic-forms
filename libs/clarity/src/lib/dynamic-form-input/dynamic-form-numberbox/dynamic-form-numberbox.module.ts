import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ClrInputModule } from '@clr/angular';
import { DynamicFormNumberboxComponent } from './dynamic-form-numberbox.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClrInputModule
  ],
  declarations: [
    DynamicFormNumberboxComponent
  ],
  entryComponents: [
    DynamicFormNumberboxComponent
  ]
})
export class DynamicFormNumberboxModule {}
