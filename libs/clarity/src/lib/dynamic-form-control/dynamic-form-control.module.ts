import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClrInputModule } from '@clr/angular';
import { ClrDynamicFormValidationModule } from '../dynamic-form-validation/dynamic-form-validation.module';
import { ClrDynamicFormControlComponent } from './dynamic-form-control.component';

@NgModule({
  imports: [
    CommonModule,
    ClrInputModule,
    ClrDynamicFormValidationModule
  ],
  declarations: [
    ClrDynamicFormControlComponent
  ],
  entryComponents: [
    ClrDynamicFormControlComponent
  ]
})
export class ClrDynamicFormControlModule {}
