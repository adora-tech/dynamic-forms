import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DynamicFormValidationClarityModule } from '../dynamic-form-validation/dynamic-form-validation.module';
import { DynamicFormControlClarityComponent } from './dynamic-form-control.component';

@NgModule({
  imports: [
    CommonModule,
    DynamicFormValidationClarityModule
  ],
  declarations: [
    DynamicFormControlClarityComponent
  ],
  entryComponents: [
    DynamicFormControlClarityComponent
  ]
})
export class DynamicFormControlClarityModule {}
