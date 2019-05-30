import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClrInputModule } from '@clr/angular';
import { DynamicFormValidationClarityModule } from '../dynamic-form-validation/dynamic-form-validation.module';
import { DynamicFormControlClarityComponent } from './dynamic-form-control.component';

@NgModule({
  imports: [
    CommonModule,
    ClrInputModule,
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
