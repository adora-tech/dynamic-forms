import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckBoxModule} from 'truly-ui';
import { TlDynamicFormCheckboxComponent } from './dynamic-form-checkbox.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CheckBoxModule
  ],
  declarations: [
    TlDynamicFormCheckboxComponent
  ],
  entryComponents: [
    TlDynamicFormCheckboxComponent
  ]
})
export class TlDynamicFormCheckboxModule {}
