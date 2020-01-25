import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TlDynamicFormRadioComponent } from './dynamic-form-radio.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    TlDynamicFormRadioComponent
  ],
  entryComponents: [
    TlDynamicFormRadioComponent
  ]
})
export class TlDynamicFormRadioModule {}
