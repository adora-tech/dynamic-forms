import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckBoxModule} from 'truly-ui';
import { DynamicFormCheckboxComponent } from './dynamic-form-checkbox.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CheckBoxModule
  ],
  declarations: [
    DynamicFormCheckboxComponent
  ],
  entryComponents: [
    DynamicFormCheckboxComponent
  ]
})
export class DynamicFormCheckboxModule {}
