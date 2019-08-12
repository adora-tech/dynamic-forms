import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClrInputModule } from '@clr/angular';
import { ClrDynamicFormControlComponent } from './dynamic-form-control.component';

@NgModule({
  imports: [
    CommonModule,
    ClrInputModule
  ],
  declarations: [
    ClrDynamicFormControlComponent
  ],
  entryComponents: [
    ClrDynamicFormControlComponent
  ]
})
export class ClrDynamicFormControlModule {}
