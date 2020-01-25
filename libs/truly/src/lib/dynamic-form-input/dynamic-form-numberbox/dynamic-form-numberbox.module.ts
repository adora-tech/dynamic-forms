import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputModule } from 'truly-ui';
import { TlDynamicFormNumberboxComponent } from './dynamic-form-numberbox.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputModule
  ],
  declarations: [
    TlDynamicFormNumberboxComponent
  ],
  entryComponents: [
    TlDynamicFormNumberboxComponent
  ]
})
export class TlDynamicFormNumberboxModule {}
