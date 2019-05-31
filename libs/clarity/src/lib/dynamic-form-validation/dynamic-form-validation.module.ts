import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClrDynamicFormValidationComponent } from './dynamic-form-validation.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ClrDynamicFormValidationComponent
  ],
  exports: [
    ClrDynamicFormValidationComponent
  ]
})
export class ClrDynamicFormValidationModule {}
