import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TlDynamicFormControlComponent } from './dynamic-form-control.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TlDynamicFormControlComponent
  ],
  exports: [
    TlDynamicFormControlComponent
  ],
  entryComponents: [
    TlDynamicFormControlComponent
  ]
})
export class TlDynamicFormControlModule {}
