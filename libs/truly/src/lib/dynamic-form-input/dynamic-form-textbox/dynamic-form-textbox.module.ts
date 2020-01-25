import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputModule } from 'truly-ui';
import { TlDynamicFormTextboxComponent } from './dynamic-form-textbox.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputModule
  ],
  declarations: [
    TlDynamicFormTextboxComponent
  ],
  entryComponents: [
    TlDynamicFormTextboxComponent
  ]
})
export class TlDynamicFormTextboxModule {}
