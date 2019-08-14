import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ClrRadioModule } from '@clr/angular';
import { DynamicFormRadioComponent } from './dynamic-form-radio.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClrRadioModule
  ],
  declarations: [
    DynamicFormRadioComponent
  ],
  entryComponents: [
    DynamicFormRadioComponent
  ]
})
export class DynamicFormRadioModule {}
