import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TlDynamicFormSelectComponent } from './dynamic-form-select.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    TlDynamicFormSelectComponent
  ],
  entryComponents: [
    TlDynamicFormSelectComponent
  ]
})
export class TlDynamicFormSelectModule {}
